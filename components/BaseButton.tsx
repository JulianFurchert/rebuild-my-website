import { styled } from '../stitches.config'

export const BaseButton = styled('button', {
  border: 'none',
  margin: 0,
  padding: 0,
  width: 'auto',
  overflow: 'visible',
  background: 'transparent',
  color: 'inherit',
  font: 'inherit',
  lineHeight: 'normal',
  '&:hover': {
    color: '$primary',
  }
})