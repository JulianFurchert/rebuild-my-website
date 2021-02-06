import { styled } from '../stitches.config'
import { BaseButton } from './BaseButton'

export const TextButton = styled(BaseButton, {
  fontFamily: '$body',
  color: '$hiContrast',
  lineHeight: 1.5,
  fontSize: '$3',
  fontWeight: '$body',
  cursor: 'pointer',
  '& svg': {
    display: 'block',
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
    }
  }
})