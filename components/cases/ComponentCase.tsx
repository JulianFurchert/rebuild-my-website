import React from 'react';
import { Showcase, ShowcaseVariants } from '../Showcase';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';

type ComponentCaseProps = ShowcaseVariants & MockupProps

export const ComponentCase: React.FC<ComponentCaseProps> = ({ 
  mockup,
  mockupTitle,
  maxWidth,
  children,
  ...viewcase 
}) =>  {
  return (
    <Showcase {...viewcase}>
      <InView>
        <Mockup 
          mockup={mockup} 
          mockupTitle={mockupTitle} 
          maxWidth={maxWidth}
        >
          {children}
        </Mockup>
      </InView>
    </Showcase>
  )
}
