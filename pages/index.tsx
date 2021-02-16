import { Flex, Container } from '../components'
import { PrettyPaper } from '../thumbnails/PrettyPaper'
import { TypeScanner } from '../thumbnails/TypeScanner'
import { ReproFont } from '../thumbnails/ReproFont'
import { Seading } from '../thumbnails/Seading'
import { Framo } from '../thumbnails/Framo'
import { styled } from '../stitches.config'

export default function Home() {
  return (
    <Container>
      <Row>
        <TypeScanner width={30} />
        <PrettyPaper width={45} />
      </Row>
      <Row mt={160} center="horizontal">
        <ReproFont width={50} />
      </Row>
      <Row mt={160}>
        <Seading width={35} />
        <Framo width={40} translateY={20} />
      </Row>
    </Container>
  );
}

const Row = styled('div', {
  display: 'flex',
  justifyContent: 'space-between', 
  alignItems: 'center',
  bp1: {
    marginTop: 0,
    flexWrap: 'wrap',
  },
  variants: {
    mt: {
      0: { marginTop: 0 },
      40: { marginTop: 40 },
      80: { marginTop: 80 },
      120: { marginTop: 120 },
      160: { marginTop: 160 },
    },
    center: {
      horizontal: {
        justifyContent: 'center', 
      },
      verical: {
        alignItems: 'center',
      },
      all: {
        alignItems: 'center',
        justifyContent: 'center', 
      }
    }
  }
})