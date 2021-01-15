import { Container, Text, Box, Paragraph, Row, VideoCase, ImageCase, LottieCase } from '../components'
import lottie from './lottie/lottie.json';

export default function System() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 20}}>
        Design System
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          Design System is a Gatsby Starter for creating style guides, documentations, or design systems. With Pretty Paper, you can easily write your documentation using Markdown. To simplify the writing of Design Specification, the Markdown synatx has been extended with special code blocks. This allows you to quickly define colors, fonts, text styles, or add videos and lottie animations to your documentation.
        </Paragraph>
      </Box>
      <Box css={{ marginTop: 60 }}>
        <Paragraph>
          VideoCase
        </Paragraph>
        <Row>
          <VideoCase 
            video="/video/example-web.mp4"
            width={1280}
            height={800}
          />
        </Row>
        <Row>
          <VideoCase 
            video="/video/example-web.mp4"
            width={1280}
            height={800}
            size="full"
          />
        </Row>
        <Row>
          <VideoCase 
            video="/video/example-iphone.mp4"
            width={372}
            height={666}
            maxWidth={60}
          />
          <VideoCase 
            video="/video/example-iphone.mp4"
            width={372}
            height={666}
            maxWidth={60}
          />
        </Row>
        <Paragraph css={{ marginTop: 60 }}>
          ImageCase
        </Paragraph>
        <Row>
          <ImageCase 
            src="/img/example-web-1200x800.jpg"
            width={1200}
            height={800}
          />
        </Row>
        <Row>
          <ImageCase 
            src="/img/example-web-1200x800.jpg"
            width={1200}
            height={800}
            mockup="window"
            mockupTitle="window"
          />
        </Row>
        <Row>
          <ImageCase 
            src="/img/example-iphone-375x667.jpg"
            width={375}
            height={667}
          />
          <ImageCase 
            src="/img/example-iphone-375x667.jpg"
            width={375}
            height={667}
          />
        </Row>
        <Paragraph css={{ marginTop: 60 }}>
          LottieCase
        </Paragraph>
        <Row>
          <LottieCase
            data={lottie}
            maxWidth={60}
          />
        </Row>
      </Box>
    </Container>
  )
}
