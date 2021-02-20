import { default as NextLink, LinkProps as NextLinkProps } from 'next/link'
import { styled } from '../stitches.config'
import { Link } from "./Link"
import { Box } from "./Box"

export type ThumbnailProps = NextLinkProps & {
  css?: ImageContainerProps['css'],
  name: string,
  width?: ContainerProps['width'],
  translateY?: ContainerProps['translateY'],
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ children, css, name, width, translateY, ...props }) => {
  return(
      <Container width={width} translateY={translateY}>
        <NextLink {...props} passHref>
          <ImageContainer >
              {children}
          </ImageContainer>
        </NextLink>
        <Link css={{ marginTop: '$2', display: 'block' }} href={props.href}>
          {name}
        </Link>
      </Container>
  )
}

type ImageContainerProps = React.ComponentProps<typeof Container>

const ImageContainer = styled('a', {
  position: 'relative',
  display: 'block',
  color: '$hiContrast',
  backgroundColor: '$lowContrast',
  textDecoration: 'none',
  cursor: 'pointer',
  overflow: 'hidden',
})

type ContainerProps = React.ComponentProps<typeof Container>

const Container = styled('div', {
  width: '50%',
  bp1: {
    width: '100%',
    marginTop: '$6',
  },
  variants: {
    width: {
      100: { width: '100%' },
      90: { width: '90%' },
      80: { width: '80%' },
      70: { width: '70%' },
      60: { width: '60%' },
      55: { width: '55%' },
      50: { width: '50%' },
      45: { width: '45%' },
      40: { width: '40%' },
      35: { width: '35%' },
      30: { width: '30%' },
      25: { width: '25%' },
      20: { width: '20%' },
    },
    translateY: {
      5: { marginTop: '5vw' },
      10: { marginTop: '10vw' },
      15: { marginTop: '15vw' },
      20: { marginTop: '20vw' },
    }
  }
})