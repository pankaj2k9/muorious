import React from 'react'
import styled from 'styled-components'
import FlexWrapper from './FlexWrapper'
import RequestDemoButton from './RequestDemoButton'
import Section from '../../atoms/Section/Section'

const Title = styled.p`
  font-family: Modern Era;
  font-size: 48px;
  line-height: 64px;
  text-align: center;
  color: #f9f9f9;
`

const CTABlock = ({ image, title }) => (
  <Section src={image} cta>
    <FlexWrapper column>
      <Title>
        <p style={{ maxWidth: '740px' }}>{title}</p>
      </Title>
      <RequestDemoButton />
    </FlexWrapper>
  </Section>
)

export default CTABlock
