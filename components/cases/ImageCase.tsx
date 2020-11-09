import React from 'react';
import { Showcase, ShowcaseProps } from '../Showcase';
import Image from 'next/image'

type ImageCaseProps = ShowcaseProps & {
  src: string,
  height: number
  width: number,
}

export const ImageCase: React.FC<ImageCaseProps> = ({ src, height, width, ...viewcase }) =>  {
  return (
    <Showcase {...viewcase} >
      <Image 
         src={src} 
         height={height} 
         width={width}  
      />
    </Showcase>
  )
}
