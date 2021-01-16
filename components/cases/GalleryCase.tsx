import React, { useState } from 'react';
import { Showcase, ShowcaseVariants } from '../Showcase';
import { Timeline } from '../ProcessBars';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';
import { Box } from '../Box';
import Image from 'next/image' 

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
        <Mockup {...mockup}> 
          <Image
            src={src[index]} 
            height={height} 
            width={width}
            layout="responsive"
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
        <Timeline 
          number={src.length} 
          duration={4} 
          onChange={handleOnChange}
        />
      </Box>
    </Showcase>
  )
}