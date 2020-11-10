import { styled } from '../stitches.config'

export const Row = styled('div',{
  width: "100%", 
  display: "flex", 
  flexWrap: 'wrap',
  margin: '-$2',
  bp1: {
    flexWrap: 'nowrap',
  }
})

export default Row;