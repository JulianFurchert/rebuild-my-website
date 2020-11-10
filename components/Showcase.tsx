import { styled } from '../stitches.config'

export type ShowcaseProps = React.ComponentProps<typeof Showcase>

export type ShowcaseVariants = {
  scheme?: ShowcaseProps['scheme']
  size?: ShowcaseProps['size']
} 

export const Showcase = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$6',
  margin: '$2',
  height: '100%',
  width: '100%',
  backgroundColor: '$gray1',
  overflow: 'hidden',
  variants: {
    scheme: {
      light: {
        backgroundColor: '$gray1'
      },
      dark: {
        backgroundColor: '$gray8'
      }
    },
    size: {
      full: {
        padding: 0,
      },
    }
  }
})

export default Showcase