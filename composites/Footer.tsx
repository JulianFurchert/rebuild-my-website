import { styled } from '../stitches.config'
import { Link, Flex, Container } from '../components'

const data = [
  {label: 'E-Mail', href: 'mailto:mail@julianfurchert.com'},
  {label: 'Github', href: 'https://github.com/JulianFurchert'},
  {label: 'Twitter', href: 'https://twitter.com/JFurchert'},
]

export const Footer: React.FC = () => (
  <Wrappper>
    <Container>
      <Flex css={{alignItems: 'center', height: 100}}>
        {data.map(entry => (
          <Link 
            key={entry.href}
            external={true} 
            href={entry.href} 
            css={{marginRight: '$3'}} 
          >
            {entry.label}
          </Link>
        ))}
      </Flex>
    </Container>
  </Wrappper>
)

const Wrappper = styled('div', {
  backgroundColor: '$gray1'
})