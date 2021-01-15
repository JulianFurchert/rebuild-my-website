import React from 'react'
import { styled } from '../../stitches.config'
import { Showcase, ShowcaseVariants } from '../Showcase';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';

type CodeCaseProps = ShowcaseVariants & MockupProps & {
  code: string[],
}

export const CodeCase: React.FC<CodeCaseProps> = ({
  code,
  mockup,
  mockupTitle,
  maxWidth,
  ...viewcase 
}) => {
  
  return(
    <Showcase {...viewcase} >
      <InView>
        <Mockup 
          mockup={mockup} 
          mockupTitle={mockupTitle} 
          maxWidth={maxWidth}
        >
          <Code>
            { code.map(row => <div>{row}</div>) }
          </Code>
        </Mockup>
      </InView>
    </Showcase>
  )
}

const Code = styled('div', {
  fontFamily: "'Space Mono', monospace",
  position: "absolute",
  left: "0",
  width: "100%",
  height: "100%",
  color: '$hiContrast',
  lineHeight: 1.6,
  padding: "16px 24px",
  fontsize: "20px"
})


export default CodeCase;