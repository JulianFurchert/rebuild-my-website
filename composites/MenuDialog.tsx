import { useState } from 'react';
import { styled } from '../stitches.config';
import * as Dialog from '@radix-ui/react-dialog';
import { TextButton, Link, Box } from '../components';
import { Menu, User, Coffee, Archive, Heart, Book, Umbrella, Tool } from 'react-feather';
// import { Menu } from 'react-feather';
import { motion, AnimatePresence } from "framer-motion";

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

const MenuDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(false)
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
        <StyledContent>
          <MotionContent
            key="content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
          >
            <Link onClick={handleOnClick} href="/" variant="menu">
              <Coffee size={20} /> 
              <Box as="span" css={{ marginLeft: '$3' }}>
                Home
              </Box>
            </Link>
            <Link onClick={handleOnClick} href="/about" variant="menu">
              <User size={20} /> 
              <Box as="span" css={{ marginLeft: '$3' }}>
                About
              </Box>
            </Link>
            <Link disabeld onClick={handleOnClick} href="/experience" variant="menu">
              {/* <Book size={20} />  */}
              <Tool size={20} />
              <Box as="span" css={{ marginLeft: '$3' }}>
                Experience
              </Box>
            </Link>
            <Link disabeld onClick={handleOnClick} href="/archive" variant="menu">
              {/* <Archive size={20} /> */}
              <Tool size={20} />
              <Box as="span" css={{ marginLeft: '$3' }}>
                Archive
              </Box>
            </Link>
            <Link disabeld onClick={handleOnClick} href="/digital-garden" variant="menu">
              {/* <Umbrella size={20} />  */}
              <Tool size={20} />
              <Box as="span" css={{ marginLeft: '$3' }}>
                Digital Garden
              </Box>
            </Link>
          </MotionContent>
        </StyledContent>
      </Dialog.Root>
    </AnimatePresence>
  );
}

export default MenuDialog