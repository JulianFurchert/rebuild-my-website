  
import { useState, useEffect } from 'react'

type defaultOptions = {
  defaultIndex?: number
}

const defautBreakpoints = ['520px', '900px']

export const useBreakpointIndex = (
    options: defaultOptions = {}, 
    breakpoints = defautBreakpoints
  ) => {
  // const theme = useTheme()
  const { defaultIndex = 0 } = options
  const [value, setValue] = useState(defaultIndex)
  
  useEffect(() => {
    const getIndex = () => breakpoints.filter(
      (bp) => window.matchMedia(`screen and (min-width: ${bp})`).matches
    ).length

    const onResize = () => {
      const newValue = getIndex()
      if (value !== newValue) {
        setValue(newValue)
      }
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [breakpoints, value])

  return value
}