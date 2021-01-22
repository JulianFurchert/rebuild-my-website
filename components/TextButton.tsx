import { styled } from '../stitches.config'
import { BaseButton } from './BaseButton'

export const TextButton = styled(BaseButton, {
  fontFamily: '$body',
  color: '$hiContrast',
  lineHeight: 1.5,
  fontSize: '$3',
  fontWeight: '$body',
  '& svg': {
    display: 'block',
  }
})