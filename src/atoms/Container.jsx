import styled from 'styled-components'

const Container = styled('div')`
  margin-right: auto;
  margin-left: auto;

  max-width: 1130px;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  height: 100%;
  @media (max-width: 992px) {
    padding: 0 30px;
  }
`

const WideContainer = styled('div')`
  display: flex;
  width: 100%;
  ${props =>
    props.benefit &&
    css`
      @media (max-width: 800px) {
        display: none;
      }
    `};
`
export { Container, WideContainer }
