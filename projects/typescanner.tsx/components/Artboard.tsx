import React from 'react';
import { styled } from '../../../stitches.config';

const Container = styled('div', {
  width: "100%",
  borderRadius: "16px",
  backgroundColor: "white",
  marginBottom: '-20%'
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

const Grid = styled('svg', {})

type ArtboardProps = {
  grid: any,
  letter: any,
}

const Artboard: React.FC<ArtboardProps> = ({ grid, letter }) => {
  return(
      <Container>
        <GridContainer>
          <Grid 
            viewBox="0 0 1100 1400"
            strokeWidth={0.1}
            strokeLinecap="square"
            strokeMiterlimit="3.239"
            fill="none"
            stroke="#868686"
          >
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