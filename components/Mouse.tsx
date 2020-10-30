import React from 'react';
import { motion, MotionProps } from "framer-motion"
import { Cursor, CursorProps } from "./Cursor"

export type MouseProps = CursorProps & MotionProps

export const mouseTransition = {
  type: 'spring',
  stiffness: 25,
  damping: 10,
  mass: 1
}

export const Mouse: React.FC<MouseProps> = ({variant, ...props}) => {
  return (
    <motion.div
      style={{
        top: '-200%',
        left: '-200%',
        zIndex: 100, 
        position: 'absolute',
        transform: 'translate(-50%, -50%)'
      }}
      transition={mouseTransition}
      {...props}
    >
      <Cursor variant={variant} />
    </motion.div>
  )
}

export const outsidePosition = () => {
  const num = Math.ceil(Math.random() * 4)
  if(num === 1){
    return {
      top: '-20%',
      left: position(),
    }
  }
  if(num === 2){
    return {
      top: position(),
      left: '120%',
    }
  }
  if(num === 3){
    return {
      top: '120%',
      left: position(),
    }
  }
  if(num === 4){
    return {
      top: position(),
      left: '-20%',
    }
  }
}

const position = () => `${Math.ceil(Math.random() * 100)}%`