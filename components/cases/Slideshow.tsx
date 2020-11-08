import React from 'react';
import Image from 'next/image'
import { Flex } from '../Flex'

type SlideshowProps = {
  images: {
    src: string,
    height: number,
    width: number,
  }[],
}

export const Slideshow: React.FC<SlideshowProps> = ({ images }) =>  {
  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <Flex>
        {images.map(image => (
          <Image {...image}/>
        ))}
      </Flex>
    </div>
  )
}
