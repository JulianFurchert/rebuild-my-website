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

const weightList = ['Light', 'Black', 'Regular', 'Bold', 'Medium']


const FontRow = () => {
  const textArea = useRef();
  const [inView, setInView] = useState(false)
  const [index, setIndex] = useState(0);
  const [loaded, setloaded] = useState(false)

  useLayoutEffect(()=>{
    const options = {
      strings: weightList,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
      onStringTyped: (arrayPos) => {
        setloaded(true);
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
        <Mockup variant="none">
          <svg width="100%" viewBox="0 0 150 100" />
          <ComponentContainer>
            <svg width="280" viewBox="0 0 225 208">
              <g id="Font_1" data-name="Font – 1" clipPath="url(#clip-Font_1)">
                <g id="Group_1" data-name="Group 1" transform="translate(-75 -121)">
                  <rect id="bg" width="225" height="208" rx="3" transform="translate(75 121)" fill="#fefefe"/>
                  <path id="font_label" d="M5.783-3.615H2.35V0H.867V-8.531h5.42v1.2H2.35V-4.8H5.783Zm8.484-.428a5.234,5.234,0,0,1-.434,2.2A3.278,3.278,0,0,1,12.595-.39,3.409,3.409,0,0,1,10.74.117,3.417,3.417,0,0,1,8.892-.39,3.329,3.329,0,0,1,7.638-1.834,5.07,5.07,0,0,1,7.189-4v-.48a5.189,5.189,0,0,1,.442-2.2A3.325,3.325,0,0,1,8.88-8.142a3.4,3.4,0,0,1,1.849-.507,3.428,3.428,0,0,1,1.849.5,3.283,3.283,0,0,1,1.245,1.441,5.178,5.178,0,0,1,.445,2.188Zm-1.482-.445a3.729,3.729,0,0,0-.536-2.174,1.754,1.754,0,0,0-1.521-.756,1.749,1.749,0,0,0-1.5.753,3.657,3.657,0,0,0-.554,2.13v.492A3.7,3.7,0,0,0,9.22-1.869,1.764,1.764,0,0,0,10.74-1.1a1.743,1.743,0,0,0,1.515-.75,3.781,3.781,0,0,0,.53-2.191ZM22.512,0H21.029l-3.8-6.053V0H15.744V-8.531h1.482l3.814,6.076V-8.531h1.471Zm7.746-7.336H27.6V0H26.127V-7.336H23.49v-1.2h6.768Z" transform="translate(93 280)" fill="#555"/>
                  <path id="weight_label" d="M7.559-2.109,8.871-8.531h1.471L8.373,0H6.955L5.332-6.229,3.674,0H2.25L.281-8.531H1.752l1.324,6.41,1.629-6.41H5.947Zm8.854-1.7h-3.5v2.625H17V0H11.426V-8.531h5.537v1.2H12.908V-4.98h3.5ZM19.775,0H18.3V-8.531h1.477Zm8.361-1.107a2.835,2.835,0,0,1-1.283.914A5.235,5.235,0,0,1,24.99.117a3.672,3.672,0,0,1-1.9-.486,3.239,3.239,0,0,1-1.274-1.392,4.869,4.869,0,0,1-.466-2.112v-.668a4.515,4.515,0,0,1,.926-3.021,3.211,3.211,0,0,1,2.584-1.087,3.407,3.407,0,0,1,2.262.7,3.031,3.031,0,0,1,1.008,2.027H26.678a1.635,1.635,0,0,0-1.787-1.541,1.751,1.751,0,0,0-1.515.718,3.659,3.659,0,0,0-.536,2.106v.656a3.475,3.475,0,0,0,.583,2.147,1.922,1.922,0,0,0,1.62.765,2.136,2.136,0,0,0,1.617-.516v-1.67H24.9V-4.377h3.234ZM36.539,0H35.063V-3.791H31.248V0H29.766V-8.531h1.482V-4.98h3.814V-8.531h1.477Zm7.746-7.336h-2.66V0H40.154V-7.336H37.518v-1.2h6.768Z" transform="translate(235 280)" fill="#555"/>
                  <text id="font_value" transform="translate(93 300)" fill="#121212" fontSize="14" fontFamily="Roboto-Regular, Roboto"><tspan x="0" y="0">Roboto</tspan></text>
                  <text id="weight_value" transform="translate(235 300)" fill="#121212" fontSize="14" fontFamily="Roboto-Regular, Roboto"><tspan x="0" y="0">{weightList[index]}</tspan></text>
                  <path opacity={index === 0 ? 1 : 0} id="Light" d="M-8.472-19.922H-40.747L-48.071,0h-6.3l26.9-71.094h5.713L5.151,0H-1.1Zm-30.42-5.127h28.516L-24.634-63.77ZM18.677-4.932H53V0H11.45V-4.3L43.481-47.8H12.427v-5.029H50.854v4.346Z" transform="translate(188.37 218.094)" fill="#121212" />
                  <path opacity={index === 2 ? 1 : 0} id="Regular" d="M-10.181-18.555H-39.966L-46.655,0h-9.668l27.148-71.094h8.2L6.226,0H-3.394ZM-37.134-26.27h24.17L-25.073-59.521Zm60.6,18.9H54.37V0H12.427V-6.641l29.15-38.721H12.866v-7.471H52.905v6.4Z" transform="translate(188.323 218.094)" fill="#121212"/>
                  <path opacity={index === 4 ? 1 : 0} id="Medium" d="M-11.694-16.553H-39.233L-45,0H-57.837l26.855-71.094H-19.9L7.007,0H-5.884Zm-24.072-9.961h20.605l-10.3-29.492ZM27.173-9.473H55.3V0H12.427V-7.764l26.807-35.5H12.915v-9.57H54.272v7.52Z" transform="translate(188.837 218.094)" fill="#121212"/>
                  <path opacity={index === 3 ? 1 : 0} id="Bold" d="M-12.891-14.648H-38.574L-43.457,0H-59.033l26.465-71.094h13.574L7.617,0H-7.959ZM-34.619-26.514h17.773l-8.936-26.611ZM30.127-11.377h25.83V0H12.109V-8.594L36.963-41.406H12.842V-52.832H55.176v8.35Z" transform="translate(189.033 218.094)" fill="#121212"/>
                  <path opacity={index === 1 ? 1 : 0} id="Black" d="M-14.331-13.281H-37.817L-41.919,0H-60.229l26.074-71.094h16.113L8.228,0H-10.181ZM-33.716-26.514h15.283L-26.1-51.172ZM32.642-12.7H56.714V0H11.841V-9.18L35.278-40.137H12.866v-12.7H56.177v8.887Z" transform="translate(189.229 218.094)" fill="#121212"/>
                </g>
              </g>
            </svg>
          </ComponentContainer>
        </Mockup>
      </InView>
    </Showcase>
      <Showcase>
        <InView onChange={handleOnChange} isVisible={inView}>
          <Mockup maxWidth="80%" variant="window" title="color.md" scheme="dark">
            <TextArea>
              <div>```font </div>
              <div>font: Roboto </div>
              <span>weight: </span>
              <span ref={textArea}/>
              <div>```</div>
            </TextArea>
          </Mockup>
        </InView>
      </Showcase>
    </Row>
  )
}

export default FontRow;