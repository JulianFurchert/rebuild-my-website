import React, { useState, useLayoutEffect, useRef } from 'react';
import { styled } from '../../stitches.config';
import lottie from 'lottie-web';
import { Showcase, ShowcaseVariants } from '../Showcase';
import { Mockup, MockupProps } from '../Mockup';
import { InView } from '../InView';

type LottieCaseProps = ShowcaseVariants & {
  data: any,
  mockup?: MockupProps
}

export const LottieCase:React.FC<LottieCaseProps> = ({
  data,
  mockup,
  ...viewcase 
}) =>  {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const lottieRef = useRef();

  useLayoutEffect(()=>{
    if(inView){
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        autoplay: true,
        loop: true,
        animationData: data,
      })
      animation.addEventListener( "DOMLoaded", () => setLoaded(true) );
      return ()=>{
        animation.removeEventListener( "DOMLoaded", () => setLoaded(true) );
      }
    }
  },[inView])

  const handleOnChange = () => {
    console.log('handleOnChange')
    setInView(true)
  }

  return (
    <Showcase {...viewcase}>
      <InView isVisible={loaded} onChange={handleOnChange}>
        <Mockup {...mockup}>
          <LottieContainer ref={lottieRef}/>
        </Mockup>
      </InView>
    </Showcase>
  )
}

const LottieContainer = styled('div', {
  position:'relative',
  width: '100%',
  height: 'auto',
})

export default LottieCase;

