import { Container, Text, Box, Paragraph, VideoCase, ImageCase, Row, ComponentCase } from '../../components'
import Alphabets from './components/Alphabets';
// import SettingsGrid from './components/SettingsGrid';
// import SettingsZoom from './components/SettingsZoom';

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
      <Box css={{marginTop: 60}}>
        <Row columns={2}>
          {/* <SettingsGrid />
          <SettingsGrid /> */}
        </Row>
        <Row>
          <VideoCase 
            video="/video/typescanner-app.mp4"
            width={2560}
            height={1600}
            scheme="dark"
            mockup={{
              maxWidth: '90%'
            }}
          />
        </Row>
        <Row>
          <ComponentCase
            mockup={{
              maxWidth: '90%',
              variant: 'none'
            }}
          >
            {/* <Alphabets /> */}
          </ComponentCase>
        </Row>
        <Row>
          <ImageCase 
            src="/img/typescanner-docs.png"
            width={1280}
            height={800}
            scheme="dark"
            mockup={{
              maxWidth: '90%',
            }}
          />
        </Row>
        <Row>
          <VideoCase 
            video="/video/typescanner-calculation.mp4"
            width={2560}
            height={1600}
            mockup={{
              maxWidth: '90%',
            }}
          />
        </Row>
      </Box>
    </Container>
  )
}
