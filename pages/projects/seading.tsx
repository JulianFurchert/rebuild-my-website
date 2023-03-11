import { Fragment } from 'react'
import { Paragraph, InlineLink } from '../../components'
import Seading from '../../projects/seading'
import ProjectLayout from '../../composites/ProjectLayout'

export default function Page() {
  return (
    <ProjectLayout
      title="Seading"
      image="/og-img/og-image-seading.png"
      imageTwitter="/og-img/twitter-image-seading.png"
      description="Seading is the memory of a lovely design journey."
      text={(
        <Fragment>
          <Paragraph>
            Seading is the memory of a lovely design journey. While traveling through Southeast Asia, <InlineLink href="https://evejazmati.com/">Eve Jazmati</InlineLink> and I made a decision to visit the very first Interior Design School in Yangon, the former capital of Myanmar. Our curiosity drove us to learn about their teaching methods and curriculum, and how they differed from our own design classes in Düsseldorf. What ensued was an exhilarating exchange of ideas and creativity from both sides, leaving us feeling inspired and fulfilled. And thus, our design journey began.
          </Paragraph>
          <Paragraph>
            For this incredible experience we thank all the studios and designers who have welcomed us so kindly: <InlineLink href="#">Interiordesign-Schule Myanmar</InlineLink>, <InlineLink href="https://somewhere-else.co/">Somewhere Else</InlineLink>, <InlineLink href="https://factory1611.com/">Factory 1611</InlineLink>, <InlineLink href="http://theasylum.com.sg/">Ayslum</InlineLink>, <InlineLink href="https://www.behance.net/questcequecest">qu’est-ce que c’est design</InlineLink>, <InlineLink href="https://flagandmountains.com/">Flag & Mountains</InlineLink>, <InlineLink href="http://donotdesign.com/v3/">Do Not Design</InlineLink>, <InlineLink href="https://www.gyro.com/">gyro</InlineLink>, <InlineLink href="https://someearlybirds.com/">Some Early Birds</InlineLink>, <InlineLink href="http://wearenotlie.com/">LIE</InlineLink>, <InlineLink href="http://tsubakistudio.net">Tsubaki</InlineLink>, <InlineLink href="http://www.conscious.co.th/">Conscious</InlineLink>,  <InlineLink href="https://farmgroup.co.th/">Farmgroup</InlineLink>, <InlineLink href="https://practical.co.th/">Practical Design Studio</InlineLink>, <InlineLink href="https://www.behance.net/helloiamjk">Jackkrit Anantakul</InlineLink>
          </Paragraph>
        </Fragment>
      )}
    >
      <Seading />
    </ProjectLayout>
  )
}
