import React from 'react';
import { Showcase, ShowcaseVariants } from '../Showcase';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';
import Image from 'next/image' 

type ImageCaseProps = ShowcaseVariants & {
  src: string,
  height: number
  width: number,
  mockup?: MockupProps
}

export const ImageCase: React.FC<ImageCaseProps> = ({ 
  src, 
  height, 
  width, 
  mockup, 
  ...viewcase 
}) =>  {
  return (
    <Showcase {...viewcase} >
      <InView>
        <Mockup {...mockup}>
          <Image 
            src={src} 
            height={height} 
            width={width}
          />
        </Mockup>
      </InView>
    </Showcase>
  )
}
