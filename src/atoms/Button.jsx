import styled, { css } from "styled-components";
import { darken } from 'polished';

import {getColors} from "../utils/styling";


const cssForPrimary = ({ theme, primary }) => {
  const backgroundColor = getColors(theme).green;
  const hoverBackgroundColor = darken(0.05, backgroundColor);

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
  if(primary || !secondary){
    return;
  }
  const backgroundColor = getColors(theme).yellow;
  const hoverBackgroundColor = darken(0.05, backgroundColor);
  return css`
    background-color: ${backgroundColor};
    color: ${getColors(theme).black};
    &:hover {
      background-color: ${hoverBackgroundColor};
    }
  `
}


const Button = styled("button")`
  cursor: pointer;
  padding: 12px;
  font-size: 14px;
  width: 100%;
  border: none;
  outline: none;

  ${props => cssForPrimary(props)}
  ${props => cssForSecondary(props)}
`


export default Button;