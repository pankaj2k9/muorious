import styled from 'styled-components'

const Row = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${props => props.customerLogos 
    ? "height: 50px; width: 61%; margin: auto; "
    : "height: 100%;"
    }
`

export default Row