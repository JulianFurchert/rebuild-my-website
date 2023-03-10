import React from 'react'
import { Box, Row, ImageCase, VideoCase, ComponentCase } from '../../components'
import Animation from './components/Animation'

export default function Framo() {
  return (
    <Box>
      <Row>
        <VideoCase 
          video="/video/framo-playground.mp4"
          width={2560}
          height={1602}
          mockup={{
            maxWidth: {initial:'90%', bp1: '100%'}
          }}
        />
      </Row>
      <Row>
        <ComponentCase
          mockup={{
            variant: 'none',
            maxWidth: {initial:'80%', bp1: '100%'}
          }}
        >
          <Animation />
        </ComponentCase>
      </Row>
      <Row columns={2}>
        <ImageCase 
          src="/img/framo-logo.png"
          width={750}
          height={1334}
          mockup={{
            maxWidth: {initial:'60%', bp1: '70%'}
          }}
        />
        <ImageCase 
          src="/img/framo-mobil.png"
          width={750}
          height={1334}
          mockup={{
            maxWidth: {initial:'60%', bp1: '70%'}
          }}
        />
      </Row>
      <Row>
        <VideoCase 
          video="/video/framo-website.mp4"
          width={2880}
          height={1800}
          size="full"
          mockup={{
            variant: 'none'
          }}
        />
      </Row>
    </Box>
  )
}
