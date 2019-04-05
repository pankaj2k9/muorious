import styled, { css } from 'styled-components'

export default styled.div`
  display: flex;
  width: 100%;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  ${({column}) => 
    column && css`
      flex-direction: column;
    `
  }
  ${({ wrap }) =>
    wrap && css`
      flex-wrap: wrap;
    `}
`
