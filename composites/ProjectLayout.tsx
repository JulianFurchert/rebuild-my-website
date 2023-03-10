import React from 'react'
import { Container, Text, Box, Paragraph, ProjectInformation } from '../components'
import Head from './Head'

type PageLayoutProps = {
  title: string,
  description: string,
  text?: string | React.ReactNode
  children: React.ReactNode,
  stack?: string[],
  image?: string,
  links?: { name: string, url: string }[]
}

export default function ProjectLayout({ title, text, description, children, stack, links, image }: PageLayoutProps) {
  return (
    <React.Fragment>
      <Head 
        title={title}
        description={description}
        image={image}
        keywords={stack ? stack.join(",") : null}
      />
      <Container>
        <Text as="h1" variant="headline" css={{marginBottom: 20}}>
            {title}
        </Text>
        <Box css={{ maxWidth: 1200 }}>
          {typeof text !== 'string' ? text : <Paragraph>{text}</Paragraph>}
        </Box>
        <Box css={{ marginTop: 24 }}>
          <ProjectInformation links={links} stack={stack} />
        </Box>
        <Box css={{ marginTop: 40 }}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  )
}
