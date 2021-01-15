import React, { useState, useMemo } from 'react'
import { styled } from '../stitches.config'
import { useSpring, animated } from 'react-spring'
import { Text } from './Text'

const Bar = styled('div', {
  position: "relative",
  zIndex: 50,
  height: "32px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
})

const Container = styled('div', {
  position: "relative",
  zIndex: 50,
  height: "32px",
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

const Filler = styled('div', {
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  backgroundColor: '$hiContrast'
})

const StepContainer = styled('div', {
  zIndex: 100,
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  top: "0",
  left: "0"
})

// const StepContainer = styled.div`
//   z-index: 100;
//   height: 32px;
//   display: flex;
//   align-items: center;
//   justify-content:space-between;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: ${props => `${props.width}%`};
// `

const AnimatedFiller = animated(Filler);
const AnimatedStepContainer = animated(StepContainer);

type TimelineProps = {
  duration: number,
  onRest: () => void,
  caption?: string,
}

export const Timeline: React.FC<TimelineProps> = ({ duration, onRest, caption, bg }) => {
  const [reset, setReset] = useState(false)
  
  const props = useSpring({
    from: { width: '0%'},
    width: '100%',
    config: { duration },
    reset: reset,
    onRest: ()=>{
      onRest()
      setReset(true)
    },
    onStart: ()=> setReset(false)
  })

  return (
    <Bar>
      {caption && <Text variant="caption">{caption}</Text>}
      <Container>
        <Progressbar>
          <AnimatedFiller style={props}/>
        </Progressbar>
      </Container>
    </Bar>
  )
}

type StepbarProps = {
  index: number,
  steps: number,
  caption?: string,
}

export const Stepbar: React.FC<StepbarProps> = ({ index, steps, caption }) => {

  const props = useSpring({
    left: `${index/steps*100}%`
  })

  const stepBars = useMemo(()=>{
    let bars = [];
    for(var i = 0; i < steps; i++){ bars.push(i) }
    return bars
  },[steps])

  return (
    <Bar>
      {caption && <Text variant="caption">{caption}</Text>}
      <Container>
        {stepBars.map( item => (
          <Progressbar key={item} />
        ))}
        <AnimatedStepContainer width={100/steps} style={props}>
          <Progressbar>
            <AnimatedFiller />
          </Progressbar>
        </AnimatedStepContainer>
      </Container>
    </Bar>
  )
}

type SliderProps = {
  percent: number,
  width: number,
  caption?: string,
}

export const Slider: React.FC<SliderProps> = ({ percent, width, caption }) => {
  return (
    <Bar>
    {caption && <Text variant="caption">{caption}</Text>}
    <Container>
      <Progressbar>
        <AnimatedFiller
          style={{
            width: `${width}%`,
            left: percent.interpolate({
              range: [0,100],
              output: [0,100-width]
            }).interpolate( p => `${p}%`),
          }}
        />
      </Progressbar>
    </Container>
    </Bar>
  )
}
