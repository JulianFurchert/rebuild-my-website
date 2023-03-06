import { Container, Text, Box, Paragraph } from '../components'

export default function About() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{ marginBottom: 20 }}>
        About me
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
        As a designer and software engineer based in Düsseldorf, I have a keen interest in creating solutions that align with user needs and business goals. I am experienced in design systems and user interfaces, and enjoy the challenge of understanding both the technical and creative aspects of the development process to bring those solutions to life.
        </Paragraph>
        <Paragraph>
        My work on design systems enables me to utilize my skills in both design and development to create a unified and efficient system that can be implemented across a wide range of products.        
        </Paragraph>
      </Box>
    </Container>
  )
}
