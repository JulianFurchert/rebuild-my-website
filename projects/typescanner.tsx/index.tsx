import { Box, VideoCase, ImageCase, Row, ComponentCase } from '../../components'

import Alphabets from './components/Alphabets';
import SettingsGridCase from './components/SettingsGridCase';
import SettingsZoomCase from './components/SettingsZoomCase';

export default function Framo() {
  return (
    <Box>
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
  )
}
