import { Container, Text, Box, Paragraph, Row, VideoCase, ComponentCase, GalleryCase, ProjectInformation } from '../../components'

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
          The idea for the Repro font family came about while working in Cinema4D. In Cinema4D, text paths are divided into straight lines when they are exported. Different interpolation methods are available for calculating the intermediary This means that the shape of a letter is affected by both the choice of font and the choice of interpolation method. This fact inspired me to write my own method for recalculating glyphs. The method creates intermediate points along the paths and shifts them onto a virtual orthogonal grid. The grid gets wider and wider from font to font until the resulting characters are no longer readable.
        </Paragraph>
      </Box>
      <Box css={{ marginTop: 32 }}>
        <ProjectInformation 
          site="https://reprofont.de/" 
          code="https://github.com/JulianFurchert/reprofont-website" 
          stack={[ 'React', 'Redux', 'Anime.js', 'Processing' ]}
        />
      </Box>
      <Box css={{ marginTop: 40 }}>
        <Row columns={2}>
          <VideoCase 
            video="/video/reprofont-100-mobil.mp4"
            width={750}
            height={1334}
            mockup={{
              maxWidth: {initial: "60%", bp1: "70%"}
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
            size={{ bp1: 'full' }}
            mockup={{
              maxWidth: { initial: "90%", bp1: '100%' },
              variant: { initial: 'simple', bp1: 'none' }
            }}
          />
        </Row>
        <Row columns={2}>
          <ComponentCase  mockup={{ variant: 'none' }}>
            <GraphicNew />
          </ComponentCase>
          <VideoCase 
            video="/video/reprofont-300-mobil.mp4"
            width={750}
            height={1334}
            mockup={{
              maxWidth: {initial: "60%", bp1: "70%"}
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
              maxWidth: {initial: "90%", bp1: '100%'},
            }}
          />
        </Row>
      </Box>
    </Container>
  )
}
