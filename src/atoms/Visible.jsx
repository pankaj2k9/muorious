import React from 'react';
import styled, { css } from 'styled-components';
import { mediaQueries } from '../utils/styling';

const sizes = ['xs', 'sm', 'md', 'lg']

const Visible = styled("div")`
  ${({theme, ...otherProps}) => {
    const sizesProps = Object.keys(otherProps).filter(k => sizes.indexOf(k) >= 0);

    return css`
      display: none;
      ${
        sizesProps.map(s => {
          return mediaQueries[s]`display: block;`
        })
      }
    `
  }}
`

export default Visible;


