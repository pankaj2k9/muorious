import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'


class RootIndex extends React.Component {
  render() {
    console.log("Data : ", this.props.data);
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    console.log("Site metadata", siteTitle)
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <LayoutWithThemeProvider>
        <Helmet>
          <title>{siteTitle}</title>
        </Helmet>
          Home
      </LayoutWithThemeProvider>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulTest {
      edges {
        node {
          testContent
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
