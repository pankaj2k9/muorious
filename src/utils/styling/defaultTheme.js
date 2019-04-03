const flexboxgrid = {
  // Defaults
  gridSize: 12, // columns
  gutterWidth: 1, // rem
  // outerMargin: 2, // rem
  mediaQuery: 'only screen',
  container: {
    sm: 46, // rem
    md: 61, // rem
    lg: 76, // rem
  },
  breakpoints: {
    xs: 0, // em
    sm: 48, // em
    md: 64, // em
    lg: 75, // em
  },
}

const theme = {
  colors: {
    green: '#1B5E57',
    yellow: '#FFC509',
    pink1: '#F9A0B4',
    pink2: '#FF3A66',
    black: '#0D0D0D',
    grey1: '#DEDEDE',
    grey2: '#F2F2F2',
    grey3: '#F9F9F9',
    grey4: '#606060',
    red: '#EB1212',
    white: '#FFFFFF',
  },
  flexboxgrid: flexboxgrid,
}

export default theme
