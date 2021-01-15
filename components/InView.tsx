import React, { useEffect } from 'react';
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
  isVisible?: boolean,
  onChange?: () => void
}

export const InView: React.FC<InViewProps> = ({ children, onChange, isVisible = true }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(()=>{
    inView && onChange && onChange()
  },[inView])

  return(
    <div ref={ref} style={{ width: '100%' }}>
      <motion.div
        initial="hidden"
        animate={inView && isVisible ? 'visible' : 'hidden'}
        variants={variants}
        transition={transition} 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default InView

const Container = styled('div', {})

