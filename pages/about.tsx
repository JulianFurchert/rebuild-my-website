import { Container, Text, Box, Paragraph } from '../components'
import Head from '../composites/Head'
import React from 'react'

export default function About() {
  return (
    <React.Fragment>
      <Head />
      <Container>
        <Text as="h1" variant="headline" css={{ marginBottom: 20 }}>
          About me
        </Text>
        <Box css={{ maxWidth: 1100 }}>
          <Paragraph>
            As a Software Engineer based in Düsseldorf with 6 years of experience in design and development, I specialize in creating user interfaces and design systems for digital products. My expertise in both technical and creative aspects of the development process enables me to develop effective solutions that align with both user needs and business goals.          </Paragraph>
          <Paragraph>
            At Raytion, I lead the development of a component library for search applications, responsible for its conception, design, and development. This library serves both our own product and provides support for custom interfaces for our clients.          </Paragraph>
          <Paragraph>
            Besides web development, I have a diverse range of interests including creative programming, typography, and photography. Check out my website to view some of my personal projects.          </Paragraph>
        </Box>
      </Container>
    </React.Fragment>
  )
}

