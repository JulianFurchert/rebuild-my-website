import { forwardRef } from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link'
import { styled } from '../stitches.config'

type LinkProps = NextLinkProps & {
  css?: StyledLinkProps['css'],
  external?: boolean,
  variant?: 'menu' | 'subtle' | 'primary',
  disabeld?: boolean,
  onClick?: () => void;
  children: React.ReactNode
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { children, disabeld, css, external, variant, onClick, ...rest } = props;
  
  if(disabeld){
    return(
      <StyledLink 
        variant={variant} 
        css={css}
        disabeld={disabeld}
        ref={ref} 
      >
        {children}
      </StyledLink>
    )
  }

  return(
    <NextLink {...rest} passHref>
      <StyledLink 
        onClick={onClick} 
        variant={variant} 
        css={css}
        disabeld={disabeld} 
        target={external ? '_blank'  : '_self'}
        ref={ref} 
      >
        {children}
      </StyledLink>
    </NextLink>
  )

});

type StyledLinkProps = React.ComponentProps<typeof StyledLink>

const StyledLink = styled('a', {
  fontFamily: '$body',
  color: '$hiContrast',
  lineHeight: 1.5,
  fontSize: '$4',
  fontWeight: '$body',
  textDecoration: 'none',
  '&:hover':{
    color: '$primary',
  },
  bp1: {
    fontSize: '$3',
  },
  variants: {
    variant: {
      primary: {
        color: '$primary',
        '&:hover':{
          textDecoration: 'underline',
        },
      },
      subtle: {
        color: '$gray7',
        '&:hover':{
          color: '$primary',
        },
      },
      menu: {
        display: 'flex',
        alignItems: 'center',
        padding: '$3 $6',
        outline: 'none',
        color: '$hiContrast',
        '&:hover': {
          backgroundColor: '$gray1',
          color: '$hiContrast',
        },
        '&:focus': {
          color: '$hiContrast',
          backgroundColor: '$gray1',
        },
      }
    },
    disabeld: {
      true: {
        color: '$gray5',
        '&:hover':{
          color: '$gray5',
          backgroundColor: 'transparend',
        },
        '&:focus': {
          color: '$gray5',
          backgroundColor: 'transparend',
        },
      }
    },
  },
})