import { Container, Text, Box, Paragraph, Row, VideoCase, ComponentCase, GalleryCase } from '../../components'

import GraphicNew from './components/GraphicNew';
import GraphicEEE from './components/GraphicEEE';

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
        <Row columns={2}>
          <VideoCase 
            video="/video/reprofont-100-mobil.mp4"
            width={750}
            height={1334}
            mockup={{
              maxWidth: "60%"
            }}
          />
          <ComponentCase  mockup={{ variant: 'none' }}>
            <GraphicEEE />
          </ComponentCase>
        </Row>
        <Row>
          <VideoCase 
            video="/video/reprofont-desktop.mp4"
            width={2560}
            height={1600}
            mockup={{
              maxWidth: "80%"
            }}
          />
        </Row>public/img/reprofont-speciem/speciem2.jpg
        <Row columns={2}>
          <ComponentCase  mockup={{ variant: 'none' }}>
            <GraphicNew />
          </ComponentCase>
          <VideoCase 
            video="/video/reprofont-300-mobil.mp4"
            width={750}
            height={1334}
            mockup={{
              maxWidth: "60%"
            }}
          />
        </Row>
        <Row>
          <GalleryCase 
            src={[
              "/img/reprofont-speciem/speciem2.jpg",
              "/img/reprofont-speciem/speciem3.jpg",
              "/img/reprofont-speciem/speciem4.jpg",
              "/img/reprofont-speciem/speciem5.jpg",
              "/img/reprofont-speciem/speciem6.jpg",
              "/img/reprofont-speciem/speciem7.jpg",
              "/img/reprofont-speciem/speciem8.jpg",
              "/img/reprofont-speciem/speciem9.jpg",
              "/img/reprofont-speciem/speciem10.jpg",
            ]}
            width={1280}
            height={889}
            mockup={{
              maxWidth: "80%"
            }}
          />
        </Row>
      </Box>
    </Container>
  )
}
