import React from 'react';
import { styled } from '../stitches.config'
import * as PopoverPrimitive from '@radix-ui/react-popover';

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = styled(PopoverPrimitive.Trigger, {
  border: 'none',
  margin: 0,
  padding: 0,
  width: 'auto',
  overflow: 'visible',
  background: 'transparent',
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: '$body',
  outline: 'none',
  color: '$hiContrast',
  lineHeight: 1.5,
  fontSize: '$4',
  fontWeight: '$body',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover':{
    color: '$primary',
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

const Content = styled(PopoverPrimitive.Content, {
  fontWeight: '$body',
  fontSize: '$3',
  lineHeight: 1.8,
  borderRadius: 4,
  backgroundColor: '$loContrast',
  color: '$hiContrast',
  padding: '$2 $2',
  boxShadow: '$small',
  outline: 'none',
  minWidth: 160
})

export const PopoverContent = React.forwardRef<React.Ref<HTMLDivElement>, PopoverPrimitive.PopoverContentOwnProps & { children: any }>(
  ({ children, ...props }, forwardedRef) => (
    <Content avoidCollisions={false} sideOffset={5} {...props}>
      {children}
    </Content>
  )
);