import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Flex } from '../Flex'
import { Box } from '../Box'
import { motion, AnimatePresence } from 'framer-motion'
import { Showcase } from '../Showcase';
import { useBreakpointIndex } from '../../hooks/useMatchMedia';
import { useInView } from 'react-intersection-observer';

type Image = {
  src: string,
  height: number,
  width: number,
}

type SlideshowProps = {
  images: Image[],
  height?: number | string
  startPosition?: 'flex-start' | 'flex-end'
}

const calcWidth = (images: Image[], height: number, margin: number) => {
  let totalWidth = 0;
  images.forEach(img => {
    const ratio = img.width / img.height;
    const width = ratio * height;
    return totalWidth = totalWidth + width + margin
  })
  return totalWidth
}
 
export const Slideshow: React.FC<SlideshowProps> = ({ 
  images, 
}) =>  {
  const index = useBreakpointIndex();
  const [page, setPage] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(()=>{
    inView && setPage(page + 1);
  },[inView])

  let height = 200;
  let margin = 40;
  
  if(index === 1){
    height = 400;
    margin = 60;
  } 
  if(index === 2){
    height = 600;
    margin = 80;
  } 

  const width = calcWidth(images, height, margin) 
  const duration = width / 120;

  const handleComplete = () =>{
    setPage(page + 1);
  }

  return (
    <Showcase>
      <Box ref={ref} css={{ height }}>
        <AnimatePresence onExitComplete={handleComplete} initial={false}>
          <motion.div
            key={page}
            style={{
              position: 'absolute',
              left: 0,
            }}
            initial={{
              x: width
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: -width,
            }}
            transition={{
              ease: 'linear',
              duration,
            }}
          >
            <Flex css={{ width }}>
              {images.map(img => (
                <Box
                  style={{ 
                    marginRight: margin,
                    height: '100%',
                    flex: `calc(${img.width}/${img.height})`,
                  }}
                >
                  <Image  
                    key={img.src}
                    src={img.src}
                    sizes="50vw"
                    height={img.height}
                    width={img.width}
                    layout="responsive"
                  />
                </Box>
              ))}
            </Flex>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Showcase>
  )
}
