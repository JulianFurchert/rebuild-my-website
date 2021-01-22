import { Flex, Container } from '../components'
import { PrettyPaper } from '../thumbnails/PrettyPaper'
import { TypeScanner } from '../thumbnails/TypeScanner'
import { ReproFont } from '../thumbnails/ReproFont'
import { Seading } from '../thumbnails/Seading'
import { Framo } from '../thumbnails/Framo'

export default function Home() {
  return (
    <Container>
      <Flex css={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <TypeScanner css={{ width: '30%' }}  />
        <PrettyPaper css={{ width: '45%' }} />
      </Flex>
      <Flex css={{ justifyContent: 'center', marginTop: '160px'}}>
        <ReproFont css={{ width: '50%' }} />
      </Flex>
      <Flex css={{ justifyContent: 'space-between', alignItems: 'center', marginTop: '80px' }}>
        <Seading css={{ width: '35%' }} />
        <Framo css={{ width: '40%', marginTop: '20vw' }} />
      </Flex>
    </Container>
  );
}