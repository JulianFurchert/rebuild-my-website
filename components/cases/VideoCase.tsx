import React from 'react';
import { styled } from '../../stitches.config'
import { Showcase, ShowcaseVariants } from '../Showcase';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';
import Image from 'next/image' 

type VideoCaseProps = ShowcaseVariants & {
  video: string,
  height: number
  width: number,
  mockup?: MockupProps
}

export const VideoCase: React.FC<VideoCaseProps> = ({ 
  video,
  height, 
  width, 
  mockup,
  ...viewcase 
}) =>  {
  const [isVisible, setIsVisible] = React.useState(false)
  const poster = video.replace('.mp4', '-poster.jpg')

  const handelOnLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsVisible(true)
  }

  return (
    <Showcase {...viewcase} >
      <InView isVisible={isVisible}>
        <Mockup {...mockup}>
          <Image
            onLoad={handelOnLoad} 
            src={poster} 
            height={height} 
            width={width}
            layout="responsive"
          />
          <Video
            playsInline
            preload="auto"
            loop
            muted={true}
            autoPlay
          >
            <source src={video} type="video/mp4" />
          </Video>
        </Mockup>
      </InView>
    </Showcase>
  )
}

const Video = styled('video', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 'auto',
  fontSize: '24px',
  textAlign: 'center'
})