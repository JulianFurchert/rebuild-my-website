import { Container, Text, Box, Paragraph } from '../components'

export default function About() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{ marginBottom: 20 }}>
        About me
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          I'm a Software Engineer based in Düsseldorf, and I have a soft spot in design systems and user interfaces. With over 6 years of experience in both design and development, I bring a unique and holistic perspective to creating digital products. My ability to comprehend both the technical and creative aspects of the development process enables me to develop elegant and effective solutions that meet the needs of users and business goals. I am interested in a wide range of subjects including web development, creative coding, design systems and interaction design.         
        </Paragraph>
        <Paragraph>
          In my current role at Raytion, I am leading the development of a component library designed specifically for search applications. I am responsible for the conception, design, and development of this library, which not only serves our own product but also provides support for custom interfaces for our various clients.        
        </Paragraph>
      </Box>
    </Container>
  )
}
