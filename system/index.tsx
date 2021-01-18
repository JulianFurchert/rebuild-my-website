import { 
  Container, 
  Text, Box, 
  Paragraph, 
  Row, 
  VideoCase, 
  ImageCase, 
  LottieCase, 
  SlidesCase, 
  ComponentCase,
  CodeCase,
  Timeline, 
  Stepbar,
} from '../components'
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
      <Box>
        <Paragraph css={{ marginTop: 60 }}>
          Timeline
        </Paragraph>
        <Row css={{ backgroundColor: '$gray1' }}>
          <Timeline
            duration={5}
            number={10}
            onChange={i =>console.log('Timeline: ' + i)}
          />
        </Row>
        <Paragraph css={{ marginTop: 60 }}>
          Stepbar
        </Paragraph>
        <Row css={{ backgroundColor: '$gray1' }}>
          <Stepbar
            duration={2.5}
            number={5}
            onChange={i => console.log('Stepbar: ' + i)}
          />
        </Row>
        <Paragraph css={{ marginTop: 60 }}>
          CodeCase
        </Paragraph>
        <Row>
          <CodeCase 
            code={["```lottie", "src: example_lottie.json", "````"]}
            mockup={{
              variant: 'window',
              title: 'window'
            }}
          />
        </Row>
        <Row>
          <CodeCase 
            code={["```lottie", "src: example_lottie.json", "````"]}
            scheme="dark"
            mockup={{
              variant: 'window',
              title: 'window',
              scheme: 'dark'
            }}
          />
        </Row>
        <Paragraph css={{ marginTop: 60 }}>
          ComponentCase
        </Paragraph>
        <Row css={{ backgroundColor: '$gray1' }}>
          <ComponentCase>
            <Box
              css={{
                height: '200px',
                width: '100%',
                backgroundColor: '$primary'
              }}
            />
          </ComponentCase>
        </Row>
        <Paragraph css={{ marginTop: 60 }}>
          Gallery
        </Paragraph>
        <Row>
          <SlidesCase
            width={1100} 
            height={800}
            mockup={{
              maxWidth: 1100
            }}
            src={[
              '/img/example-gallery/image-1.jpg',
              '/img/example-gallery/image-2.jpg',
              '/img/example-gallery/image-3.jpg',
              '/img/example-gallery/image-4.jpg'
            ]}
          />
        </Row>
        <Paragraph css={{ marginTop: 60 }}>
          VideoCase
        </Paragraph>
        <Row>
          <VideoCase 
            video="/video/example-web.mp4"
            width={1280}
            height={800}
            mockup={{
              maxWidth: 1100
            }}
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
            mockup={{
              maxWidth: 600
            }}
          />
          <VideoCase 
            video="/video/example-iphone.mp4"
            width={372}
            height={666}
            mockup={{
              maxWidth: 600
            }}
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
            mockup={{
              variant: 'window',
              title: 'window'
            }}
          />
        </Row>
        <Row>
          <ImageCase 
            src="/img/example-iphone-375x667.jpg"
            width={375}
            height={667}
            mockup={{
              maxWidth: 300
            }}
          />
          <ImageCase 
            src="/img/example-iphone-375x667.jpg"
            width={375}
            height={667}
            mockup={{
              maxWidth: 300
            }}
          />
        </Row>
        <Paragraph css={{ marginTop: 60 }}>
          LottieCase
        </Paragraph>
        <Row>
          <LottieCase
            data={lottie}
            mockup={{
              maxWidth: '60%'
            }}
          />
        </Row>
      </Box>
    </Container>
  )
}
