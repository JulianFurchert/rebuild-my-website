import { default as NextLink, LinkProps as NextLinkProps } from 'next/link'
import { styled } from '../stitches.config'
import { Link } from "./Link"
import { Box } from "./Box"

export type ThumbnailProps = NextLinkProps & {
  css?: ContainerProps['css'],
  name: string
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ children, css, name, ...props }) => {
  return(
      <Box css={css}>
        <NextLink {...props} passHref>
          <Container >
              {children}
          </Container>
        </NextLink>
        <Link css={{ marginTop: '$2', display: 'block' }} href={props.href}>
          {name}
        </Link>
      </Box>
  )
}

type ContainerProps = React.ComponentProps<typeof Container>

const Container = styled('a', {
  position: 'relative',
  display: 'block',
  color: '$hiContrast',
  backgroundColor: '$lowContrast',
  textDecoration: 'none',
  cursor: 'pointer',
  overflow: 'hidden',
})