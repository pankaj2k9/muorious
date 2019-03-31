import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Button from '../atoms/Button'
import Section from '../atoms/Section/Section'
import { H1, H4, TextBig, TextHighlighter } from '../atoms/Texts'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import Container from '../atoms/Container'
import { AssistHeroImg } from'../atoms/Images/Images.jsx'
import Note from '../atoms/Note'

class Assist extends React.Component {
    render() {
        const content = this.props.data.allContentfulFeaturePageTemplate1.edges[0].node
        const siteTitle = `${content.title} - ${get(this, 'props.data.site.siteMetadata.title')}`
        return (
            <LayoutWithThemeProvider>
                <React.Fragment>
                    <Helmet>
                    <title>{siteTitle}</title>
                    </Helmet>
                    <main> 
                        <Nav isGreen />
                        <Section assistHero>
                            <Container>
                                <Row>
                                    <Col center>
                                        <H1 center>{content.tagline}</H1>
                                        <TextBig color="grey4" center>{content.description.description}</TextBig>
                                        <AssistHeroImg />
                                    </Col>
                                </Row>
                            </Container>
                        </Section>
                    </main>
                </React.Fragment>
            </LayoutWithThemeProvider>
        )
    }
}

export default Assist

export const pageQuery = graphql`
  query AssistQuery {
    allContentfulFeaturePageTemplate1 {
        edges {
          node {
            id
            title
            tagline
            description {
                description
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
