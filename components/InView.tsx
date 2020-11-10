import React from 'react';
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { styled } from '../stitches.config'

const transition = {
  type: "spring",
  damping: 50,
  stiffness: 300,
  mass: 3,
}

const variants = {
  hidden: { y: 600, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export type InViewProps = {
  isVisible?: boolean
}

export const InView: React.FC<InViewProps> = ({ children, isVisible = true }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });  

  return(
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView && isVisible ? 'visible' : 'hidden'}
        variants={variants}
        transition={transition} 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default InView

const Container = styled('div', {})

