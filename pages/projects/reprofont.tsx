import Reprofont from '../../projects/reprofont'
import ProjectLayout from '../../composites/ProjectLayout'

export default function Page() {
  return (
    <ProjectLayout
      title="Repro Font"
      image="/og-img/og-image-repro.png"
      description="The idea for the Repro font family was born while working in Cinema4D."
      text="The idea for the Repro font family was born while working in Cinema4D. In Cinema4D text paths and splines are divided into straight lines during post-processing. Different interpolation methods are available to calculate the intermediate points. This means that the shape of a letter is determined by the selection of the font as well as by the selection and settings of the interpolation method. This fact inspired me to write my own method for recalculating the glyphs. The method creates intermediate points along the paths and moves them to a virtual orthogonal grid. The glyphs of the Repro 100 are used as a starting point, and the grid becomes coarser and coarser from typeface to typeface (Repro 200-600) until the resulting characters are no longer readable."
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
