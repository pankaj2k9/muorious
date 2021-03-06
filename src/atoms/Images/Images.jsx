import styled from 'styled-components'
import { mediaQueries, maxMediaQueries } from '../../utils/styling'

const IndexHeroImg = styled('img').attrs(props => ({
  src: props.src,
}))`
  display: block;
  position: absolute;
  right: 0;
  @media (min-width: 1440px) {
    left: calc(50% + 50px);
    top: 70px;
    max-width: 100%;
  }
  bottom: 0;
  z-index: 1;
  display: block;
  position: absolute;
  top: 70px;
  max-width: 100%;
  height: calc(100% - 70px);
`

const AssistSideImg = styled('img').attrs(props => ({
  src: props.src,
}))`
  position: absolute;
  left: 0;
`

const IndexCustomerLogo = styled('img').attrs(props => ({
  src: props.src,
}))`
  margin: 0;
  height: 35px;
  width: 100%;
  opacity: 0.4;
  max-width: 100%;
  transition: transform 0.3s;
  filter: grayscale(100%);
  &:hover {
    transform: scale(1.2);
    opacity: 1;
    filter: grayscale(0%);
  }
  ${maxMediaQueries.sm`
     max-width: 86px;
  `};
`
const IndexSideImg = styled('img').attrs(props => ({
  src: props.src,
}))`
  display: block;
  max-width: 75%;
  margin: auto;
  transform: translateY(10px);
  ${maxMediaQueries.sm`
     max-width: 100%;
     margin-bottom:30px;
  `};
`
export {
  IndexHeroImg,
  IndexCustomerLogo,
  IndexSideImg,
  // AssistHeroImg,
  AssistSideImg,
}
