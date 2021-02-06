import React from 'react';
import { styled } from '../stitches.config'
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const TooltipContent = styled(TooltipPrimitive.Content, {
  fontWeight: '$body',
  fontSize: '$2',
  lineHeight: 1.8,
  borderRadius: 4,
  color: '$loContrast',
  backgroundColor: '$hiContrast',
  zIndex: '700',
  paddingX: '$2'
})

const TooltipArrow = styled(TooltipPrimitive.Trigger, {
  fill: '$hiContrast',
})

const TooltipTrigger = styled(TooltipPrimitive.Trigger, {
  display: 'inline'
})

type TooltipProps = {
  content: string,
}

export const  Tooltip:React.FC<TooltipProps> = ({ children, content, ...props }) => {
  return (
    <TooltipPrimitive.Root>
      <TooltipTrigger as="div">
        {children}
      </TooltipTrigger>
      <TooltipContent align="center" {...props}>
        {content}
      </TooltipContent>
    </TooltipPrimitive.Root>
  );
}