import { Container, Text, Box, Paragraph, Slideshow, Row, ImageCase } from '../../components'

export default function Framo() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 20}}>
        Seading
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          During our journey through Southeast Asia, my partner and I decided to visit the first ever Interior Design School in the former capital city of Myanmar (Yangon). We we‘re curious to find out what was taught there and how, is it different to our design classes in Düsseldorf. What happened was an exciting exchange of information and creativity from both sides. It was amazing and fulfilling. We wanted more! Why not discover, document and talk to more people. That moment was the birth of Seading!
        </Paragraph>
        <Paragraph>
          We decided to visit the the three big cities Singapore, Kuala Lumpur and Bangkok again. We wrote to small and big agencies, designers, illustrators and small printers. How do they handle typography, shapes and color? What gives them their inspiration and motivation. How important is the topic Identity? It became a highly inspiring journey. We were welcomes by all with open arms. The Seading project encompasses 17 interviews
        </Paragraph>
      </Box>
      <Box css={{marginTop: 60}}>
        <Slideshow 
          images={[
            {
              src: '/img/seading-slideshow-a-1.jpg',
              width: 1920,
              height: 1280
            },
            {
              src: '/img/seading-slideshow-a-4.jpg',
              width: 1920,
              height: 2880
            },
            {
              src: '/img/seading-slideshow-a-2.jpg',
              width: 1920,
              height: 1280
            },
            {
              src: '/img/seading-slideshow-a-3.jpg',
              width: 1920,
              height: 1280
            }
          ]}
        />
        <Slideshow 
          startPosition="flex-end"
          images={[
            {
              src: '/img/seading-slideshow-a-1.jpg',
              width: 1920,
              height: 1280
            },
            {
              src: '/img/seading-slideshow-a-4.jpg',
              width: 1920,
              height: 2880
            },
            {
              src: '/img/seading-slideshow-a-2.jpg',
              width: 1920,
              height: 1280
            },
            {
              src: '/img/seading-slideshow-a-3.jpg',
              width: 1920,
              height: 1280
            }
          ]}
        />
      </Box>
      <Box css={{ maxWidth: 1200 }}>
        <Text as="h2" variant="headline2" css={{marginBottom: 20}}>
          Communication with the Unknown
        </Text>
        <Paragraph>
          This is a series of posters created in cooperation with designers from Singapore, Thailand and Malaysia. During our journey through Southeast Asia we were captivated by all the letterings/script/writings we couldn’t read or comprehend. This is what inspired my partner and I to create our own fictitious type (lettering), which we gave the designers. Much like the unknown shapes and fonts we had seen, this writing was unknown to the designers. We were curious to find out, what the designers would do with these new, unknown (and cryptic) letters. The work you see below is what transpired from this.
        </Paragraph>
      </Box>
      <Box css={{marginTop: 60}}>
        <Row columns={2}>
          <ImageCase 
            src="/img/seading-poster-1.jpg"
            width={881}
            height={1200}
            mockup={{
              variant: 'simple'
            }}
          />
          <ImageCase 
            src="/img/seading-poster-2.jpg"
            width={881}
            height={1200}
            mockup={{
              variant: 'simple'
            }}
          />
        </Row>
        <Row columns={2}>
          <ImageCase 
            src="/img/seading-poster-3.jpg"
            width={881}
            height={1200}
            mockup={{
              variant: 'simple'
            }}
          />
          <ImageCase 
            src="/img/seading-poster-4.jpg"
            width={881}
            height={1200}
            mockup={{
              variant: 'simple'
            }}
          />
        </Row>
        <Row columns={2}>
          <ImageCase 
            src="/img/seading-poster-5.jpg"
            width={881}
            height={1200}
            mockup={{
              variant: 'simple'
            }}
          />
          <ImageCase 
            src="/img/seading-poster-6.jpg"
            width={881}
            height={1200}
            mockup={{
              variant: 'simple'
            }}
          />
        </Row>
      </Box>
    </Container>
  )
}
