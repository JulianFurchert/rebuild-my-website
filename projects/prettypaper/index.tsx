import { Container, Text, Box, Paragraph } from '../../components'

export default function Framo() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 20}}>
        PrettPaper
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          Pretty Paper is a Gatsby Starter for creating style guides, documentations, or design systems. With Pretty Paper, you can easily write your documentation using Markdown. To simplify the writing of Design Specification, the Markdown synatx has been extended with special code blocks. This allows you to quickly define colors, fonts, text styles, or add videos and lottie animations to your documentation.
        </Paragraph>
      </Box>
      <Box css={{marginTop: 60}}>
      </Box>
    </Container>
  )
}
