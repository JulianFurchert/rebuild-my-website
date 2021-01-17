import { createStyled } from '@stitches/react'

export const colors = {
  $light_primary: '#007aff',
  $light_loContrast: '#FCFCFD',
  $light_hiContrast: '#17171A',
  $light_gray1: '#F0F2F5',
  $light_gray2: '#E2E6E9',
  $light_gray3: '#E2E6E9',
  $light_gray4: '#B3B6BB',
  $light_gray5: '#999CA2',
  $light_gray6: '#7F8288',
  $light_gray7: '#4F5156',
  $light_gray8: '#17171A',
  // dark
  $dark_primary: '#007aff',
  $dark_loContrast: '#141517',
  $dark_hiContrast: '#F0F2F5',
  $dark_gray1: '#212123',
  $dark_gray2: '#4F5156',
  $dark_gray3: '#7F8288',
  $dark_gray4: '#999CA2',
  $dark_gray5: '#B3B6BB',
  $dark_gray6: '#D0D1D4',
  $dark_gray7: '#EDEDED',
  $dark_gray8: '#F0F2F5',
}

const theme = {
  colors: {
    ...colors,
    $primary: colors.$light_primary,
    $loContrast: colors.$light_loContrast,
    $hiContrast: colors.$light_hiContrast,
    $gray1: colors.$light_gray1,
    $gray2: colors.$light_gray2,
    $gray3: colors.$light_gray3,
    $gray4: colors.$light_gray4,
    $gray5: colors.$light_gray5,
    $gray6: colors.$light_gray6,
    $gray7: colors.$light_gray7,
    $gray8: colors.$light_gray8,
  },
  space: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
    $7: '50px',
  },
  sizes: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
    $7: '50px',
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
  colors: {
    ...colors,
    $primary: colors.$dark_primary,
    $loContrast: colors.$dark_loContrast,
    $hiContrast: colors.$dark_hiContrast,
    $gray1: colors.$dark_gray1,
    $gray2: colors.$dark_gray2,
    $gray3: colors.$dark_gray3,
    $gray4: colors.$dark_gray4,
    $gray5: colors.$dark_gray5,
    $gray6: colors.$dark_gray6,
    $gray7: colors.$dark_gray7,
    $gray8: colors.$dark_gray8,
  },
})

css.global({
  body: { 
    backgroundColor: '$loContrast',
    color: '$hiContrast',
    fontFamily: '$body',
  },
});