import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { Container } from '../atoms/Container'
import Nav from '../components/Navigation'
import styled from 'styled-components'
import HeroShape from '../atoms/Images/InsightsHeroShape.png'
const Main = styled.main`
  padding-top: 80px;
  background-image: url(${HeroShape});
  background-size: 40% auto;
  background-position: top left;
  background-repeat: no-repeat;
`

const PageTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 42px;
  line-height: 50px;
  text-align: center;
  margin: 65px 0;
  font-weight: 400;
  @media (max-width: 992px) {
    font-size: 24px;
    margin: 30px 0;
  }
`

const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #606060;
  display: block;
  margin-bottom: 16px;
  @media (max-width: 992px) {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`

const TextTitle1 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  line-height: 48px;
  font-weight: 400;
  color: #000000;
  margin: 5px 0;
  @media (max-width: 992px) {
    font-size: 20px;
    line-height: 48px;
    margin: 0;
  }
`

const TextTitle2 = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  line-height: 48px;
  font-weight: 400;
  color: #000000;
  margin: 5px 0;
  @media (max-width: 992px) {
    font-size: 20px;
    line-height: 48px;
    margin: 0;
  }
`

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <TextTitle1>{children}</TextTitle1>,
    [BLOCKS.HEADING_2]: (node, children) => <TextTitle2>{children}</TextTitle2>,
    [BLOCKS.HEADING_3]: (node, children) => <TextTitle2>{children}</TextTitle2>,
    [BLOCKS.HEADING_4]: (node, children) => <TextTitle2>{children}</TextTitle2>,
    [BLOCKS.HEADING_5]: (node, children) => <TextTitle2>{children}</TextTitle2>,
    [BLOCKS.HEADING_6]: (node, children) => <TextTitle2>{children}</TextTitle2>,
    [BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
  },
}

import Footer from '../components/Footer'
const PrivacyPage = props => {
  const {
    location,
    data: {
      site: {
        siteMetadata: { title },
      },
    },
  } = props
  const pageTitle = get(
    props,
    'data.allContentfulLegalInfo.edges[0].node.title'
  )
  const json = get(
    props,
    'data.allContentfulLegalInfo.edges[0].node.privacyInfo.json'
  )
  return (
    <LayoutWithThemeProvider>
      <React.Fragment>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Nav location={location} />
        <Main>
          <Container>
            <PageTitle>{pageTitle}</PageTitle>
            <div>{documentToReactComponents(json, options)}</div>
          </Container>
          <Footer location={location} />
        </Main>
      </React.Fragment>
    </LayoutWithThemeProvider>
  )
}

export default PrivacyPage

export const pageQuery = graphql`
  query {
    allContentfulLegalInfo(
      filter: { contentful_id: { eq: "NgmvsRWeASdp7AZkX88lQ" } }
    ) {
      edges {
        node {
          title
          privacyInfo {
            json
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`
