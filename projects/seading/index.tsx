import { Container, Text, Box, Paragraph, Slideshow } from '../../components'

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
    </Container>
  )
}
