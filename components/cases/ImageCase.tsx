import React from 'react';
import { Showcase, ShowcaseVariants } from '../Showcase';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';
import Image from 'next/image' 

type ImageCaseProps = ShowcaseVariants & MockupProps & {
  src: string,
  height: number
  width: number,
}

export const ImageCase: React.FC<ImageCaseProps> = ({ 
  src, 
  height, 
  width, 
  mockup,
  mockupTitle,
  maxWidth,
  ...viewcase 
}) =>  {
  const [isVisible, setIsVisible] = React.useState(false)

  const handelOnLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsVisible(true)
  }

  return (
    <Showcase {...viewcase} >
      <InView isVisible={isVisible}>
        <Mockup 
          mockup={mockup} 
          mockupTitle={mockupTitle} 
          maxWidth={maxWidth}
        >
          <Image
            onLoad={handelOnLoad} 
            src={src} 
            height={height} 
            width={width}
          />
        </Mockup>
      </InView>
    </Showcase>
  )
}
