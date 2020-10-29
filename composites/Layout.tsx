import Head from 'next/head'
import { Flex, Box } from '../components'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: React.FC = ({ children }) => {
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
      <Header />
      <Box css={{ marginTop: 100, flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}