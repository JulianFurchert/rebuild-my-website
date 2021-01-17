import { Container, Text, Box, Paragraph, Row, ImageCase, VideoCase, ComponentCase } from '../../components'
import Animation from './components/Animation'

export default function Framo() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 20}}>
        Framo
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
            Für das Londoner Architekturbüro Framo wurde eine Website entwickelt und ein responsives Logo designt. Das Logo besteht aus sechs Buchstaben, die sich je nach Breite des Bildschirms an den verfügbaren Platz anpassen. Die Form der Buchstaben verändern sich dabei immer mit dessen Seitenverhältnis. Um das Logo auch in anderen Medien nutzbar zu machen, wurde ein Web-App entwickelt in dem die Buchstaben frei angeordnet und skaliert werden können. Das Ergebnis kann als Vektor-Datei gespeichert werden. Umgesetzt sind sowohl Website als auch App mit React. Gestaltung und Konzeption der Website sind von Mind Design.
        </Paragraph>
      </Box>
      <Box css={{marginTop: 60}}>
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
