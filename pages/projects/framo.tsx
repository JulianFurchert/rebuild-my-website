import Framo from '../../projects/framo'
import ProjectLayout from '../../composites/ProjectLayout'

export default function Page() {
  return (
    <ProjectLayout
      title="Framo"
      image="/og-img/og-image-framo.png"
      description='A website was developed and a responsive logo was designed for the London-based architecture firm Framo.'
      text="A website was developed and a responsive logo was designed for the London-based architecture firm Framo. The logo consists of six letters that adapt to the available space depending on the width of the screen. The shape of the letters always changes with the aspect ratio of the screen. To make the logo usable in other media, a web app was developed in which the letters can be freely arranged and scaled. The result can be saved as a vector file. Both website and app are implemented with React. Design and conception of the website are by Mind Design."
      links={[
        { name: 'Site', url: 'https://www.framo.studio/' }
      ]}
      stack={[ 'React', 'Styled Components', 'React Pose', 'Snap.svg', 'Netlify', 'Prismic' ]}
    >
      <Framo />
    </ProjectLayout>
  )
}
