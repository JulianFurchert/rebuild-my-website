import React,{ useState, useLayoutEffect, useRef } from 'react';
import Typed from 'typed.js';
import { styled } from '../../../stitches.config';
import { Showcase, Mockup, InView, Row } from '../../../components';

const ComponentContainer = styled('div', {
  position: 'absolute',
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

const TextArea = styled('div', {
  fontFamily: "'Space Mono', monospace",
  fontSize: "20px",
  lineHeight: 1.6,
  padding: "16px 24px"
})

const hexList = ['#454CFF', '#42D5FE', '#E84374','#fda5c5',]
const nameList = ['blueviolet', 'skyblue', 'palevioletred', 'lightpink']

const ColorRow = () => {
  const textArea = useRef();
  const [inView, setInView] = useState(false)
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false)

  useLayoutEffect(()=>{
    const options = {
      strings: hexList,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
      onStringTyped: (arrayPos) => {
        setLoaded(true);
        setIndex(arrayPos);
      }
    }
    const typed = new Typed(textArea.current, options);
    return ()=>{
      typed.destroy();
    }
  },[])

  const handleOnChange = () => {
    setInView(true)
  }

  return(
    <Row columns={2}>
      <Showcase>
        <InView onChange={handleOnChange} isVisible={inView}>
          <Mockup variant="window" title="color.md" scheme="dark">
            <TextArea>
              <div>```color </div>
              <span>hex: </span>
              <span ref={textArea}/>
              <div>```</div>
            </TextArea>
          </Mockup>
        </InView>
      </Showcase>
      <Showcase>
        <InView onChange={handleOnChange} isVisible={inView}>
          <Mockup variant="none">
            <svg width="100%" viewBox="0 0 150 100" />
            <ComponentContainer>
              <svg width="280" viewBox="0 0 225 208">
                <g id="Group_1" transform="translate(-75 -121)">
                  <rect id="bg" width="225" height="208" rx="3" transform="translate(75 121)" fill="#fefefe"/>
                  <path transform="translate(75 121)" fill={hexList[index]} id="colorfield" d="M3,0H222a3,3,0,0,1,3,3V122a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"/>
                  <path id="label_label" d="M7.635,0H6.152L2.35-6.053V0H.867V-8.531H2.35L6.164-2.455V-8.531H7.635Zm6.633-1.986h-3.3L10.271,0H8.73l3.223-8.531h1.33L16.512,0H14.965Zm-2.889-1.2h2.473L12.615-6.721ZM19.4-8.531l2.461,6.539,2.455-6.539h1.916V0H24.756V-2.812L24.9-6.574,22.383,0H21.322L18.809-6.568l.146,3.756V0H17.479V-8.531Zm13.57,4.723h-3.5v2.625h4.1V0H27.984V-8.531h5.537v1.2H29.467V-4.98h3.5Z" transform="translate(93 280)" fill="#555"/>
                  <path id="hex_label" d="M7.641,0H6.164V-3.791H2.35V0H.867V-8.531H2.35V-4.98H6.164V-8.531H7.641Zm6.738-3.809h-3.5v2.625h4.1V0H9.393V-8.531H14.93v1.2H10.875V-4.98h3.5Zm4.734-1.641,1.793-3.082h1.711L20.039-4.3,22.676,0H20.947L19.113-3.129,17.273,0H15.551l2.643-4.3-2.584-4.23H17.32Z" transform="translate(224 280)" fill="#555"/>
                  <text id="name_value" transform="translate(93 300)" fill="#121212" fontSize="14" fontFamily="Roboto-Regular, Roboto"><tspan x="0" y="0">{nameList[index]}</tspan></text>
                  <text id="hex_value" transform="translate(224 300)" fill="#121212" fontSize="14" fontFamily="Roboto-Regular, Roboto"><tspan x="0" y="0">{hexList[index]}</tspan></text>
                </g>
              </svg>
            </ComponentContainer>
          </Mockup>
        </InView>
      </Showcase>
    </Row>
  )
}

export default ColorRow;