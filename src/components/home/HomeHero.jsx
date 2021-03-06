import React from 'react'
import styled from 'styled-components'

import { mediaQueries } from '../../utils/styling'
import Section from '../../atoms/Section/Section'
import { H1, H2, H3, H4, TextBig, TextHighlighter } from '../../atoms/Texts'
import {
  IndexHeroImg,
  IndexCustomerLogo,
  IndexSideImg,
} from '../../atoms/Images/Images.jsx'
import { Col, Row, Grid } from 'react-styled-flexboxgrid'
import RequestDemoButton from '../shared/RequestDemoButton'

const Img = styled.img`
  width: 100%;
  ${mediaQueries.sm`
    display: none;
  `};
`

const ImgContainer = styled('div')`
  position: relative;
  display: flex;
`

const MobileTagLine = styled(H4)`
  margin-bottom: 48px;
  margin-top: -50px;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 40px;
  }
`

const HomeHero = props => {
  const { content } = props
  return (
    <>
      <Section indexHero style={{ paddingTop: '200px' }}>
        <Grid>
          <Row top="xs">
            <Col xs={12} sm={6}>
              <Row>
                <Col xs={false} sm>
                  <Row center="xs">
                    <H2 color="white">{content.tagline}</H2>
                  </Row>
                </Col>
                <Col xs sm={false}>
                  <Row center="xs">
                    <MobileTagLine color="white" center>
                      {content.tagline}
                    </MobileTagLine>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={false} sm>
                  <Row center="xs">
                    <H4 color="white">{content.description}</H4>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={false} sm>
                  <Row start="sm">
                    <RequestDemoButton />
                  </Row>
                </Col>
                <Col xs sm={false}>
                  <Row center="xs">
                    <RequestDemoButton />
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={false} sm={6}>
              <IndexHeroImg src={content.heroImage.file.url} />
            </Col>
          </Row>
        </Grid>
      </Section>
      <Img src={content.heroImage.file.url} />
    </>
  )
}

export default HomeHero
