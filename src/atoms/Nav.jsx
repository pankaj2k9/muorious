import styled from 'styled-components'

const Nav = styled("nav")`
    position: ${({ position }) => position ? position : 'fixed'};
    width: 100%;
    z-index: 10;
    background-color: ${({ dark, light }) => dark ? '#174F49' : (light ? '#fff' : 'transparent')};
    & > div {
        height: ${({ small }) => small ? '72px' : '96px'};
    }
`

export default Nav