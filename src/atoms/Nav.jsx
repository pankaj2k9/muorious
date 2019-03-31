import styled from 'styled-components'
import { getColors } from "../utils/styling";

const Nav = styled("nav")`
    position: absolute;
    width: 100%;
    z-index: 10;
    ${props => props.props.isGreen
        //whoops
        ? `background-color: ${getColors(props.theme).green};`
        : "background-color: transparent;"
    }
    div {
        height: 96px;
    }
`

export default Nav