import styled from 'styled-components'

const HeroImg = styled("img").attrs(props => ({
    src: props.src
}))`
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 44%;
    bottom: -24px;
    z-index: 1;
`

const CustomerLogo = styled("img").attrs(props => ({
    src: props.src
}))`
    margin: 0;
    opacity: 0.4;
    max-width: 100%;
`
const SideImg = styled("img").attrs(props => ({
    src: props.src
}))`
    display: block;
    max-width: 75%;
`
export { HeroImg, CustomerLogo, SideImg }