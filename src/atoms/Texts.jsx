import styled from 'styled-components'
import css from 'styled-components'
import { getColors, mediaQueries, maxMediaQueries } from '../utils/styling'

const rightColor = ({ theme, color }) => {
  return getColors(theme)[color]
}

const H1 = styled('h1')`
  font-size: 42px;
  font-weight: ${({ bold }) => (bold ? '6' : '4')}00;
  color: ${props => rightColor(props)};
  line-height: 64px;
  ${props => props.center && 'text-align: center;'} ${({ small }) =>
    small
      ? `
    font-size: 24px;
    line-height: 32px;
  `
      : ''};
  ${maxMediaQueries.sm`
    font-size: 24px;
  `};
`

const H2 = styled('h2')`
  font-size: 35px;
  line-height: 1.3;
  color: ${props => rightColor(props)};
  font-weight: 400;
  ${maxMediaQueries.sm`
  font-size: 24px;
  `};
  ${props => props.center && 'text-align: center;'};
`

const H3 = styled('h3')`
  font-size: 36px;
  line-height: 1.3;
  color: ${props => rightColor(props)};
  ${props => props.center && 'text-align: center;'} font-weight: 400;
  ${maxMediaQueries.sm`
  font-size: 24px;
  `};
`

const H3DIFF = styled('h3')`
  font-size: 36px;
  font-weight: 400;
  line-height: 1.3;
  color: ${props => rightColor(props)};
  ${props => props.center && 'text-align: center;'} @media(max-width: 992px) {
    font-size: 24px;
    margin: 20px 0px;
  }
`

const H4 = styled('h4')`
  font-size: 22px;
  line-height: 1.3;
  font-weight: 400;
  color: ${props => rightColor(props)};
  ${props => props.center && 'text-align: center;'};
  ${maxMediaQueries.sm`
  font-size: 24px;
  `};
`

const H5 = styled('h5')`
  font-size: 16px;
  ${props => props.center && 'text-align: center;'};
  ${maxMediaQueries.sm`
  font-size: 16px;
  `};
`

const H6 = styled('h6')`
  font-size: 14px;
  ${props => props.center && 'text-align: center;'};
  ${maxMediaQueries.sm`
  font-size: 14px;
  `};
`

const TextBig = styled('p')`
  font-size: 16px;
  line-height: 32px;
  color: ${props => rightColor(props)}
    ${props => props.center && 'text-align: center;'};
  ${maxMediaQueries.sm`
    margin-bottom:20px;
  `};
`
const TextHighlighter = styled('span')`
  font-weight: 700;
  color: ${props => rightColor(props)};
`

const Text = styled('p')`
  font-size: 16px;
`

const TextSmall = styled('p')`
  font-size: 14px;
`

const TextXSmall = styled('p')`
  font-size: 18px;
  color: ${props => rightColor(props)};
`

export {
  H1,
  H2,
  H3,
  H3DIFF,
  H4,
  H5,
  H6,
  TextBig,
  TextHighlighter,
  Text,
  TextSmall,
  TextXSmall,
}
