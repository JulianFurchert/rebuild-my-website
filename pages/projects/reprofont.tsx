import Reprofont from '../../projects/reprofont'
import ProjectLayout from '../../composites/ProjectLayout'

export default function Page() {
  return (
    <ProjectLayout
      title="Repro Font"
      image="/og-img/og-image-repro.png"
      imageTwitter="/og-img/twitter-image-repro.png"
      description="The Repro typeface is made up of seven weights, of which five were created using an algorithm."
      text="The Repro typeface is made up of seven weights, of which five were created using an algorithm. The idea for the project was born while working in Cinema4D, where text paths and splines are recalculated for export. There are several interpolation methods available that influence the appearance of the exported glyphs. This inspired me to develop my own method for recalculating glyphs. The method creates intermediate points along the paths and moves them onto a virtual orthogonal grid. Repro Null serves as the base for the other font weights. The grid becomes coarser from weight to weight until the resulting characters are no longer readable."
      links={[
        { name: 'Site', url: 'https://reprofont.de/' },
        { name: 'Code', url: 'https://github.com/JulianFurchert/reprofont-website' },
      ]}
      stack={[ 'React', 'Redux', 'Anime.js', 'Processing' ]}
    >
      <Reprofont />
    </ProjectLayout>
  )
}
