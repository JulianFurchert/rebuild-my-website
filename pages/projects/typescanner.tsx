import Typescanner from '../../projects/typescanner.tsx'
import ProjectLayout from '../../composites/ProjectLayout'

export default function Page() {
  return (
    <ProjectLayout
      title="Typescanner"
      description="TypeScanner is a web application that can generate fonts based on 96 different grids."
      text="TypeScanner is a web application that can generate fonts based on 96 different grids. The result can be modified by three parameters. The selection of the raster, its position and its scaling. The resulting glyph shapes range from readable characters to abstract shapes. Thanks to opentype.js the fonts can be exported directly in OTF format. TypeScanner is implemented with React. The grids are taken from the book 'Grid Index' by Carsten Nicolai and were prepared in several steps."
      links={[
        { name: 'Site', url: 'https://typescanner.com/' },
        { name: 'Code', url: 'https://github.com/JulianFurchert/typeScanner/' },
      ]}
      stack={[ 'React', 'Opentype.js', 'Paper.js', 'Snap.svg', 'Netlify' ]}
    >
      <Typescanner />
    </ProjectLayout>
  )
}
