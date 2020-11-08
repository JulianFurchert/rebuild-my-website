import { styled } from '../stitches.config'
import { Tooltip as TooltipUI, styles } from '@interop-ui/react-tooltip';

export const Tooltip = styled(TooltipUI, {})

export const TooltipTrigger = styled(TooltipUI.Trigger, {
  ...styles.trigger
})

export const TooltipPosition= styled(TooltipUI.Position, {
  ...styles.position,
  position: 'relative',
  zIndex: '2000'
})

export const TooltipContent = styled(TooltipUI.Content, {
  ...styles.content,
  fontWeight: '$body',
  fontSize: '$2',
  lineHeight: 1.8,
  borderRadius: 4,
  color: '$loContrast',
  backgroundColor: '$hiContrast',
  zIndex: '700',
  paddingX: '$2'
})

export const TooltipArrow = styled(TooltipUI.Arrow, {
  ...styles.arrow,
  fill: '$hiContrast',
})