import Prettypaper from '../../projects/prettypaper'
import ProjectLayout from '../../composites/ProjectLayout'

export default function Page() {
  return (
    <ProjectLayout
      title="Pretty Paper"
      image="/og-img/og-image-pretty-paper.png"
      imageTwitter="/og-img/twitter-image-pretty-paper.png"
      description='Pretty Paper is a Gatsby Starter for creating style guides, documentations, or design systems.'
      text="Pretty Paper is a Gatsby Starter for creating style guides, documentations, or design systems. With Pretty Paper, you can easily write your documentation using Markdown. To simplify the writing of Design Specification, the Markdown synatx has been extended with special code blocks. This allows you to quickly define colors, fonts, text styles, or add videos and lottie animations to your documentation."
      links={[
        { name: 'Site', url: 'https://pretty-paper.netlify.app/' },
        { name: 'Code', url: 'https://github.com/JulianFurchert/gatsby-starter-prettypaper' },
      ]}
      stack={[ 'React', 'Gatsby.js', 'Sass', 'CSS Modules', 'Markdown' ]}
    >
      <Prettypaper />
    </ProjectLayout>
  )
}
