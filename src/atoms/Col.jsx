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
        return css`
            flex:1;
            height: 50%;
            button {
                width: 200px;
            }
        `
    }
}

const Col = styled("div")`
    display: flex;
    flex-direction: column;
    height: auto;

    ${props => styleForNavLeft(props)}
    ${props => styleForNavRight(props)}
    ${props => styleForEqualCols(props)}
    justify-content: ${({ center, justifyContent }) => justifyContent ? justifyContent : (center ? 'center' : 'space-between')};
    ${props => props.benefit &&
        "width: 50%; div { margin: auto; width: 58%; padding: 30px 0;}"
    }
    ${props => props.bgi &&
        `background-image: url(${props.bgi}); background-size: cover; background-repeat: no-repeat;`
    }

`

export default Col