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
import { HeroImg, CustomerLogo, SideImg } from'../atoms/Images/Images.jsx'

class RootIndex extends React.Component {
  render() {
    // console.log("Data : ", this.props.data);
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // console.log("Site metadata", siteTitle)
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')

    const content = this.props.data.allContentfulHomepage.edges[0].node
    return (
      <LayoutWithThemeProvider>
        <React.Fragment>
        <Helmet>
          <title>{siteTitle}</title>
        </Helmet>
        <main> 
            <Nav />
            <Section hero="true">
                <Container>
                    <Row>
                        <Col equal>
                            <H1 color="white">
                                { content.tagline }
                            </H1>
                            <H4 color="white">
                                { content.description }
                            </H4>
                            <Button secondary>Request demo</Button>
                        </Col>
                        <Col equal />
                    </Row>
                </Container>
                <HeroImg src={content.heroImage.file.url}/>
            </Section>
            <Section customerLogos>
                <Container>
                    <Row customerLogos>
                        {content.customerLogos.map((logo, index) => (
                            logo.customerLogo && 
                            <a key={index} href={logo.customerUrl} >
                                <CustomerLogo src={logo.customerLogo.file.url} />
                            </a>
                        ))}
                    </Row>   
                </Container>
            </Section>
            <Section intro>
                <Container>
                    <Row>
                        <Col equal>
                            <SideImg src={content.valueImage.file.url} />
                        </Col>
                        <Col equal>
                            <H1>{ content.valueTitle }</H1>
                            <TextBig color="grey4">{ content.valueDescription.valueDescription }</TextBig>
                        </Col>
                    </Row>
                </Container>
            </Section>
            <Section testimonials>
                <Container>
                    <Row>
                    </Row>
                </Container>
            </Section>
        </main>
          </React.Fragment>
      </LayoutWithThemeProvider>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulHomepage {
        edges {
          node {
            id
            title
            tagline
            description
            heroImage {
                file {
                    url
                }
            }
            customerLogos {
                customerUrl
                customerLogo {
                    id
                    file {
                        url
                        fileName
                        contentType
                    }
                }
            }
            valueImage {
                file {
                  url
                }
              }
              valueTitle
              valueDescription {
                id
                valueDescription
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
