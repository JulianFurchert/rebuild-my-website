import { Box } from './Box'
import { Link } from './Link'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import { ChevronDown } from 'react-feather'

type Props = {
  links?: {
    name: string,
    url: string
  }[]
  stack?: string[]
}

export const ProjectInformation: React.FC<Props> = ({
  links,
  stack,
}) => {
  return(
    <Box>
      {links && links.map(link => (
        <Link external variant="subtle" css={{marginRight: '$3'}} href={link.url}>
          {link.name}
        </Link>
      ))}
      {stack && (
        <Popover>
          <PopoverTrigger variant="subtle">
            Stack
            <ChevronDown size={18} />
          </PopoverTrigger>
          <PopoverContent>
            {stack.map(item => 
              <Box>{item}</Box>  
            )}
          </PopoverContent>
        </Popover>
      )}
    </Box>
  )
}