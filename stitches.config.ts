import { createStyled } from '@stitches/react'

export const lightThemeColors = {
  $primary: '#007aff',
  $loContrast: '#FCFCFD',
  $hiContrast: '#17171A',
  $gray1: '#F0F2F5',
  $gray2: '#E2E6E9',
  $gray3: '#E2E6E9',
  $gray4: '#B3B6BB',
  $gray5: '#999CA2',
  $gray6: '#7F8288',
  $gray7: '#4F5156',
  $gray8: '#17171A',
}

export const darkThemeColors = {
  $primary: '#007aff',
  $loContrast: '#141517',
  $hiContrast: '#F0F2F5',
  $gray1: '#212123',
  $gray2: '#4F5156',
  $gray3: '#7F8288',
  $gray4: '#999CA2',
  $gray5: '#B3B6BB',
  $gray6: '#D0D1D4',
  $gray7: '#EDEDED',
  $gray8: '#F0F2F5',
}

const theme = {
  colors: lightThemeColors,
  space: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
  },
  sizes: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
  },
  fontSizes: {
    $1: '12px',
    $2: '13px',
    $3: '15px',
    $4: '17px',
    $5: '19px',
    $6: '21px',
    $7: '43px',
  },
  fonts: {
    $body: '"Inter",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
    $monospace: '"SFMono-Regular","Consolas","Liberation Mono","Menlo",monospace',
  },
  fontWeights: {
    $body: '400',
    $heading: '600',
  },
  shadows:{
    $smallest: '0px 4px 8px rgba(0,0,0,0.12)',
    $small: '0 5px 10px rgba(0,0,0,0.12)',
    $medium: '0 8px 30px rgba(0,0,0,0.12)',
    $large: '0 30px 60px rgba(0,0,0,0.12)',
  }
}

export const { styled, css } = createStyled({
  tokens: theme,
  utils: {
    marginX: () => (
      value: keyof typeof theme['space'] | (string & {})
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: () => (
      value: keyof typeof theme['space'] | (string & {})
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: () => (
      value: keyof typeof theme['space'] | (string & {})
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: () => (
      value: keyof typeof theme['space'] | (string & {})
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  breakpoints: {
    bp1: (rule) => `@media (min-width: 520px) { ${rule} }`,
    bp2: (rule) => `@media (min-width: 900px) { ${rule} }`,
  },
})

export const darkTheme= css.theme({
  colors: darkThemeColors
})

css.global({
  body: { 
    backgroundColor: '$loContrast',
    color: '$hiContrast',
    fontFamily: '$body',
  },
});