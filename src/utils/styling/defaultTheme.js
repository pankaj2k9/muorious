const customConf = {
  mediaQuery: 'only screen',
  columns: {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12,
    xl: 12,
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  container: {
    xs: 'full', // 'full' = max-width: 100%
    sm: 'full', // 'full' = max-width: 100%
    md: 'full', // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90, // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120, // 1920px
  },
}

const theme = {
  colors: {
    green: "#1B5E57",
    yellow: "#FFC509",
    pink1: "#F9A0B4",
    pink2: "#FF3A66",
    black: "#0D0D0D",
    grey1: "#DEDEDE",
    grey2: "#F2F2F2",
    grey3: "#F9F9F9",
    grey4: "#606060",
    red: "#EB1212",
    white: "#FFFFFF",
  },
  awesomegrid: customConf
};

export default theme;
