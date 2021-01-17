import React, { useState } from 'react'
import { styled } from '../stitches.config'
import { motion, AnimateSharedLayout } from "framer-motion";
import { Text } from './Text'
import useInterval from '../hooks/useInterval'

const Bar = styled('div', {
  position: "relative",
  zIndex: 50,
  height: "40px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
})

const Container = styled('div', {
  position: "relative",
  zIndex: 50,
  height: "40px",
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 24px"
})

const Progressbar = styled('div', {
  position: "relative",
  margin: "0 8px",
  width: "100px",
  height: "2px",
  flexGrow: 1,
  backgroundColor: '$loContrast'
})

const Filler = styled(motion.div, {
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  backgroundColor: '$hiContrast'
})

type TimelineProps = {
  duration?: number,
  number?: number,
  onChange?: (i: number) => void,
  caption?: string,
}

export const Timeline: React.FC<TimelineProps> = ({ duration = 2,  number = 10, onChange, caption,  }) => {
  const [index, setIndex ] = useState(0);
  const [variant, setVariant] = useState('end')
  
  const variants = {
    start: { 
      width: '0%',
      transition: { duration: 0, delay: 0.2 }
    },
    end: { 
      width: '100%',
      transition: { duration: duration, delay: 0.2 }
    },
  }

  const handleOnAnimationComplete = () => {
    if (variant === 'end') {
      let newIndex = (index + 1) % number;
      setVariant('start')
      setIndex(newIndex)
      onChange && onChange(newIndex);
    }
    else {
      setVariant('end');
    }
  }

  return (
    <Bar>
      <Container>
        {caption && (
          <Text css={{ marginRight: '$2' }} variant="body">
            {caption}
          </Text>
        )}
        <Progressbar>
          <Filler
            variants={variants}
            initial="start"
            animate={variant}
            onAnimationComplete={handleOnAnimationComplete}
          />
        </Progressbar>
      </Container>
    </Bar>
  )
}

type StepbarProps = {
  number?: number,
  duration?: number,
  onChange?: (i: number) => void,
  caption?: string,
}

export const Stepbar: React.FC<StepbarProps> = ({ duration = 2, number = 4, caption, onChange }) => {
  const [index, setIndex ] = useState(0);

  useInterval(() => {
    let newIndex = (index + 1) % number;
    setIndex(newIndex);
    onChange && onChange(newIndex)
  }, duration * 1000);

  var bars = [];
  for (var i = 0; i < number; i++) {
    bars.push(i);
  }

  return (
    <Bar>
      <AnimateSharedLayout>
        <Container>
          {caption && (
            <Text css={{ marginRight: '$2' }} variant="body">
              {caption}
            </Text>
          )}
          {bars.map( item => (
            <Progressbar key={item}>
              {item === index ? <Filler layoutId="filler" /> : undefined}
            </Progressbar>
          ))}
        </Container>
      </AnimateSharedLayout>
    </Bar>
  )
}