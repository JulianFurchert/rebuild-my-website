import { Flex, Container } from '../components'
import { PrettyPaper } from '../thumbnails/PrettyPaper'

export default function Home() {
  return (
    <Container>
      <Flex css={{ justifyContent: 'center', alignItems: 'center' }}>
        <PrettyPaper css={{ width: '50%' }} />
      </Flex>
    </Container>
  );
}