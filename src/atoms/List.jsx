import styled, { css } from 'styled-components'
import { getColors } from "../utils/styling";

const cssForNavFlex = ({ theme, flex }) => { 
    if (flex) {
        return css`
            display: flex;
            flex-direction: row;    
            justify-content: space-between;
            align-items: center;
            width: 70%;
        ` 
    }
}

const List = styled("ul")`
    list-style-type: none;
    margin: 0;
    ${props => cssForNavFlex(props)}
`

const cssForNavLink = ({ theme, nav }) => {
    if (nav) {
        return css`
            a {
                color: ${getColors(theme).white};
                font-size: 18px;
            }
        `
    }
}

const ListItem = styled("li")`
    ${props => cssForNavLink(props)}
`

export { List, ListItem }