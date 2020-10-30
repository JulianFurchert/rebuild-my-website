import { Flex, Container } from '../components'
import { PrettyPaper } from '../thumbnails/PrettyPaper'
import { TypeScanner } from '../thumbnails/TypeScanner'

export default function Home() {
  return (
    <Container>
      <Flex css={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <TypeScanner css={{ width: '35%' }}  />
        <PrettyPaper css={{ width: '50%' }} />
      </Flex>
    </Container>
  );
}