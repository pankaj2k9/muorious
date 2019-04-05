import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { mediaQueries } from '../../utils/styling'
import Section from '../../atoms/Section/Section'
import { H1, H2, H3, H4, TextBig, TextHighlighter } from '../../atoms/Texts'
import {
  IndexHeroImg,
  IndexCustomerLogo,
  IndexSideImg,
} from '../../atoms/Images/Images.jsx'
import { Col, Row, Grid } from 'react-styled-flexboxgrid'
import Button from '../../atoms/Button'
import Visible from '../../atoms/Visible'

const HomeFeatureIntro = props => {
  const { title, description, imgUrl, button } = props
  const { link: buttonLink, title: buttonText } = button
  return (
    <Section intro>
      <Grid>
        <Row middle="xs" reverse="sm">
          <Col xs={12} sm>
            <img src={imgUrl} />
          </Col>
          <Col xs={12} sm>
            <H2>{title}</H2>
            <TextBig color="grey4">{description}</TextBig>
            {button && (
              <Link to={buttonLink}>
                <Button primary>{buttonText}</Button>
              </Link>
            )}
          </Col>
        </Row>
      </Grid>
    </Section>
  )
}

export default HomeFeatureIntro
