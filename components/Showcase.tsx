import React, { useEffect } from 'react';
import { motion } from "framer-motion"
import { AspectRatio } from './AspectRatio'
import { Mockup, MockupProps } from './Mockup'
import { useInView } from 'react-intersection-observer';
import { styled } from '../stitches.config'

export type ShowcaseProps = {
  ratio?: [number, number],
  scheme?: 'auto' | 'light' | 'dark',
  size?: 'full' | undefined,
  mockup?: MockupProps,
  isShown?: boolean,
  onInView?: () => void
}

export const Showcase: React.FC<ShowcaseProps> = ({ 
  ratio = [1, 1],
  scheme = 'auto',
  size,
  mockup,
  onInView,
  isShown = true,
  children
 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });  

  useEffect(()=>{
    onInView && onInView()
  },[inView])

  isShown = isShown && inView

  return(
    <Container ref={ref}>
      <AspectRatio ratio={ratio}>
        <Content scheme={scheme} size={size}>
          {isShown && (
            <motion.div
              initial={{ y: 600, opacity: 0  }}
              animate={{ y: 0, opacity: 1 }}
              style={{ width: '100%' }}
              transition={{
                  type: "spring",
                  damping: 50,
                  stiffness: 300,
                  mass: 3,
              }} 
            >
              <Mockup template={size === 'full' ? 'none' : 'default'} {...mockup} >
                {children}
              </Mockup>
            </motion.div>
          )}
        </Content>
      </AspectRatio>
    </Container>
  )
}

const Container = styled('div', {
  padding: '$2',
  width: '100%'
})

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$6',
  height: '100%',
  width: '100%',
  variants: {
    scheme: {
      auto: {
        backgroundColor: '$surface'
      },
      light: {
        backgroundColor: '$gray'
      },
      dark: {
        backgroundColor: '$darkGray'
      }
    },
    size: {
      full: {
        padding: 0,
      },
    }
  }
})

export default Showcase