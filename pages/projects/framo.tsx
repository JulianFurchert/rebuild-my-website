import { Container, Text, Box, Paragraph } from '../../components'

export default function Framo() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 20}}>
        Framo
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph></Paragraph>
      </Box>
      <Box css={{marginTop: 60}}></Box>
    </Container>
  )
}
