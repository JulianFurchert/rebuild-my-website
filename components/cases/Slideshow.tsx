import React from 'react';
import Image from 'next/image'
import { Flex } from '../Flex'
import { Box } from '../Box'
import { AspectRatio } from '../AspectRatio'
import { motion } from 'framer-motion'

type SlideshowProps = {
  images: {
    src: string,
    height: number,
    width: number,
  }[],
}

export const Slideshow: React.FC<SlideshowProps> = ({ images }) =>  {
  return (
    <Box
      css={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        marginY: '120px',
      }}
    >
      <motion.div
        style={{
          display: 'flex'
        }}
        animate={{
          x: '-200%'
        }}
        transition={{ 
          duration: 10 
        }}
      >
        {images.map(image => (
          <Box
            key={image.src}
            css={{
              height: '600px',
              marginX: '64px'
            }}
          >
            <AspectRatio
              ratio={[image.width, image.height]}
              stretch="height"
            >
              <Image  
                src={image.src}
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
          </Box>
        ))}
      </motion.div>
    </Box>
  )
}
