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
  windowTitle,
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
          windowTitle={windowTitle} 
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
