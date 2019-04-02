import theme from './defaultTheme';
import { css } from 'styled-components';


const breakpoints = theme.flexboxgrid.breakpoints;
// Iterate through the sizes and create a media template
const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media;