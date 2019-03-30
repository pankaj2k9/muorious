import styled from "styled-components";
import css from "styled-components"
import { getColors } from "../utils/styling";

const rightColor = ({ theme, color }) => {
    return getColors(theme)[color]
}

const H1 = styled("h2")`
  font-size: 48px;
  font-weight: 400;
  color: ${props => rightColor(props)};
`

const H2 = styled("h3")`
  font-size: 40px;
`

const H3 = styled("h4")`
  font-size: 32px;
`

const H4 = styled("h5")`
  font-size: 24px;
  font-weight: 400;
  color: ${props => rightColor(props)};
`

const H5 = styled("h6")`
  font-size: 16px;
`

const H6 = styled("h1")`
  font-size: 14px;
`

const TextBig = styled("p")`
  font-size: 18px;
`

const Text = styled("p")`
  font-size: 16px;
`

const TextSmall = styled("p")`
  font-size: 14px;
`

const TextXSmall= styled("p")`
  font-size: 18px;
`

export { H1, H2, H3, H4, H5, H6, TextBig, Text, TextSmall, TextXSmall };