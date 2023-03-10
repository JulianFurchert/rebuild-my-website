import React from 'react'
import Head from 'next/head'
import { Container, Text, Box, Paragraph, ProjectInformation } from '../components'

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
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} /> 
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />    
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        {stack && (
          <meta name="keywords" content={stack.join(",")}  />
        )}
      </Head>
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
