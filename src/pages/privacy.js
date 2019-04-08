import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

import Nav from '../components/Navigation'
import styled from 'styled-components'

const PageTitle = styled.h2`
  font-family: Modern Era;
  font-size: 42px;
  line-height: 50px;
  text-align: center;
  margin: 0;
`

const P = styled.p`
  font-family: Modern Era;
  font-size: 16px;
  line-height: 32px;
  color: #606060;
`

const TextTitle = styled.h3`
  font-family: Modern Era;
  font-size: 36px;
  line-height: 48px;
  color: #000000;
`

const options = {
  renderNode: {
    [MARKS.HEADING_1]: (node, children) => <TextTitle>{text}</TextTitle>,
    [MARKS.HEADING_2]: (node, children) => <TextTitle>{text}</TextTitle>,
    [MARKS.HEADING_3]: (node, children) => <TextTitle>{text}</TextTitle>,
    [BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
  },
  renderText: text => text.replace('!', '?'),
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
  const pageTitle = get(props, 'data.allContentfulPrivacy.edges[0].node.title')
  const json = get(
    props,
    'data.allContentfulPrivacy.edges[0].node.privacyInfo.json'
  )
  return (
    <LayoutWithThemeProvider>
      <React.Fragment>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <main>
          <Nav location={location} />
          <PageTitle>{pageTitle}</PageTitle>
          {documentToReactComponents(json, options)}
          <Footer location={location} />
        </main>
      </React.Fragment>
    </LayoutWithThemeProvider>
  )
}

export default PrivacyPage

export const pageQuery = graphql`
  query {
    allContentfulPrivacy {
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
