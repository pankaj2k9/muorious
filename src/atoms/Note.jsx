import styled from 'styled-components'
import { getColors } from "../utils/styling";

const Note = styled("span")`
    width: 119px;
    line-height: 32px;
    display: inline-block;
    text-align: center;
    color: ${props => getColors(props.theme).pink2};
    font-size: 14px;
    background-color: ${props => getColors(props.theme).pink2}19;
    transform: translate(19px, -7px);
`

export default Note