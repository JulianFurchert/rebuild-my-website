import React, { useState } from 'react';
import { Showcase, ShowcaseVariants } from '../Showcase';
// import { Timeline } from '../ProcessBar';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';
import { Box } from '../Box';
import Image from 'next/image' 

type GalleryCaseProps = ShowcaseVariants & MockupProps & {
  src: string[],
  height: number
  width: number,
}

export const GalleryCase: React.FC<GalleryCaseProps> = ({ 
  src, 
  height, 
  width, 
  mockup,
  mockupTitle,
  maxWidth,
  ...viewcase 
}) =>  {
  const [index, setIndex] = useState(0);

  const onRest = () => {
    setIndex(state => (state + 1) % src.length)
  }

  return (
    <Showcase size="gallery" {...viewcase}>
      <InView>
        <Mockup 
          mockup={mockup} 
          mockupTitle={mockupTitle} 
          maxWidth={maxWidth}
        > 
          <Image
            src={src[index]} 
            height={height} 
            width={width}
          />
        </Mockup>
      </InView>
      <Box
        css={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        {/* <Timeline duration={4000} onRest={onRest}/> */}
      </Box>
    </Showcase>
  )
}