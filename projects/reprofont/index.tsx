import { Box, Row, VideoCase, ComponentCase, GalleryCase } from '../../components'

import GraphicNew from './components/GraphicNew';
import GraphicEEE from './components/GraphicEEE';

export default function Framo() {
  return (
    <Box>
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
            "/img/reprofont-speciem/speciem3.jpg",
            "/img/reprofont-speciem/speciem10.jpg",
            "/img/reprofont-speciem/speciem11.jpg",
            "/img/reprofont-speciem/speciem14.jpg",
            "/img/reprofont-speciem/speciem18.jpg",
            "/img/reprofont-speciem/speciem19.jpg",
            "/img/reprofont-speciem/speciem22.jpg",
            "/img/reprofont-speciem/speciem23.jpg",
            "/img/reprofont-speciem/speciem24.jpg",
            "/img/reprofont-speciem/speciem29.jpg",
          ]}
          width={1280}
          height={889}
          duration={2}
          mockup={{
            maxWidth: {initial: "90%", bp1: '100%'},
          }}
        />
      </Row>
    </Box>
  )
}
