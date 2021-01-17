import React, { useState } from 'react';
import { Showcase, ShowcaseVariants } from '../Showcase';
import { Timeline } from '../ProcessBars';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';
import { Box } from '../Box';
import Image from 'next/image' 
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: {
    x: 500,
    opacity: 0
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: {
    zIndex: 0,
    x: -500,
    opacity: 0
  }
};

const transition = {
  x: { type: "spring", stiffness: 250, damping: 30 },
  opacity: { duration: 0.2 }
};

type GalleryCaseProps = ShowcaseVariants & {
  src: string[],
  height: number
  width: number,
  mockup?: MockupProps
}

export const GalleryCase: React.FC<GalleryCaseProps> = ({ 
  src, 
  height, 
  width, 
  mockup,
  ...viewcase 
}) =>  {
  const [index, setIndex] = useState(0);

  const handleOnChange = ( index: number ) => {
    setIndex(index)
  }

  return (
    <Showcase size="gallery" {...viewcase}>
      <InView>
        <div style={{width: '100%', opacity: 0.0}}>
          <Mockup {...mockup}> 
            <Image
              src={src[0]} 
              height={height} 
              width={width}
              layout="responsive"
            />
          </Mockup>
        </div>
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <Mockup {...mockup}> 
              <Image
                src={src[index]} 
                height={height} 
                width={width}
                layout="responsive"
              />
            </Mockup>
          </motion.div>
        </AnimatePresence>
      </InView>
      <Box
        css={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        <Timeline 
          number={src.length} 
          duration={4} 
          onChange={handleOnChange}
        />
      </Box>
    </Showcase>
  )
}
