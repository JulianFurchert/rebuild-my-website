import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color:${themeGet("colors.white")};
  border-radius: 16px;
`

const Letter = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  fill: none;
  stroke: black;
  fill-opacity: 0;
  stroke-width: 40;
  stroke-linejoin: round;
  stroke-linecap: square;
  /* &:hover{
    stroke: #00b38e;
  } */
`

const GridContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

const Grid = styled.svg`
  stroke-width: 0.1;
  stroke-linecap: square;
  stroke-miterlimit: 3.239;
  fill: none;
  stroke: #868686;
`


const Artboard = ({grid, letter}) => {
  return(
      <Container>
        <GridContainer>
          <Grid viewBox="0 0 1100 1400">
            {grid}
          </Grid>
        </GridContainer>
        <Letter viewBox="0 0 1100 1400">
          {letter}
        </Letter>
      </Container>
  )
}

export default Artboard;