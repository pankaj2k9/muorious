import LogoImg from './MiurosLogo.png'
import LogoImgDark from './MiurosLogoDark.png'
import styled from "styled-components";

const Logo = styled("img").attrs({
    src: ({ dark }) => dark ? LogoImgDark : LogoImg
})`
    width: 116px;
    height: 40px;
`

export default Logo