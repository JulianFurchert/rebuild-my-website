import React, { useState, useEffect, useRef } from 'react';
import { styled } from '../stitches.config';
import * as Dialog from '@radix-ui/react-dialog';
import { Link, Box } from '../components';
import { User, Coffee, Archive, Heart, Book, Umbrella, Tool } from 'react-feather';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router'

const MotionOverlay = styled(motion.div, {
  backgroundColor: 'rgba(0, 0, 0, .55)',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 300,
});

const StyledContent = styled(Dialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  maxWidth: 'fit-content',
  maxHeight: '85vh',
  marginTop: '-5vh',
  zIndex: 300,
  paddingX: '$4',
  backgroundColor: 'transparent',
  '&:focus': {
    outline: 'none',
  },
});

const MotionContent = styled(motion.div, {
  backgroundColor: '$loContrast',
  color: '$hiContrast',
  zIndex: 300,
  padding: '$3 0',
  borderRadius: 15,
});

const Trigger = styled(Dialog.Trigger, {
  border: 'none',
  margin: 0,
  padding: 0,
  width: 'auto',
  overflow: 'visible',
  background: 'transparent',
  outline: 'none',
  fontFamily: '$body',
  color: '$hiContrast',
  lineHeight: 1.5,
  fontSize: '$4',
  fontWeight: '$body',
  textDecoration: 'none',
  bp1: {
    fontSize: '$3',
  },
  '&:hover':{
    color: '$primary',
  },
});

type LinkRef = React.MutableRefObject<HTMLAnchorElement>;

type LinkRefs = {
  [key: string]: LinkRef
}

const MenuDialog = () => {
  const [open, setOpen] = useState(false);
  const refs = useRef<LinkRefs>()
  const { pathname } = useRouter();

  const handleOnClick = () => {
    setOpen(false)
  }

  const addRef = (path: string, link: LinkRef) => {
    refs.current = {...refs.current, [path]: link}
  }

  const onOpenAutoFocus = (e: Event) => {
    const linkRef = refs.current[pathname];
    if(linkRef){
      e.preventDefault()
      linkRef.current.focus();
    }
  }

  return(
    <AnimatePresence>
      <Dialog.Root 
        open={open} 
        onOpenChange={open => setOpen(open)}
      >
        <Trigger>
          Menu
        </Trigger>
        <Dialog.Overlay>
          <MotionOverlay 
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.1 }}
          />
        </Dialog.Overlay>
        <StyledContent onOpenAutoFocus={onOpenAutoFocus}>
          <MotionContent
            key="content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
          >
            <MenuLink 
              icon={<Coffee size={20} /> }
              onClick={handleOnClick}
              href="/"
              label="Home"
              addRef={addRef}
            />
            <MenuLink 
              icon={<User size={20} /> }
              onClick={handleOnClick}
              href="/about"
              label="About"
              addRef={addRef}
            />
            <MenuLink 
              // icon={<Book size={20} /> }
              icon={<Tool size={20} /> }
              onClick={handleOnClick}
              href="/experience"
              label="Experience"
              disabeld
              addRef={addRef}
            />
            <MenuLink 
              // icon={<Archive size={20} /> }
              icon={<Tool size={20} /> }
              onClick={handleOnClick}
              href="/archive"
              label="Archive"
              disabeld
              addRef={addRef}
            />
            <MenuLink 
              icon={<Umbrella size={20} /> }
              onClick={handleOnClick}
              href="/digital-garden"
              label="Digital Garden"
              addRef={addRef}
            />
          </MotionContent>
        </StyledContent>
      </Dialog.Root>
    </AnimatePresence>
  );
}

type MenuLinkProps = {
  icon: React.ReactNode,
  label: string,
  onClick: () => void,
  href: string,
  disabeld?: boolean,
  addRef?: (path: string, link: LinkRef) => void
}

const MenuLink: React.FC<MenuLinkProps> = ({
  icon,
  label,
  onClick,
  href,
  addRef,
  disabeld
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(()=>{
    addRef(href, linkRef)
  },[href])

  const handleOnClick = () => {
    onClick();
  }

  return(
    <Link 
      ref={linkRef} 
      disabeld={disabeld}
      onClick={handleOnClick} 
      href={href} 
      variant="menu"
    >
      {icon}
      <Box as="span" css={{ marginLeft: '$3' }}>
        {label}
      </Box>
    </Link>
  )
}

export default MenuDialog