import { Container, Text, Box, Paragraph } from '../../components'

export default function Framo() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 20}}>
        Seading
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          During our journey through Southeast Asia, my partner and I decided to visit the first ever Interior Design School in the former capital city of Myanmar (Yangon). We we‘re curious to find out what was taught there and how, is it different to our design classes in Düsseldorf. What happened was an exciting exchange of information and creativity from both sides. It was amazing and fulfilling. I wanted more! Why not discover, document and talk to more people. That moment was the birth of SEADing!
        </Paragraph>
        <Paragraph>
          We decided to visit the the three big cities Singapore, Kuala Lumpur and Bangkok again. We wrote to small and big agencies, designers, illustrators and small printers. How do they handle typography, shapes and color? What gives them their inspiration and motivation. How important is the topic Identity? It became a highly inspiring journey. We were welcomes by all with open arms. The SEADing project encompasses 17 interviews
        </Paragraph>
      </Box>
      <Box css={{marginTop: 60}}>
      </Box>
    </Container>
  )
}
