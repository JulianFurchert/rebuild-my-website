import { Container } from '../components'
import { PrettyPaper } from '../thumbnails/PrettyPaper'
import { TypeScanner } from '../thumbnails/TypeScanner'
import { ReproFont } from '../thumbnails/ReproFont'
import { Seading } from '../thumbnails/Seading'
import { Framo } from '../thumbnails/Framo'
import { styled } from '../stitches.config'
import Head from '../composites/Head'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <Head />
      <Container>
        <Row reverse="mobil">
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
    </React.Fragment>
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
  bp2: {
    marginTop: 40,
  },
  variants: {
    reverse: {
      mobil: {
        bp1: {
          flexDirection: 'column-reverse'
        }
      }
    },
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