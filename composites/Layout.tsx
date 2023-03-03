import Head from 'next/head'
import { Flex, Box } from '../components'
import { Header } from './Header'
import { Footer } from './Footer'
import { styled } from '../stitches.config'

type LayoutProps = {
  toggleTheme: () => void
  children?: React.ReactNode;
}

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
        <title>Julian Furchert</title>
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