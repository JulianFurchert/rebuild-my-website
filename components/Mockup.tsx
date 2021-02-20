import React from 'react';
import { Text } from './Text';
import { styled } from '../stitches.config'

export type MockupProps = {
  title?: string,
  variant?: ContainerProps['variant'],
  maxWidth?: ContainerProps['maxWidth'],
  scheme?: ContainerProps['scheme'],
  clipPath?: string
}

export const Mockup: React.FC<MockupProps> = ({
  title, 
  variant = 'default',
  maxWidth,
  scheme = 'auto',
  clipPath,
  children,
}) => {
  const memoizedCss = React.useMemo(() => clipPath ? { clipPath } : {}, [])

  if(variant === "window"){
    return (
      <Container css={memoizedCss} scheme={scheme} variant="window" maxWidth={maxWidth}>
        <Header>
          <Controls/>
          {title && (
            <Text css={{ color: 'inherit' }} variant="body">
              {title}
            </Text>
          )}
        </Header>
        {children}
      </Container>
    )
  }
  return (
    <Container css={memoizedCss} scheme={scheme} variant={variant} maxWidth={maxWidth}>
      {children}
    </Container>
  )
}

export default Mockup;

type ContainerProps = React.ComponentProps<typeof Container>

const Container = styled('div', {
  position:'relative',
  width: "100%",
  maxWidth: "100%", 
  overflow: "hidden",
  variants: {
    scheme: {
      auto: {
        backgroundColor: '$loContrast',
        color: '$hiContrast',
      },
      light: {
        backgroundColor: '$light_loContrast',
        color: '$light_hiContrast',
      },
      dark: {
        backgroundColor: '$dark_loContrast',
        color: '$dark_hiContrast',
      }
    },
    variant: {
      none: {
        backgroundColor: 'transparent',
        borderRadius: "0", 
      },
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
      '20%': {
        maxWidth: "20%", 
      },
      '30%': {
        maxWidth: "30%", 
      },
      '40%': {
        maxWidth: "40%", 
      },
      '50%': {
        maxWidth: "50%", 
      },
      '60%': {
        maxWidth: "60%", 
      },
      '70%': {
        maxWidth: "70%", 
      },
      '80%': {
        maxWidth: "80%", 
      },
      '90%': {
        maxWidth: "90%", 
      },
      '100%': {
        maxWidth: "100%", 
      },
      300: {
        maxWidth: 300, 
      },
      400: {
        maxWidth: 400, 
      },
      500: {
        maxWidth: 500, 
      },
      600: {
        maxWidth: 600, 
      },
      700: {
        maxWidth: 700, 
      },
      800: {
        maxWidth: 800, 
      },
      900: {
        maxWidth: 900, 
      },
      1000: {
        maxWidth: 1000, 
      },
      1100: {
        maxWidth: 1100, 
      },
      1200: {
        maxWidth: 1200, 
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