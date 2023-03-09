import { Container, Text, Box, Paragraph, VideoCase, ImageCase, Row, ComponentCase, ProjectInformation } from '../../components'

import Alphabets from './components/Alphabets';
import SettingsGridCase from './components/SettingsGridCase';
import SettingsZoomCase from './components/SettingsZoomCase';

export default function Framo() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 20}}>
        Typescanner
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          TypeScanner is a web application that can generate fonts based on 96 different grids. The result can be modified by three parameters. The selection of the raster, its position and its scaling. The resulting glyph shapes range from readable characters to abstract shapes. Thanks to opentype.js the fonts can be exported directly in OTF format. TypeScanner is implemented with React. The grids are taken from the book 'Grid Index' by Carsten Nicolai and were prepared in several steps.      
        </Paragraph>
      </Box>
      <Box css={{ marginTop: 24 }}>
        <ProjectInformation 
          site="https://beta.typescanner.com/" 
          code="https://github.com/JulianFurchert/typeScanner/"
          // docs="https://docs.typescanner.com/" 
          stack={[ 'React', 'Opentype.js', 'Paper.js', 'Snap.svg', 'Netlify' ]}
        />
      </Box>
      <Box css={{ marginTop: 40 }}>
        <Row columns={2}>
          <SettingsGridCase />
          <SettingsZoomCase />
        </Row>
        <Row>
          <VideoCase 
            video="/video/typescanner-app.mp4"
            width={2560}
            height={1600}
            scheme="dark"
            mockup={{
              maxWidth: {initial: '90%', bp1:  '100%'}
            }}
          />
        </Row>
        <Row>
          <ComponentCase
            mockup={{
              maxWidth: {initial: '90%', bp1:  '100%'},
              variant: 'none'
            }}
          >
            <Alphabets />
          </ComponentCase>
        </Row>
        <Row>
          <ImageCase 
            src="/img/typescanner-docs.png"
            width={1280}
            height={800}
            scheme="dark"
            mockup={{
              maxWidth: {initial: '90%', bp1:  '100%'}
            }}
          />
        </Row>
        <Row>
          <VideoCase 
            video="/video/typescanner-calculation.mp4"
            width={2560}
            height={1600}
            mockup={{
              maxWidth: {initial: '90%', bp1:  '100%'},
              variant: 'simple'
            }}
          />
        </Row>
      </Box>
    </Container>
  )
}
