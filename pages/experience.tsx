import { Container, Text, Box, Paragraph, Separator  } from '../components'

export default function Experience() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 60}}>
        Experience
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Text as="h2" variant="headline2" css={{ marginTop: '$6' }}>
          Raytion
        </Text>
        <Separator top={1} bottom={4} />
        <Paragraph>
          Frontend developer and designer, mechanical keyboard enthusiast, practicing minimalist, and trance lover in search of flow. Writing about design and code. As I've grown as a developer, I've worked alongside senior designers and developers who have raised my standards for whats expected of any web application. Through these experiences, I've had the opportunity to create memorable products that are not only enjoyable to use but are written in code that's maintainable and easy to understand.
        </Paragraph>
        <Text as="h2" variant="headline2" css={{ marginTop: '$6' }}>
          Freelancer
        </Text>
        <Separator top={1} bottom={4} />
        <Paragraph>
          Frontend developer and designer, mechanical keyboard enthusiast, practicing minimalist, and trance lover in search of flow. Writing about design and code. As I've grown as a developer, I've worked alongside senior designers and developers who have raised my standards for whats expected of any web application. Through these experiences, I've had the opportunity to create memorable products that are not only enjoyable to use but are written in code that's maintainable and easy to understand.
        </Paragraph>
        <Text as="h2" variant="headline2" css={{ marginTop: '$6' }}>
          Denkwerk
        </Text>
        <Separator top={1} bottom={4} />
        <Paragraph>
          Frontend developer and designer, mechanical keyboard enthusiast, practicing minimalist, and trance lover in search of flow. Writing about design and code. As I've grown as a developer, I've worked alongside senior designers and developers who have raised my standards for whats expected of any web application. Through these experiences, I've had the opportunity to create memorable products that are not only enjoyable to use but are written in code that's maintainable and easy to understand.
        </Paragraph>
      </Box>
    </Container>
  )
}
