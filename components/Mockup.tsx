import React from 'react';
import { Text } from './Text';
import { styled } from '../stitches.config'

export type MockupProps = {
  mockupTitle?: string,
  mockup?: ContainerProps['variant'],
  maxWidth?: ContainerProps['maxWidth'],
}

export const Mockup: React.FC<MockupProps> = ({
  mockupTitle, 
  mockup = 'default',
  maxWidth,
  children,
}) => {
  if(mockup === "window"){
    return (
      <Container variant="window" maxWidth={maxWidth}>
        <Header>
          <Controls/>
          {mockupTitle && (
            <Text variant="caption">
              {mockupTitle}
            </Text>
          )}
        </Header>
        {children}
      </Container>
    )
  }
  return (
    <Container variant={mockup} maxWidth={maxWidth}>
      {children}
    </Container>
  )
}

export default Mockup;

type ContainerProps = React.ComponentProps<typeof Container>

const Container = styled('div', {
  position:'relative',
  maxWidth: "100%", 
  overflow: "hidden",
  variants: {
    variant: {
      none: {},
      simple: {
        borderRadius: "8px", 
      },
      default: {
        borderRadius: "8px",
        boxShadow: "4px 4px 6px 0px rgba(0,0,0,0.16)",
      },
      window: {
        borderRadius: "8px",
        boxShadow: "4px 4px 6px 0px rgba(0,0,0,0.16)",
        padding: "0"
      }
    },
    maxWidth: {
      20: {
        maxWidth: "20%", 
      },
      30: {
        maxWidth: "30%", 
      },
      40: {
        maxWidth: "40%", 
      },
      50: {
        maxWidth: "50%", 
      },
      60: {
        maxWidth: "60%", 
      },
      70: {
        maxWidth: "70%", 
      },
      80: {
        maxWidth: "80%", 
      },
      90: {
        maxWidth: "90%", 
      },
    }
  },
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