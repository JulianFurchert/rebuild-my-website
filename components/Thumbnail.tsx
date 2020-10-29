import { default as NextLink, LinkProps as NextLinkProps } from 'next/link'
import { styled } from '../stitches.config'
import { Text } from "./Text"
import { Box } from "./Box"

export type ThumbnailProps = NextLinkProps & {
  css?: ContainerProps['css'],
  name: string
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ children, css, name, ...props }) => {
  return(
    <NextLink {...props} passHref>
      <Container css={css}>
        <Box>
          {children}
        </Box>
        <Text css={{ marginTop: '$2' }}>
          {name}
        </Text>
      </Container>
    </NextLink>
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