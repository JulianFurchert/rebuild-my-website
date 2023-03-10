import { Fragment } from 'react'
import { Paragraph, InlineLink } from '../../components'
import Seading from '../../projects/seading'
import ProjectLayout from '../../composites/ProjectLayout'

export default function Page() {
  return (
    <ProjectLayout
      title="Seading"
      description="During our journey through Southeast Asia, Eve Jazmati and I decided to visit the first ever Interior Design School in the former capital city of Myanmar Yangon. "
      text={(
        <Fragment>
          <Paragraph>
            During our journey through Southeast Asia, <InlineLink href="https://evejazmati.com/">Eve Jazmati</InlineLink> and I decided to visit the first ever Interior Design School in the former capital city of Myanmar Yangon. We we‘re curious to find out what was taught there and how, is it different to our design classes in Düsseldorf. What happened was an exciting exchange of information and creativity from both sides. It was amazing and fulfilling. We wanted more! Why not discover, document and talk to more people. That moment was the birth of Seading!
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
