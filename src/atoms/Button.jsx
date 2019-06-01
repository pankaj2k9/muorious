import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { getColors } from '../utils/styling'
import { mediaQueries, maxMediaQueries } from '../utils/styling'

const cssForPrimary = ({ theme, primary }) => {
  const backgroundColor = getColors(theme).green
  const hoverBackgroundColor = darken(0.05, backgroundColor)

  return css`
    background-color: ${backgroundColor};
    color: ${getColors(theme).white};
    &:hover {
      background-color: ${hoverBackgroundColor};
    }
  `
}

const cssForSecondary = ({ theme, primary, secondary }) => {
  //If primary is set to true it will override secondary prop
  if (primary || !secondary) {
    return
  }
  const backgroundColor = getColors(theme).yellow
  const hoverBackgroundColor = darken(0.05, backgroundColor)
  return css`
    background-color: ${backgroundColor};
    color: ${getColors(theme).black};
    &:hover {
      background-color: ${hoverBackgroundColor};
    }
  `
}
const cssForLight = ({ theme, primary, secondary, light }) => {
  //If primary is set to true it will override secondary prop
  if (primary || secondary) {
    return
  }
  const backgroundColor = '#E8EDED'
  const hoverBackgroundColor = darken(0.05, backgroundColor)
  return css`
    background-color: ${backgroundColor};
    color: #174f49;
    &:hover {
      background-color: ${hoverBackgroundColor};
    }
  `
}

const Button = styled('button')`
  cursor: pointer;
  padding: 12px;
  font-size: 14px;
  width: 200px;
  height: 50px;
  ${({ fluid }) =>
    fluid
      ? css`
          width: 100%;
        `
      : null}
  border: none;
  outline: none;
  font-family: Modern Era;
  font-weight: 500;

  ${props => cssForPrimary(props)}
  ${props => cssForSecondary(props)}
  ${props => cssForLight(props)}
`
const TopButton = styled('button')`
  cursor: pointer;
  padding: ${({ assistRequestBtn }) =>
    assistRequestBtn ? '12px 30px' : '12px'};
  font-size: 14px;
  width:  ${({ assistRequestBtn }) => (assistRequestBtn ? 'auto' : '100%')};
  height: 50px;
  ${({ fluid }) =>
    fluid
      ? css`
          width: 100%;
        `
      : null}
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  ${props => cssForPrimary(props)}
  ${props => cssForSecondary(props)}
  ${props => cssForLight(props)}
`

const MobileButton = styled('button')`
  cursor: pointer;
  padding: 12px;
  font-size: 14px;
  width: 200px;
  height: 50px;
  ${({ fluid }) =>
    fluid
      ? css`
          width: 100%;
        `
      : null}
  border: none;
  outline: none;
  font-family: Modern Era;
  font-weight: 500;

  ${props => cssForPrimary(props)}
  ${props => cssForSecondary(props)}
  ${props => cssForLight(props)}
  ${maxMediaQueries.sm`
     width:  100%;
     background: #1B5E57;
     mix-blend-mode: normal;
     border: 1px solid #000000;
     color:#fff;
  `};
`
export { MobileButton, TopButton }
export default Button
