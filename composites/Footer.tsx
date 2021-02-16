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
      <Flex 
        css={{ 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: 100,
          bp1: {
            height: 80,
          }
        }}
      >
        <Flex>
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
        <Link 
          external={true} 
          href="https://github.com/JulianFurchert/rebuild-my-website"
        >
          View Source
        </Link>
      </Flex>
    </Container>
  </Wrappper>
)

const Wrappper = styled('div', {
  backgroundColor: '$gray1'
})