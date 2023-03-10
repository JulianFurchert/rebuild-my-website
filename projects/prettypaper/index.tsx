import { Box, Row, VideoCase, LottieCase, CodeCase } from '../../components'

import lottieExample from './lottie/example_800-800.json';
import lottieBlue from './lottie/blue_800-800.json';
import ColorRow from './components/ColorRow';
import FontRow from './components/FontRow';

export default function Framo() {
  return (
    <Box>
      <ColorRow />
      <FontRow />
      <Row>
        <VideoCase 
          video="/video/prettypaper-gray.mp4"
          size={{ bp1: 'full' }}
          width={2880} 
          height={1800}
          scheme="dark"
          mockup={{
            maxWidth: {initial: '90%', bp1: '100%'},
            scheme: 'dark',     
            clipPath: 'inset(6% 4%)'
          }}
        />
      </Row>
      <Row columns={2}>
        <CodeCase
          code={[
            "```lottie", 
            "src: example_lottie.json", 
            "````"
          ]}
          mockup={{
            variant: 'window',
            title: 'lottie.md',
            scheme: 'dark',
            maxWidth: 600
          }}
        />
        <LottieCase data={lottieBlue} />
      </Row>
      <Row columns={2} reverse={{initial: false, bp1: true}}>
        <LottieCase  data={lottieExample} />
        <CodeCase
          code={[
            "```video", 
            "src: example_video.mp4",  
            "autoplay: true", 
            "````"
          ]}
          mockup={{
            variant: 'window',
            title: 'video.md',
            scheme: 'dark',
            maxWidth: 600
          }}
        />
      </Row>
    </Box>
  )
}
