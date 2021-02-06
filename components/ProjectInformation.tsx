import { Box } from './Box'
import { Link } from './Link'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import { ChevronDown } from 'react-feather'

type Props = {
  site?: string,
  siteName?: string,
  code?: string,
  docs?: string,
  stack?: string[]
}

export const ProjectInformation: React.FC<Props> = ({
  site,
  siteName,
  code,
  docs,
  stack,
}) => {
  return(
    <Box>
      {site && (
        <Link external variant="subtle" css={{marginRight: '$3'}} href={site}>
          {siteName ? siteName : 'Site'}
        </Link>
      )}
      {code && (
        <Link external variant="subtle" css={{ marginRight: '$3' }} href={code}>
          Code
        </Link>
      )}
      {docs && (
        <Link external variant="subtle" css={{marginRight: '$3'}} href={docs}>
          Docs
        </Link>
      )}
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