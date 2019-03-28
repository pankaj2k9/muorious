import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'


class RootIndex extends React.Component {
  render() {
    console.log("Data : ", this.props.data);
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    console.log("Site metadata", siteTitle)
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <div>
        Home
      </div>
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
