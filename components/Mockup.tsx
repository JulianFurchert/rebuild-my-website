import React from 'react';
import { Text } from './Text';
import { styled } from '../stitches.config'

const None = styled('div', {
  maxWidth: "100%", 
  overflow: "hidden"
})

const Simple = styled('div', {
  maxWidth: "100%", 
  borderRadius: "8px", 
  overflow: "hidden"
})

const Default = styled('div', {
  maxWidth: "100%",
  borderRadius: "8px",
  boxShadow: "4px 4px 6px 0px rgba(0,0,0,0.16)",
  overflow: "hidden"
})

const WindowContainer = styled('div', {
  maxWidth: "100%",
  margin: "0 auto",
  borderRadius: "8px",
  boxShadow: "4px 4px 6px 0px rgba(0,0,0,0.16)",
  overflow: "hidden",
  padding: "0"
})

const Header = styled('div', {
  position: "relative",
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

const Controls = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{position:'absolute', left: '12px'}} width="54" height="14" viewBox="0 0 54 14">
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle>
      <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle>
      <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle>
    </g>
  </svg>
)

type WindowProps = {
  title?: string,
  bg?: string,
  color?: string,
}

const Window: React.FC<WindowProps> = ({title, bg, color, children}) => {
  return (
    <WindowContainer css={{backgroundColor: bg}}>
      <Header>
        <Controls/>
        {title && <Text variant="caption" css={{color: color}}>{title}</Text>}
      </Header>
      {children}
    </WindowContainer>
  )
}

export type MockupProps = {
  template?: 'none' | 'simple' | 'window' | 'default',
  title?: string,
  scheme?: 'dark' | 'light'
  bg?: string,
  color?: string,
}

export const Mockup: React.FC<MockupProps> = ({
  template = 'default', 
  title, 
  bg, 
  color, 
  children,
}) => {
  if(template === "window"){
    return (
      <Window title={title} bg={bg} color={color}>
        {children}
      </Window>
    )
  }
  if(template === "simple"){
    return (
      <Simple css={{backgroundColor: bg}}>
        {children}
      </Simple>
    )
  }
  if(template === "default"){
    return (
      <Default css={{backgroundColor: bg}}>
        {children}
      </Default>
    )
  }
  return (
    <None css={{backgroundColor: bg}}>
      {children}
    </None>
  )
}

export default Mockup;