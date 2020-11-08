import React from 'react'
import { styled } from '../stitches.config'

type AspectRatioProps =  {
  ratio?: [number, number],
  css?: CssProps,
  stretch?: 'width' | 'height'
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ratio, stretch = 'width', ...props}) => {
  const svgStyle = stretch === 'height' ? {height: '100%'} : undefined
  return (
    <Container stretch={stretch}>
      <svg style={svgStyle} viewBox={`0 0 ${ratio[0]} ${ratio[1]}`}></svg>
      <Content {...props}/>
    </Container>
  );
}

const Container = styled('div', {
  position: 'relative',
  variants:{
    stretch: {
      width: {
        width: '100%',
      },
      height: {
        height: '100%',
      }
    }
  }
})

type CssProps = React.ComponentProps<typeof Content>['css']

const Content = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
})

export default AspectRatio