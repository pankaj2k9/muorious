import LogoImg from './MiurosLogo.png'
import LogoImgDark from './MiurosLogoDark.png'
import styled from 'styled-components'

const Logo = styled('img').attrs(({ dark }) => {
  return {
    src: dark ? LogoImgDark : LogoImg,
  }
})`
  width: 116px;
  height: 40px;
`

export default Logo
