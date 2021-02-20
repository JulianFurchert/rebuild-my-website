import { styled } from '../stitches.config'

export type ShowcaseProps = React.ComponentProps<typeof Showcase>

export type ShowcaseVariants = {
  scheme?: ShowcaseProps['scheme']
  size?: ShowcaseProps['size']
} 

export const Showcase = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$7',
  height: '100%',
  width: '100%',
  backgroundColor: '$gray1',
  overflow: 'hidden',
  bp1: {
    padding: '$4',
  },
  variants: {
    scheme: {
      auto: {
        backgroundColor: '$gray1',
        color: '$hiContrast',
      },
      light: {
        backgroundColor: '$light_gray1',
        color: '$light_hiContrast',
      },
      dark: {
        backgroundColor: '$dark_gray1',
        color: '$dark_hiContrast',
      }
    },
    size: {
      full: {
        padding: 0,
        bp1: {
          padding: 0,
        },
      },
      gallery: {
        paddingBottom: '56px',
        bp1: {
          paddingBottom: '56px',
        },
      }
    }
  }
})

export default Showcase