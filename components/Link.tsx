import { default as NextLink, LinkProps as NextLinkProps } from 'next/link'
import { styled } from '../stitches.config'

type LinkProps = NextLinkProps & {
  css?: StyledLinkProps['css'],
  external?: boolean
}

export const Link: React.FC<LinkProps> = ({ children, css, external, ...props }) => {
  return(
    <NextLink {...props} passHref>
      <StyledLink css={css} target={external ? '_blank'  : '_self'}>
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
  fontSize: '$3',
  fontWeight: '$body',
  textDecoration: 'none',
  '&:hover':{
    color: '$primary',
  }
})