import styled, { css } from 'styled-components'

const styleForNavLeft = ({ theme, NavLeft }) => {
  if (NavLeft) {
    return css`
      width: 41%;
      flex-direction: row;
      align-items: center;
    `
  }
}

const styleForNavRight = ({ theme, NavRight }) => {
  if (NavRight) {
    return css`
      width: 25%;
      flex-direction: row;
      align-items: center;
    `
  }
}

const styleForEqualCols = ({ theme, equal }) => {
  if (equal) {
    return css`
      flex: 1;
      height: 50%;
      button {
        width: 200px;
      }
    `
  }
}

const Col = styled('div')`
    display: flex;
    flex-direction: column;
    height: auto;

    ${props => styleForNavLeft(props)}
    ${props => styleForNavRight(props)}
    ${props => styleForEqualCols(props)}
    justify-content: ${({ center, justifyContent }) =>
      justifyContent ? justifyContent : center ? 'center' : 'space-between'};
    ${({ benefitImg }) =>
      benefitImg && 'position: absolute; height: 100%; right: 50%;'}  
    ${({ insightsBenefits }) =>
      insightsBenefits &&
      css`
        justify-content: center;
        width: calc(50% - 80px);
        min-height: 840px;
        @media (max-width: 992px) {
          width: 100%;
          min-height: auto;
        }
      `}  
    ${({ insightsBenefitsImg }) =>
      insightsBenefitsImg &&
      css`
        position: absolute;
        height: 100%;
        left: 50%;
        img {
          width: calc(100% + 20px);
        }
      `}  
    ${props =>
      props.benefit &&
      css`
        width: 50%;
        div {
          margin: auto;
          width: 58%;
          padding: 30px 0;
        }
        @media (max-width: 992px) {
          width: 100%;
          div {
            width: 100%;
            padding: 20px;
          }
        }
      `}
    ${props =>
      props.bgi &&
      `background-image: url(${
        props.bgi
      }); background-size: cover; background-repeat: no-repeat;`}

`

export default Col
