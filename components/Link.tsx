import { default as NextLink, LinkProps as NextLinkProps } from 'next/link'
import { styled } from '../stitches.config'

type LinkProps = NextLinkProps & {
  css?: StyledLinkProps['css'],
  external?: boolean,
  variant?: 'menu' | 'subtle' | 'primary',
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ children, css, external, variant, onClick, ...props }) => {
  return(
    <NextLink {...props} passHref>
      <StyledLink 
        onClick={onClick} 
        variant={variant} 
        css={css} 
        target={external ? '_blank'  : '_self'}
      >
        {children}
      </StyledLink>
    </NextLink>
  )
}

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
  variants: {
    variant: {
      primary: {
        color: '$primary',
        '&:hover':{
          textDecoration: 'underline',
        },
      },
      subtle: {
        color: '$gray6',
        '&:hover':{
          color: '$hiContrast',
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
    }
  }
})