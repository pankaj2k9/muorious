import styled from 'styled-components'

const IndexHeroImg = styled("img").attrs(props => ({	
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

const AssistSideImg = styled("img").attrs(props => ({
    src: props.src
}))`
    position: absolute;
    left: 0;
`

const IndexCustomerLogo = styled("img").attrs(props => ({
    src: props.src
}))`
    margin: 0;
    height: 21px;
    width: auto;    
    opacity: 0.4;
    max-width: 100%;
    transition: transform .3s;
    filter: grayscale(100%);
    &:hover {
        transform: scale(1.2);
        opacity: 1;
        filter: grayscale(0%);
    }
`
const IndexSideImg = styled("img").attrs(props => ({
    src: props.src
}))`
    display: block;
    max-width: 75%;
    margin: auto;
`
export { IndexHeroImg, IndexCustomerLogo, IndexSideImg, AssistHeroImg, AssistSideImg }