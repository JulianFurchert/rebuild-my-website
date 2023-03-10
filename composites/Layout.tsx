import Head from 'next/head'
import { Flex, Box } from '../components'
import { Header } from './Header'
import { Footer } from './Footer'
import { styled } from '../stitches.config'

type LayoutProps = {
  toggleTheme: () => void
}

const title = "Julian Furchert" 
const description = "Software Engineer with a soft spot for design systems and user interfaces." 
const image = "/og-img/og-image-home.png"
const keywords = "React, Design System, Creative Coding" 

export const Layout: React.FC<LayoutProps> = ({ children, toggleTheme }) => {
  return (
    <Flex
      css={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} /> 
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}  />
        <meta property="og:title" content={title} />    
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:creator" content="@JFurchert" />
      </Head>
      <Header toggleTheme={toggleTheme} />
      <Container>
        {children}
      </Container>
      <Footer />
    </Flex>
  )
}

const Container = styled('div', {
  marginY: '100px', 
  flexGrow: 1,
  bp1: {
    marginY: '48px',
  },
})