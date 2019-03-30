import styled from 'styled-components'
import IndexHeroBg from './IndexHeroBg.png'
import { getColors } from "../../utils/styling";

const Section = styled("section")`
    width: 100%;
    position: relative;
    ${ props => props.hero &&
        `height: 696px; background-image: url(${IndexHeroBg}); background-size: cover;`
    }
    ${ props => props.customerLogos && `padding: 40px 0; background-color: ${getColors(props.theme).grey3}`}
`

export default Section