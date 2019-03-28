import styled, { css } from "styled-components";
import {getColors} from "../utils/styling";


const cssForPrimary = ({ theme, primary }) => {
  if(!primary){
    return;
  }
  return css`
    background-color: ${getColors(theme).green};
    color: ${getColors(theme).white};
  `
}


const Button = styled("button")`
  ${props => cssForPrimary(props)}
`


export default Button;