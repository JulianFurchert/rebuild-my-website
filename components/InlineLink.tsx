import { styled,  } from '../stitches.config'

type InlineLink = {
  href?: string,
  variant?: 'blue'
}

export const InlineLink: React.FC<InlineLink> = ({ children, ...props }) => {
  return(
    <Link target="_blank" {...props}>
      {children}
    </Link>
  )
}

type LinkProps = React.ComponentProps<typeof Link>

export const Link = styled('a', {
  fontFamily: 'inherit',
  color: 'inherit',
  lineHeight: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  textDecoration: 'none',
  '&:hover':{
    color: '$primary',
  },
  variants: {
    variant: {
      'blue': {
        color: '$primary',
        '&:hover':{
          textDecoration: 'underline',
        },
      }
    }
  }
})