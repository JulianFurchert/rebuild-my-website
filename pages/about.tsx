import { Container, Text, Box, Paragraph } from '../components'

export default function About() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{ marginBottom: 20 }}>
        About me
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          I am a UI developer from Düsseldorf, Germany. I am interested in design systems, interaction design and typography. I am currently developing software and a react component library to create a great search experience for our clients at Raytion.       
        </Paragraph>
      </Box>
    </Container>
  )
}
