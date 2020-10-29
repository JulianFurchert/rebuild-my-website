import { styled } from '../stitches.config'

export const Text = styled('p', {
  fontFamily: '$body',
  color: '$hiContrast',
  lineHeight: 1.5,
  variants: {
    variant: {
      headline: {
        fontWeight: '$heading',
        fontSize: '$7',
      },
      headline2: {
        fontWeight: '$heading',
        fontSize: '$6',
      },
      body: {
        fontSize: '$3',
        fontWeight: '$body'
      },
      body2: {
        fontSize: '$2',
        fontWeight: '$body'
      },
      caption: {
        fontSize: '$1',
        fontWeight: '$body'
      },
    },
  },
})