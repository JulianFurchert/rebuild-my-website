import React from 'react';
import { styled } from '../stitches.config'
import * as PopoverPrimitive from '@radix-ui/react-popover';

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = PopoverPrimitive.Trigger;

const Content = styled(PopoverPrimitive.Content, {
  fontWeight: '$body',
  fontSize: '$2',
  lineHeight: 1.8,
  borderRadius: 4,
  color: '$loContrast',
  backgroundColor: '$hiContrast',
  zIndex: '700',
  paddingX: '$2'
})

export const PopoverContent = React.forwardRef<React.Ref<HTMLDivElement>, PopoverPrimitive.PopoverContentOwnProps & { children: any }>(
  ({ children, ...props }, forwardedRef) => (
    <Content sideOffset={5} {...props}>
      {children}
      <PopoverPrimitive.Arrow />
    </Content>
  )
);