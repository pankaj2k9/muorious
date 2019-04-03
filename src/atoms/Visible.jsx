import React from 'react'
import styled, { css } from 'styled-components'
import { maxMediaQueries } from '../utils/styling'

const sizes = ['xs', 'sm', 'md', 'lg']

const Visible = styled('div')`
  ${({ theme, ...otherProps }) => {
    const sizesProps = Object.keys(otherProps).filter(
      k => sizes.indexOf(k) >= 0
    )

    return css`
      ${sizesProps.map(s => {
        return maxMediaQueries[s]`display: none;`
      })};
    `
  }};
`

export default Visible
