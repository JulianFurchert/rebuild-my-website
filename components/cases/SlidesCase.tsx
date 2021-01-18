import React, { useState } from 'react';
import { Showcase, ShowcaseVariants } from '../Showcase';
import { Timeline } from '../ProcessBars';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';
import { Box } from '../Box';
import Image from 'next/image' 

type SlidesCaseProps = ShowcaseVariants & {
  src: string[],
  height: number
  width: number,
  mockup?: MockupProps
}

export const SlidesCase: React.FC<SlidesCaseProps> = ({ 
  src, 
  height, 
  width, 
  mockup,
  ...viewcase 
}) =>  {
  const [index, setIndex] = useState(0);
  const nextIndex = index + 1 < src.length ? index + 1 : 0;
  console.log({ index, nextIndex });

  const handleOnChange = ( index: number ) => {
    setIndex(index)
  }

  return (
    <Showcase size="gallery" {...viewcase}>
      <InView>
        <GalleryItem 
          mockup={mockup}
          src={src[index]} 
          height={height} 
          width={width}
        />
        <Box css={{ opacity: 0, position: 'absolute' }}>
          <GalleryItem 
            mockup={mockup}
            src={src[nextIndex]} 
            height={height} 
            width={width}
          />
        </Box>
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

type GalleryItemProps = {
  src: string,
  height: number
  width: number,
  mockup?: MockupProps
}

const GalleryItem:React.FC<GalleryItemProps> = ({
  src,
  height,
  width,
  mockup
}) => {
  return(
    <Mockup {...mockup}> 
      <Image
        src={src} 
        height={height} 
        width={width}
        layout="responsive"
      />
    </Mockup>
  )
}