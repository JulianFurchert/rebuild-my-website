import { styled } from '../stitches.config'
import { Flex, Container, Link} from '../components'

export const Header: React.FC = () => (
  <Wrappper>
    <Container>
      <Flex css={{ justifyContent: 'space-between', alignItems: 'center', height: 60 }}>
        <Link href="/">
          Julian Furchert
        </Link>
        <Link href="/">
          Menu
        </Link>
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
    opacity: 0.8,
    backdropFilter: 'saturate(1.8) blur(20px)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: -1,
  }
})