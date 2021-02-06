import { styled } from '../stitches.config'
import { Flex, Container, Link, Box, ThemeToggle } from '../components'
import MenuDialog from './MenuDialog'
import InfoDialog from './InfoDialog'

type HeaderProps = {
  toggleTheme: () => void
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => (
  <Wrappper>
    <Container>
      <Flex css={{ justifyContent: 'space-between', alignItems: 'center', height: 60 }}>
        <Link href="/">
          Julian Furchert
        </Link>
        <Flex>
          <Box css={{ marginRight: '$4' }}>
            <MenuDialog />
          </Box>
          <ThemeToggle toggleTheme={toggleTheme} />
        </Flex>
      </Flex>
    </Container>
  </Wrappper>
)

const Wrappper = styled('div', {
  position: 'sticky',
  top: 0,
  zIndex: 200,
  '&:after': {
    content: '""',
    backgroundColor: '$loContrast',
    opacity: 0.9,
    backdropFilter: 'saturate(2.8) blur(6px)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: -1,
  }
})