import styled from 'styled-components'

const Row = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${props => props.customerLogos
        ? "height: 50px; width: 100%; max-width: 1070px; margin: auto; padding: 0 15px;"
        : `height: ${({ autoHeight }) => autoHeight ? 'auto' : '100%'};`
    }
`

export default Row