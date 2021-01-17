import React from 'react';
import { Showcase, ShowcaseVariants } from '../Showcase';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';
import { Box } from '../Box';

type ComponentCaseProps = ShowcaseVariants & {
  mockup?: MockupProps,
  footer?: any
}

export const ComponentCase: React.FC<ComponentCaseProps> = ({ 
  mockup,
  children,
  footer,
  ...viewcase 
}) =>  {
  return (
    <Showcase size={footer ? 'gallery' : undefined} {...viewcase}>
      <InView>
        <Mockup {...mockup}>
          {children}
        </Mockup>
      </InView>
      {footer && (
        <Box
          css={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          {footer}
        </Box>
      )}
    </Showcase>
  )
}
