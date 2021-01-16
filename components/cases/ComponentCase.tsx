import React from 'react';
import { Showcase, ShowcaseVariants } from '../Showcase';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';

type ComponentCaseProps = ShowcaseVariants & {
  mockup?: MockupProps
}

export const ComponentCase: React.FC<ComponentCaseProps> = ({ 
  mockup,
  children,
  ...viewcase 
}) =>  {
  return (
    <Showcase {...viewcase}>
      <InView>
        <Mockup {...mockup}>
          {children}
        </Mockup>
      </InView>
    </Showcase>
  )
}
