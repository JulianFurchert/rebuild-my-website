import { Container, Text, Box, Paragraph, Row, ImageCase, VideoCase, ComponentCase, ProjectInformation } from '../../components'
import Animation from './components/Animation'

export default function Framo() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 20}}>
        Framo
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          A website was developed and a responsive logo was designed for the London-based architecture firm Framo. The logo consists of six letters that adapt to the available space depending on the width of the screen. The shape of the letters always changes with the aspect ratio of the screen. To make the logo usable in other media, a web app was developed in which the letters can be freely arranged and scaled. The result can be saved as a vector file. Both website and app are implemented with React. Design and conception of the website are by Mind Design.
        </Paragraph>
      </Box>
      <Box css={{ marginTop: 24 }}>
        <ProjectInformation 
          code="https://github.com/JulianFurchert/seading" 
          site="https://seading.vercel.app/" 
          stack={[ 'React', 'Next.js', 'Typescript' ]}
        />
      </Box>
      <Box css={{ marginTop: 40 }}>
        <Row>
          <VideoCase 
            video="/video/framo-playground.mp4"
            width={2560}
            height={1602}
            mockup={{
              maxWidth: '90%'
            }}
          />
        </Row>
        <Row>
          <ComponentCase
            mockup={{
              variant: 'none',
              maxWidth: '80%'
            }}
          >
            <Animation />
          </ComponentCase>
        </Row>
        <Row columns={2}>
          <ImageCase 
            src="/img/framo-logo.png"
            width={750}
            height={1334}
            mockup={{
              maxWidth: '60%'
            }}
          />
          <ImageCase 
            src="/img/framo-mobil.png"
            width={750}
            height={1334}
            mockup={{
              maxWidth: '60%'
            }}
          />
        </Row>
        <Row>
          <VideoCase 
            video="/video/framo-website.mp4"
            width={2880}
            height={1800}
            size="full"
            mockup={{
              variant: 'none'
            }}
          />
        </Row>
      </Box>
    </Container>
  )
}
