import React from 'react'
import { styled } from '../../stitches.config'
import { Showcase, ShowcaseVariants } from '../Showcase';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';

type CodeCaseProps = ShowcaseVariants & {
  code: string[],
  mockup?: MockupProps
}

export const CodeCase: React.FC<CodeCaseProps> = ({
  code,
  mockup,
  ...viewcase 
}) => {
  
  return(
    <Showcase {...viewcase}>
      <InView>
        <Mockup {...mockup}>
          <Code>
            {code.map(row => <div key={row}>{row}</div>)}
          </Code>
        </Mockup>
      </InView>
    </Showcase>
  )
}

const Code = styled('div', {
  fontFamily: "'Space Mono', monospace",
  width: "100%",
  height: "100%",
  color: 'inherit',
  lineHeight: 1.6,
  fontSize: '$5',
  padding: "$6 $5",
})


export default CodeCase;