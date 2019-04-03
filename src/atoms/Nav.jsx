import styled, { css } from 'styled-components'
import { getColors, mediaQueries } from '../utils/styling'

const handleBackgroundColor = ({ theme, dark, light, transparent }) => {
  if (light) {
    return getColors(theme).white
  }
  if (transparent) {
    return 'transparent'
  }
  return getColors(theme).green
}

const Nav = styled('nav')`
  position: ${({ position }) => (position ? position : 'fixed')};
  width: 100%;
  z-index: 10;
  background-color: ${handleBackgroundColor};
  & > div {
    height: 72px;
    ${mediaQueries.sm`
            height: 76px;
        `};
  }
`

export default Nav
