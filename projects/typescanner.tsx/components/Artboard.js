import React from 'react';
import { styled } from '../../../stitches.config';

const Container = styled('div', {
  position: "absolute",
  top: "0px",
  left: "0px",
  maxWidth: "100%",
  width: "100vh",
  height: "100%",
  borderRadius: "16px",
  backgroundColor: "white"
})

const Letter = styled('svg', {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  fill: "none",
  stroke: "black",
  fillOpacity: 0,
  strokeWidth: 40,
  strokeLinejoin: "round",
  strokeLinecap: "square"
})

const GridContainer = styled('div', {
  position: "relative", 
  height: "100%", 
  width: "100%"
})

const Grid = styled('svg', {
  strokeWidth: 0.1,
  strokeLinecap: "square",
  strokeMiterlimit: "3.239",
  fill: "none",
  stroke: "#868686"
})

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