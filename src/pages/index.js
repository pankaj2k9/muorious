import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Button from '../atoms/Button'


class RootIndex extends React.Component {
  render() {
    // console.log("Data : ", this.props.data);
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // console.log("Site metadata", siteTitle)
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <LayoutWithThemeProvider>
      <React.Fragment>
        <Helmet>
          <title>{siteTitle}</title>
        </Helmet>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button>Home</Button>
          </React.Fragment>
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
