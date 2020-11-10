import { Container, Text, Box, Paragraph, Row, ImageCase } from '../../components'

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
          <ImageCase 
            src="/img/framo-logo.png"
            width={750}
            height={1334}
            maxWidth={60}
            mockup="default"
          />
          <ImageCase 
            src="/img/framo-mobil.png"
            width={750}
            height={1334}
            maxWidth={60}
            mockup="default"
          />
        </Row>
        <Row>
          <ImageCase 
            src="/img/framo-logo.png"
            width={750}
            height={1334}
            maxWidth={60}
          />
          <ImageCase 
            src="/img/framo-mobil.png"
            width={750}
            height={1334}
            maxWidth={60}
          />
        </Row>
      </Box>
    </Container>
  )
}
