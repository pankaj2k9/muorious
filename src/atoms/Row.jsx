import styled, { css } from 'styled-components'

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${({ customerLogos, autoHeight }) =>
    customerLogos
      ? 'height: 50px; width: 100%; max-width: 1070px; margin: auto; padding: 0 15px;'
      : autoHeight
        ? css`
            height: auto;
          `
        : css`
            height: 100%;
          `};
  ${props =>
    props.center &&
    css`
      width: 100%;
      justify-content:center;
      @media (max-width: 992px) {

        }
      }
    `};
`

export default Row
