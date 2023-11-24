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
          I developed a website and a responsive logo for the London-based architecture studio Framo. The logo consists of six letters that adapt to the available space on the website. The shape of the letters changes with their aspect ratio. To make the logo usable in other media, a web app was developed in which the letters can be freely arranged and scaled. The result can be saved as a vector file. Both website and app are implemented with React. The website was designed by Mind Design.
        </Paragraph>
      </Box>
      <Box css={{ marginTop: 24 }}>
        <ProjectInformation 
          site="https://framo-playground.netlify.app/" 
          siteName="Playground"
          code="https://github.com/JulianFurchert/framo-playground" 
          stack={[ 'React', 'Styled Components', 'React Pose', 'Snap.svg', 'Netlify', 'Prismic' ]}
        />
      </Box>
      <Box css={{ marginTop: 40 }}>
        <Row>
          <VideoCase 
            video="/video/framo-playground.mp4"
            width={2560}
            height={1602}
            mockup={{
              maxWidth: {initial:'90%', bp1: '100%'}
            }}
          />
        </Row>
        <Row>
          <ComponentCase
            mockup={{
              variant: 'none',
              maxWidth: {initial:'80%', bp1: '100%'}
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
              maxWidth: {initial:'60%', bp1: '70%'}
            }}
          />
          <ImageCase 
            src="/img/framo-mobil.png"
            width={750}
            height={1334}
            mockup={{
              maxWidth: {initial:'60%', bp1: '70%'}
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
