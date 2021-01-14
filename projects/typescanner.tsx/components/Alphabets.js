import React, { useState, useEffect } from 'react';
import { styled } from '../../../stitches.config';

import Font1 from './alphabets/font_1.svg';
import Font2 from './alphabets/font_2.svg';
import Font3 from './alphabets/font_3.svg';
import Font4 from './alphabets/font_4.svg';
import Font5 from './alphabets/font_5.svg';
import Font6 from './alphabets/font_6.svg';
import Font7 from './alphabets/font_7.svg';
import Font8 from './alphabets/font_8.svg';

const fonts =[
  <Font1/>,
  <Font2/>,
  <Font3/>,
  <Font4/>,
  <Font5/>,
  <Font6/>,
  <Font7/>,
  <Font8/>
];

const Container = styled('div', {
  maxWidth: '100%',
  width: '100vw'
})

const Alphabets = () => {
  const [index, setIndex] = useState(0);

  const updateIndex = () => {
    setIndex(state => (state + 1) % fonts.length)
  }

  useEffect(() => {
    const interval = setInterval(updateIndex, 1400);
    return () => clearInterval(interval);
  },[])

  return(
    <Container>
      {fonts[index]}
    </Container>
  )
}

export default Alphabets;