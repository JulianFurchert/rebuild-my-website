import { Container, Text, Box, Paragraph, Slideshow, ImagesCase, InlineLink, ProjectInformation } from '../../components'

export default function Framo() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 20}}>
        Seading
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          During our trip through Southeast Asia, <InlineLink href="https://evejazmati.com/">Eve Jazmati</InlineLink> and I decided to visit the very first Interior Design School in the former capital of Myanmar (Yangon). We were curious to find out what is taught there and how it differs from our design classes in Düsseldorf. What happened then was an exciting exchange of information and creativity. It was amazing and fulfilling. We asked ourselves why we don't discover more and meet more creative people. That was the birth of Seading!
        </Paragraph>
        <Paragraph>
          We decided to visit the three major cities of Singapore, Kuala Lumpur and Bangkok again. It turned out to be a most inspiring trip. For this incredible experience, we thank all the studios and designers who welcomed us so kindly: <InlineLink href="https://www.facebook.com/Yangon.School.of.Interior.Design.2013/?ref=page_internal">Yangon, School of Interior Design</InlineLink>, <InlineLink href="https://somewhere-else.co/">Somewhere Else</InlineLink>, <InlineLink href="https://factory1611.com/">Factory 1611</InlineLink>, <InlineLink href="http://theasylum.com.sg/">Ayslum</InlineLink>, <InlineLink href="https://www.behance.net/questcequecest">qu’est-ce que c’est design</InlineLink>, <InlineLink href="https://flagandmountains.com/">Flag & Mountains</InlineLink>, <InlineLink href="http://donotdesign.com/v3/">Do Not Design</InlineLink>, <InlineLink href="https://www.gyro.com/">gyro</InlineLink>, <InlineLink href="https://someearlybirds.com/">Some Early Birds</InlineLink>, <InlineLink href="http://wearenotlie.com/">LIE</InlineLink>, <InlineLink href="http://tsubakistudio.net">Tsubaki</InlineLink>, <InlineLink href="http://www.conscious.co.th/">Conscious</InlineLink>,  <InlineLink href="https://farmgroup.co.th/">Farmgroup</InlineLink>, <InlineLink href="https://practical.co.th/">Practical Design Studio</InlineLink>, <InlineLink href="https://www.behance.net/helloiamjk">Jackkrit Anantakul</InlineLink>
        </Paragraph>
      </Box>
      <Box css={{marginTop: 32}}>
        <ProjectInformation 
          code="https://github.com/JulianFurchert/seading" 
          // site="https://seading.vercel.app/" 
          stack={[ 'React', 'Typescript', 'Next.js', 'Framer Motion' ,'Stitches', 'Radix UI' ]}
        />
      </Box>
      <Box css={{marginTop: 40}}>
        <ImagesCase 
          rows={{
            initial: [3,3,3],
            bp1: [2,2,2,2],
          }}
          images={[
            {
              src: '/img/seading/P9100123.jpg',
              width: 4608,
              height: 3456
            },
            {
              src: '/img/seading/IMG_1904.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/IMG_1867.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/IMG_1848.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/IMG_1798.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/IMG_1790.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/IMG_1786.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/IMG_1738.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/DSCF4802.jpg',
              width: 4896,
              height: 3264
            },
          ]}
        />
        <Slideshow 
          images={[
            {
              src: '/img/seading/gallery/IMG_1922.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/gallery/IMG_1836.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/gallery/DSCF4907.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/gallery/DSCF4822.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/gallery/DSCF4779.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/gallery/DSCF4735.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/gallery/DSCF4575.jpg',
              width: 4896,
              height: 3264
            }
          ]}
        />
        <ImagesCase 
          rows={{
            initial: [3,3,3],
            bp1: [2,2,2,2],
          }}
          images={[
            {
              src: '/img/seading/DSCF4789.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/DSCF4765.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/DSCF4753.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/DSCF4741.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/DSCF4737.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/DSCF4699.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/DSCF4692.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/DSCF4631.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/DSCF4582.jpg',
              width: 4896,
              height: 3264
            },
          ]}
        />
        <Slideshow 
          images={[
            {
              src: "/img/seading-poster-1.jpg",
              width: 881,
              height: 1200
            },
            {
              src: "/img/seading-poster-2.jpg",
              width: 881,
              height: 1200
            },
            {
              src: "/img/seading-poster-3.jpg",
              width: 881,
              height: 1200
            },
            {
              src: "/img/seading-poster-4.jpg",
              width: 881,
              height: 1200
            },
            {
              src: "/img/seading-poster-5.jpg",
              width: 881,
              height: 1200
            },
            {
              src: "/img/seading-poster-6.jpg",
              width: 881,
              height: 1200
            }
          ]}
        />
        <ImagesCase 
          rows={{
            initial: [3,4,3,3],
            bp1: [2,2,3,2],
          }}
          images={[
            {
              src: '/img/seading/DSCF4579.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/DSCF4472.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/DSCF4562.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/_DSF3432.jpg',
              width: 3264,
              height: 4896
            },
            {
              src: '/img/seading/_DSF3410.jpg',
              width: 3264,
              height: 4896
            },
            {
              src: '/img/seading/_DSF3404.jpg',
              width: 3264,
              height: 4896
            },
            {
              src: '/img/seading/_DSF3402.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/_DSF3370.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/_DSF3296.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/_DSF3298.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/_DSC0763.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/_DSC0761.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/_DSC0747.jpg',
              width: 4608,
              height: 3072
            },
          ]}
        />
      </Box>
    </Container>
  )
}
