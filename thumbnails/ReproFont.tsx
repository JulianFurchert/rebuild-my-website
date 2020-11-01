import React, { useEffect, useState } from 'react';
import { lightThemeColors } from '../stitches.config'
import { useAnimation, AnimatePresence } from "framer-motion"
import { Thumbnail, ThumbnailProps, Svg, Path, Rect, Mouse, outsidePosition, G, CursorVariants } from "../components"

const transition = {
  x: { 
    type: "spring", 
    stiffness: 300, 
    damping: 30,
    mass: 1 
  },
  opacity: { 
    duration: 0.2 
  }
}

const variants = {
  enter: {
    zIndex: 0,
    x: '20%',
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: {
    zIndex: 0,
    x: '-20%',
    opacity: 0
  }
};

export const ReproFont: React.FC<Partial<ThumbnailProps>> = props => {
  const mouse = useAnimation();
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [cursor, setCursor] = useState<CursorVariants>('grab');
  const circleIndex = () => setIndex((index + 1) % 3);
  const circleImage= () => setImageIndex((imageIndex + 1) % 3);

  useEffect(() => {
    const sequence = async () => {
      mouse.set(outsidePosition())
      await mouse.start({
        top: '50%',
        left: '55%',
        transition: {
          delay: 2,
          duration: 1,
        }
      })
      setCursor('grabbing')
      await mouse.start({
        top: '50%',
        left: '45%',
        transition: {
          duration: 0.4,
        }
      })
      setCursor('grab')
      circleImage();
      await mouse.start({
        top: '70%',
        left: '-50%',
        transition: {
          duration: 1,
        }
      })
      circleIndex();
    }
    sequence()
  }, [index])

  return(
    <Thumbnail 
      {...props} 
      name="Repro Font - Typeface"
      href='/projects/reprofont'
    >
      <Mouse 
        animate={mouse} 
        variant={cursor}
      />
      <Svg viewBox="0 0 800 600" width="100%" css={{ backgroundColor: '$gray1' }}>
        <clipPath id="clip-path">
          <rect x="284" y="47" width="232" height="506" />
        </clipPath>
        <Rect css={{ fill: '$hiContrast' }} width="800" height="600" />
        <Rect css={{ stroke: '$loContrast' }} x="266.5" y="30.5" width="267" height="539" rx="30" />
        <Path css={{ fill: '$loContrast' }} d="M303.35,47.49Q324.82,47,332,47c10,0-2,17.79,19.29,17.74s88.55,0,98.6,0C469.4,64.74,458,47,467.77,47q7,0,28.88.49A19.85,19.85,0,0,1,516,67.39V533.1A19.85,19.85,0,0,1,496.2,553H303.8A19.85,19.85,0,0,1,284,533.1V67.38A19.84,19.84,0,0,1,303.35,47.49Z"/>
        <g clipPath="url(#clip-path)">
          <AnimatePresence>
            <G
              key={imageIndex}
              variants={variants}
              transition={transition}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {imageIndex === 0 && (
                <React.Fragment>
                  <Path 
                    css={{ fill: '$gray1', zIndex: 0 }} 
                    d="M308,75H492a8,8,0,0,1,8,8V517a8,8,0,0,1-8,8H308a8,8,0,0,1-8-8V83A8,8,0,0,1,308,75Z"
                  />
                  <Path 
                    css={{ fill: '$hiContrast'}}    
                    d="M417,328.08h23.32V240.73H417Zm-5.57,0V271.92H388.34v56.16Zm0-62.4V209.53H388.34v56.15Zm-28.89,68.41V271.92h-23.1v87.35h86.45v31.2h23.31V334.09Zm-52,31.2v25.18h23.32V365.29Zm144.22,31.2H440.34v-31.2H359.46v31.2H325V359.27h28.89V265.68h28.88V203.51h34.46v31.2h28.88v93.37H475v68.41Z"
                  />
                </React.Fragment>
              )}
              {imageIndex === 1 && (
                <React.Fragment>
                  <Path 
                    css={{ fill: '$gray1', zIndex: 0 }} 
                    d="M308,75H492a8,8,0,0,1,8,8V517a8,8,0,0,1-8,8H308a8,8,0,0,1-8-8V83A8,8,0,0,1,308,75Z"
                  />
                  <Path 
                    css={{ fill: '$hiContrast'}}   
                    d="M411.66,328.08V240.73H388.34v87.35Zm0-93.37V209.53H388.34v25.18Zm28.68,99.38V240.73H417v93.36H382.56V240.73h-23.1v93.36H330.78v56.16h23.31v-31.2h92v31.2h23.32V334.09Zm34.45,62.4H440.34v-31.2H359.46v31.2H325V328.08h28.89V234.71h28.88v-31.2h34.46v31.2h28.88v93.37H475v68.41Z"
                  />
                </React.Fragment>
              )}
              {imageIndex === 2 && (
                <React.Fragment>
                  <Path 
                    css={{ fill: '$gray1'}} 
                    d="M308,75H492a8,8,0,0,1,8,8V517a8,8,0,0,1-8,8H308a8,8,0,0,1-8-8V83A8,8,0,0,1,308,75Z"
                  />
                  <Path 
                    css={{ fill: '$hiContrast'}}  
                    d="M440.34,328.08V302.9H411.45V271.7H388.14v56.15h52.2Zm-28.68-62.4V237.6h5.57v59.28h23.31V209.53h-52v56.15Zm34.45,37.22v31.19H382.77V271.92H359.46v87.35h86.45v31.2h23.31V302.9ZM330.78,365.29v25.18h23.31V365.29Zm144,31.2H440.34v-31.2H359.46v31.2H325V359.27h28.89V265.68h28.88V203.51h63.34v93.37H475v99.61Z"
                  />
                </React.Fragment>
              )}
            </G>
          </AnimatePresence>
        </g>
      </Svg>
    </Thumbnail>
  )
}