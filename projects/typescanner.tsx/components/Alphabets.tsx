import React, { useState, useEffect } from 'react';
import { Box } from '../../../components'

import Font1 from './assets/alphabets/font_1.svg';
import Font2 from './assets/alphabets/font_2.svg';
import Font3 from './assets/alphabets/font_3.svg';
import Font4 from './assets/alphabets/font_4.svg';
import Font5 from './assets/alphabets/font_5.svg';
import Font6 from './assets/alphabets/font_6.svg';
import Font7 from './assets/alphabets/font_7.svg';
import Font8 from './assets/alphabets/font_8.svg';

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

const Alphabets: React.FC = () => {
  const [index, setIndex] = useState(0);

  const updateIndex = () => {
    setIndex(state => (state + 1) % fonts.length)
  }

  useEffect(() => {
    const interval = setInterval(updateIndex, 1400);
    return () => clearInterval(interval);
  },[])

  return(
    <Box css={{ width: '100%' }}>
      {fonts[index]}
    </Box>
  )
}

export default Alphabets;