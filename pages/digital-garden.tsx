import { Combobox } from '../composites/Combobox'
import { Container, Text, Box, Paragraph } from '../components'

export default function DigitalGarden() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{ marginBottom: 20 }}>
        Digital Garden
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          Frontend developer and designer, mechanical keyboard enthusiast, practicing minimalist, and trance lover in search of flow. Writing about design and code. As I've grown as a developer, I've worked alongside senior designers.
        </Paragraph>
      </Box>
      <Box css={{marginTop: '$7'}}>
        <Combobox />
      </Box>
    </Container>
  )
}
