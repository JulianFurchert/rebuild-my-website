import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"
import { Thumbnail, ThumbnailProps, Svg, Mouse, outsidePosition, mouseTransition } from '../components'

const pathVariants = {
  0: {
    d: 'M96 528 L140 528 L140 396 L184 396 L184 308 L228 308 L228 220 L272 220 L272 308 L316 308 L316 396 L360 396 L360 528 L404 528',
  },
  1: {
    d: 'M135 528 L135 528 L135 374 L212 374 L212 297 L212 297 L212 220 L289 220 L289 297 L289 297 L289 374 L366 374 L366 528 L366 528',
  },
  2: {
    d: 'M173 529 L173 529 L173 375 L173 375 L173 221 L173 221 L173 221 L327 221 L327 221 L327 221 L327 375 L327 375 L327 529 L327 529',
  }
} 

const path2Variants = {
  0: {
    d: 'M140 440 L360 440',
  },
  1: {
    d: 'M135 451 L366 451',
  },
  2: {
    d: 'M173 375 L327 375',
  }
} 

export const TypeScanner: React.FC<Partial<ThumbnailProps>> = props => {
  const mouse = useAnimation();
  const [index, setIndex] = useState(0);
  const [gridIndex, setGridIndex] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      await mouse.start({ 
        top: '45%',
        left: '50%',
      })
      setGridIndex(i => (i + 1) % 3) 
      await mouse.start({
        ...outsidePosition(), 
        transition: {
          ...mouseTransition,
          delay: 2,
        }
      })
      setIndex(i => (i + 1) % 3)
    }
    sequence()
  }, [index])

  return(
    <Thumbnail 
      name="TypeScanner - Experimental Type Generator"
      href='/projects/typescanner'
      {...props}
    >
      <Mouse animate={mouse} />
      <Svg viewBox="0 0 500 750" width="100%">
        <rect 
          height="750" 
          width="500" 
          stroke="currentColor" 
          fill="none" 
          strokeWidth="4px"  
          vectorEffect="non-scaling-stroke" 
        />
        <g
          stroke="currentColor" 
          strokeWidth="16px" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <motion.path 
            variants={pathVariants}
            animate={gridIndex.toString()}
            transition={{duration: 0.6}}
            initial="0"
          />
          <motion.path 
            variants={path2Variants}
            animate={gridIndex.toString()}
            transition={{duration: 0.6}}
            initial="0"
          />
        </g>
        <Grid index={gridIndex} />
      </Svg>
    </Thumbnail>
  )
}

const Grid: React.FC<{ index: number }> = ({ index }) => (
  <g stroke="currentColor" strokeWidth="1px">
    {index === 0 && (
      <>
      <line x1="480" y1="44" x2="20" y2="44"/>
      <line x1="480" y1="88" x2="20" y2="88"/>
      <line x1="480" y1="132" x2="20" y2="132"/>
      <line x1="480" y1="176" x2="20" y2="176"/>
      <line x1="480" y1="220" x2="20" y2="220"/>
      <line x1="480" y1="264" x2="20" y2="264"/>
      <line x1="480" y1="308" x2="20" y2="308"/>
      <line x1="480" y1="352" x2="20" y2="352"/>
      <line x1="480" y1="396" x2="20" y2="396"/>
      <line x1="480" y1="440" x2="20" y2="440"/>
      <line x1="480" y1="484" x2="20" y2="484"/>
      <line x1="480" y1="528" x2="20" y2="528"/>
      <line x1="480" y1="572" x2="20" y2="572"/>
      <line x1="480" y1="616" x2="20" y2="616"/>
      <line x1="480" y1="660" x2="20" y2="660"/>
      <line x1="480" y1="704" x2="20" y2="704"/>
      <line x1="52" y1="20" x2="52" y2="730"/>
      <line x1="96" y1="20" x2="96" y2="730"/>
      <line x1="140" y1="20" x2="140" y2="730"/>
      <line x1="184" y1="20" x2="184" y2="730"/>
      <line x1="228" y1="20" x2="228" y2="730"/>
      <line x1="272" y1="20" x2="272" y2="730"/>
      <line x1="316" y1="20" x2="316" y2="730"/>
      <line x1="360" y1="20" x2="360" y2="730"/>
      <line x1="404" y1="20" x2="404" y2="730"/>
      <line x1="448" y1="20" x2="448" y2="730"/>
      </>
    )}
    {index === 1 && (
      <>
      <line x1="135" y1="20" x2="135" y2="730"/>
      <line x1="58" y1="20" x2="58" y2="730"/>
      <line x1="212" y1="20" x2="212" y2="730"/>
      <line x1="289" y1="20" x2="289" y2="730"/>
      <line x1="366" y1="20" x2="366" y2="730"/>
      <line x1="443" y1="20" x2="443" y2="730"/>
      <line x1="20" y1="143" x2="480" y2="143"/>
      <line x1="20" y1="66" x2="480" y2="66"/>
      <line x1="20" y1="220" x2="480" y2="220"/>
      <line x1="26" y1="297" x2="480" y2="297"/>
      <line x1="20" y1="374" x2="480" y2="374"/>
      <line x1="20" y1="451" x2="480" y2="451"/>
      <line x1="20" y1="528" x2="480" y2="528"/>
      <line x1="20" y1="605" x2="480" y2="605"/>
      <line x1="20" y1="682" x2="480" y2="682"/>
      </>
    )}
    {index === 2 && (
      <>
      <line x1="173" y1="20" x2="173" y2="730"/>
      <line x1="327" y1="20" x2="327" y2="730"/>
      <line x1="20" y1="375" x2="480" y2="375"/>
      <line x1="20" y1="529" x2="480" y2="529"/>
      <line x1="20" y1="683" x2="480" y2="683"/>
      <line x1="20" y1="221" x2="480" y2="221"/>
      <line x1="20" y1="67" x2="480" y2="67"/>
      </>
    )}
  </g>
)