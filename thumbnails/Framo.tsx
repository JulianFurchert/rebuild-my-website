import React, { useEffect, useState } from 'react';
import { useAnimation, motion } from "framer-motion"
import { Thumbnail, ThumbnailProps, Svg, Mouse, outsidePosition, Path } from '../components'
import { CursorVariants } from "../components/Cursor"
import { Box } from "../components"

const mousePosition = [
  {
    start: { top: '50%', left: '30%'},
    end: { top: '50%', left: '95%'}
  },
  {
    start: { top: '8%', left: '50%'},
    end: { top: '65%', left: '50%'}
  },
  {
    start: { top: '65%', left: '95%'},
    end: { top: '8%', left: '30%'}
  }
]

const data = [
  {
    background: 'M30 30 L610 30 L610 390 L30 390 Z',
    path1: 'M50 370 L270 50 L370 50 L590 370',
    path2: 'M140 240 L500 240',
  },
  {
    background: 'M30 260 L610 260 L610 390 L30 390 Z',
    path1: 'M50 370 L50 280 L590 280 L590 370',
    path2: 'M50 330 L590 330',
  },
  {
    background: 'M30 30 L190 30 L190 390 L30 390 Z',
    path1: 'M50 370 L100 50 L120 50 L170 370',
    path2: 'M70 240 L150 240',
  },
]

const areaPosition = [
  {
    width: 580,
    height: 360, 
  },
  {
    width: 580,
    height: 120, 
  },
  {
    width: 160,
    height: 360, 
  },
]

export const Framo: React.FC<Partial<ThumbnailProps>> = props => {
  const [index, setIndex] = useState(0);
  const mouse = useAnimation();
  const area = useAnimation();
  const path1 = useAnimation();
  const path2 = useAnimation();
  const [cursor, setCursor] = useState<CursorVariants>('default');

  const getResizeCursor = (): CursorVariants => {
    if(index === 0){
      return'ew-resize'
    }
    if(index === 1){
      return'ns-resize'
    }
    if(index === 2){
      return 'nwse-resize'
    }
  }

  useEffect(() => {
    const sequence = async () => {
      mouse.set(outsidePosition())
      await mouse.start({
        ...mousePosition[index].start,
        transition: {
          delay: 2,
          duration: 1,
        }
      })
      setCursor(getResizeCursor())
      area.start({
        d: data[index].background,
        transition: {
          delay: 2,
          duration: 1,
        }
      })
      path1.start({
        d: data[index].path1,
        transition: {
          delay: 2,
          duration: 1,
        }
      })
      path2.start({
        d: data[index].path2,
        transition: {
          delay: 2,
          duration: 1,
        }
      })
      await mouse.start({
        ...mousePosition[index].end,
        transition: {
          delay: 2,
          duration: 1,
        }
      })
      setCursor('default')
      await mouse.start({
        ...outsidePosition(),
        transition: {
          duration: 1,
        }
      })
      setIndex(i => (i + 1) % 3)
    }
    sequence()
  }, [index])
  return(
    <Thumbnail
      name="Framo - Logo Tool"
      href='/projects/framo'
      {...props}
    >
      <Mouse 
        animate={mouse} 
        variant={cursor} 
      />
      <Box
        css={{
          border: '2px solid',
          borderColor: '$text'
        }}
      >
        <Svg viewBox="0 0 640 420" width="100%">
          <Path
            d={data[2].background}
            animate={area}
            css={{
              fill: '$gray1',
              stroke: 'none'
            }} 
          />
          <Path
            d={data[2].path1}
            animate={path1}
            css={{
              stroke: '$hiContrast', 
              fill: 'none', 
              strokeWidth: 8
            }}
          />
          <Path
            d={data[2].path2}
            animate={path2}
            strokeWidth={8} 
            css={{
              stroke: '$hiContrast', 
              fill: 'none', 
              strokeWidth: 8
            }}
          />
        </Svg>
      </Box>
    </Thumbnail>
  )
}