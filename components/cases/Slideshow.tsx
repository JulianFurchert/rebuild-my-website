import React from 'react';
import Image from 'next/image'
import { Flex } from '../Flex'
import { Box } from '../Box'
import { AspectRatio } from '../AspectRatio'

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
      <Flex>
        {images.map(image => (
          <Box
            css={{
              height: '600px',
              marginX: '64px'
            }}
          >
            <AspectRatio
              key={image.src}
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
      </Flex>
    </Box>
  )
}
