import styled, { css } from 'styled-components'


const styleForNavLeft = ({ theme, NavLeft }) => {
    if (NavLeft) {
        return css`
            width: 41%;
            flex-direction: row;
            align-items: center;
        `
    }
}

const styleForNavRight = ({ theme, NavRight }) => {
    if (NavRight) {
        return css`
            width: 25%;
            flex-direction: row;
            align-items: center;
            button {
                width: 72%;
            }
        `
    }
}

const styleForEqualCols = ({ theme, equal }) => {
    if (equal) {
        return css `
            flex:1;
            height: 50%;
            button {
                width: 36%;
            }
        `
    }
}

const Col = styled("div")`
    display: flex;
    flex-direction: column;
    height: 100%;

    ${props => styleForNavLeft(props)}
    ${props => styleForNavRight(props)}
    ${props => styleForEqualCols(props)}
    ${props => props.center 
    ? "justify-content: center;"
    : "justify-content: space-between;"
    }
`

export default Col