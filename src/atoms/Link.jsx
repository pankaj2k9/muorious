import styled from 'styled-components'
import { getColors } from '../utils/styling'

const allColors = ({ theme }) => {
  return getColors(theme)
}

const Link = styled('button')`
  color: ${props => allColors(props).white};
  font-size: 18px;
`

export default Link
