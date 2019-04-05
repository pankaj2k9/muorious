import React from 'react'
import styled from 'styled-components'
import { Container, WideContainer } from '../../../atoms/Container'
import Breakpoint from '../../layout/Breakpoint'
import FlexWrapper from '../FlexWrapper'

const Outer = styled.div`
    margin: 50px 0;
    @media (max-width: 992px) {
        margin: 0;
    }
`

const Feature = ({ children, image, imagePosition }) => (
  <Outer>
    <Container>
      <FlexWrapper wrap>
        <Breakpoint medium up>
          {imagePosition === 'right' && <ImageBlock image={image} />}
        </Breakpoint>
        <Breakpoint medium down>
          <ImageBlock image={image} />
        </Breakpoint>
        <Feature.Column>{children}</Feature.Column>
        <Breakpoint medium up>
          {imagePosition === 'left' && <ImageBlock image={image} />}
        </Breakpoint>
      </FlexWrapper>
    </Container>
  </Outer>
)

const ImageBlock = ({ image }) => (
    <Feature.Column>
      <Feature.Image src={image} />
    </Feature.Column>
  )
  

Feature.Title = styled.h3`
  font-family: Modern Era;
  font-weight: 400;
  font-size: 36px;
  line-height: 1.3;
  color: #000000;
  margin: 20px 0 30px;
  @media (max-width: 992px) {
    font-size: 24px;
    margin: 0 0 15px;
  }
`
Feature.Description = styled.p`
  font-family: Modern Era;
  font-size: 16px;
  line-height: 1.5;
  color: #606060;
`

Feature.Image = styled.img`
    max-width: 80%;
    width: 100%;
    @media (max-width: 992px) {
        max-width: 95vw;
  }
`

Feature.Column = styled.div`
  width: 50%;
  @media (max-width: 992px) {
    min-width: 100%;
    margin: 15px 0;
    width: 100%;
    img {
      max-width: 90vw;
    }
  }
`


export default Feature

