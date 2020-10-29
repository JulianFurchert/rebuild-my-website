import Head from 'next/head'
import { Flex, Box } from '../components'
import { Header } from './Header'
import { Footer } from './Footer'

type LayoutProps = {
  toggleTheme: () => void
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
      <Box css={{ marginTop: 100, flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}