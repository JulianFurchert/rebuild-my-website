import React, { useEffect } from 'react';
import Image from 'next/image'
import { Flex } from '../Flex'
import { Box } from '../Box'
import { AspectRatio } from '../AspectRatio'
import { motion } from 'framer-motion'
import { Showcase, ShowcaseVariants } from '../Showcase';

type SlideshowProps = {
  images: {
    src: string,
    height: number,
    width: number,
  }[],
  height?: number | string
  startPosition?: 'flex-start' | 'flex-end'
}
 
export const Slideshow: React.FC<SlideshowProps> = ({ 
  images, 
  startPosition = 'flex-start',
  height = '600px'
}) =>  {
  const [state, setState] = React.useState(startPosition)
  const toggleState = () => setState(state === 'flex-start' ? 'flex-end' : 'flex-start')
  useEffect(()=> toggleState(),[])

  return (
    <Showcase>
        <Flex
          css={{
            justifyContent: state
          }}
        >
          <motion.div
            layout          
            transition={{ 
              ease: 'linear',
              repeat: 5,
              duration: 10
            }}
          >
            <Flex>
              {images.map(image => (
                <Box
                  key={image.src}
                  css={{
                    height: height,
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
                      sizes="50vw"
                    />
                  </AspectRatio>
                </Box>
              ))}
            </Flex>
          </motion.div>
        </Flex>
      </Showcase>
  )
}
