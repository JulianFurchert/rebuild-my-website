import { Container, Text, Box, Paragraph } from '../components'

export default function About() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{ marginBottom: 20 }}>
        About me
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          I'm a Software Engineer based in Düsseldorf, and I have a soft spot in design systems and user interfaces. With over 6 years of experience in both design and development, I bring a unique and holistic perspective to creating digital products. My ability to comprehend both the technical and creative aspects of the development process enables me to develop elegant and effective solutions that meet the needs of users and business goals. I am interested in a wide range of subjects including web development, creative coding, design systems and interaction design.         </Paragraph>
        <Paragraph>
          Currently, I work at Raytion and lead the development of a component library for search applications. My responsibilities include conception, design, and development of this library. Not only does it serve our own product, but it also supports custom interfaces for various clients.        </Paragraph>
      </Box>
    </Container>
  )
}
