import styled from 'styled-components'
import { mediaQueries } from '../utils/styling';

const Nav = styled("nav")`
    position: ${({ position }) => position ? position : 'fixed'};
    width: 100%;
    z-index: 10;
    background-color: ${({ dark, light }) => dark ? '#174F49' : (light ? '#fff' : 'transparent')};
    & > div {
        height: 72px;
        ${mediaQueries.sm`
            height: 96px;
        `}
    }


`

export default Nav