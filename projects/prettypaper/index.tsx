import { Container, Text, Box, Paragraph, Row, VideoCase, LottieCase, CodeCase, ProjectInformation } from '../../components'

import lottieExample from './lottie/example_800-800.json';
import lottieBlue from './lottie/blue_800-800.json';
import ColorRow from './components/ColorRow';
import FontRow from './components/FontRow';

export default function Framo() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 20}}>
        Pretty Paper
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          Pretty Paper is a Gatsby Starter for creating style guides, documentations, or design systems. With Pretty Paper, you can easily write your documentation using Markdown. To simplify the writing of Design Specification, the Markdown synatx has been extended with special code blocks. This allows you to quickly define colors, fonts, text styles, or add videos and lottie animations to your documentation.
        </Paragraph>
      </Box>
      <Box css={{ marginTop: 32 }}>
        <ProjectInformation 
          site="https://pretty-paper.netlify.app/" 
          code="https://github.com/JulianFurchert/gatsby-starter-prettypaper" 
          stack={[ 'React', 'Gatsby.js', 'Sass', 'CSS Modules', 'Markdown' ]}
        />
      </Box>
      <Box css={{ marginTop: 40 }}>
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
    </Container>
  )
}
