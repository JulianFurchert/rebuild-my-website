import { Container, Text, Box, Paragraph } from '../../components'

export default function Framo() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 20}}>
       Repro Font
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
        The idea for the Repro font family was born while working in Cinema4D. In Cinema4D text paths and splines are divided into straight lines during post-processing. Different interpolation methods are available to calculate the intermediate points. This means that the shape of a letter is determined by the selection of the font as well as by the selection and settings of the interpolation method. This fact inspired me to write my own method for recalculating the glyphs. The method creates intermediate points along the paths and moves them to a virtual orthogonal grid. The glyphs of the Repro 100 are used as a starting point, and the grid becomes coarser and coarser from typeface to typeface (Repro 200-600) until the resulting characters are no longer readable.    
        </Paragraph>
      </Box>
      <Box css={{marginTop: 60}}>
      </Box>
    </Container>
  )
}
