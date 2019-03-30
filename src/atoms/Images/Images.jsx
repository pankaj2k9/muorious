import styled from 'styled-components'
import IndexHeroImg from './IndexHeroImg.png'

const HeroImg = styled("img").attrs({
    src: props => props.src
})`
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 44%;
    bottom: -24px;
`

export { HeroImg }