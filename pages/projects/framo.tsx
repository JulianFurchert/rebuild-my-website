import Framo from '../../projects/framo'
import ProjectLayout from '../../composites/ProjectLayout'

export default function Page() {
  return (
    <ProjectLayout
      title="Framo"
      image="/og-img/og-image-framo.png"
      imageTwitter="/og-img/twitter-image-framo.png"
      description='Website and logo for Framo, an architectural practice based in East London. '
      text="Website and logo for Framo, an architectural practice based in East London. The logo contains six letters. The shape of the letters is dynamic and adapts to the aspect ratio of the available space on the screen. A web tool was developed to make the logo also usable in other media. The result can be saved as a vector file. Website and development of the responsive logo was done in cooperation with Mind Design."
      links={[
        { name: 'Site', url: 'https://www.framo.studio/' },
        { name: 'Tool', url: 'https://framo-playground.netlify.app/' }
      ]}
      stack={[ 'React', 'Styled Components', 'React Pose', 'Snap.svg', 'Netlify', 'Prismic' ]}
    >
      <Framo />
    </ProjectLayout>
  )
}
