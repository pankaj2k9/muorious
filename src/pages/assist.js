import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'
import Button from '../atoms/Button'
import Section from '../atoms/Section/Section'
import { H1, H3DIFF, TextXSmall , TextBig, TextHighlighter } from '../atoms/Texts'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import { Container, WideContainer  } from '../atoms/Container'
import { AssistHeroImg, AssistSideImg } from'../atoms/Images/Images.jsx'
import Note from '../atoms/Note'
import Testimonials from '../components/Testimonials'

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
                        <Section benefits>
                            <WideContainer>
                                    <Col benefit bgi={content.benefitsImage.file.url}/>
                                    <Col benefit>
                                        <div>
                                            <H3DIFF color="green">{content.benefit1Title}</H3DIFF>
                                            <TextXSmall color="gray1">{content.benefit1Description.benefit1Description}</TextXSmall>
                                        </div>
                                        <div>
                                            <H3DIFF color="green">{content.benefit2Title}</H3DIFF>
                                            <TextXSmall color="gray1">{content.benefit2Description.benefit2Description}</TextXSmall>
                                        </div>
                                        <div>
                                            <H3DIFF color="green">{content.benefit3Title}</H3DIFF>
                                            <TextXSmall color="gray1">{content.benefit3Description.benefit3Description}</TextXSmall>
                                        </div>
                                    </Col>
                            </WideContainer>
                        </Section>
                        <Testimonials />
                        <Section src={this.props.data.allContentfulHomepage.edges[0].node.bottomCtaImage.file.url} cta>
                            <Container>
                                <Row>
                                    <Col center>
                                        <H1 color="white" center>{this.props.data.allContentfulHomepage.edges[0].node.bottomCtaTitle}</H1>
                                        <Button secondary>Request demo</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Section>
                        <Footer />
                    </main>
                </React.Fragment>
            </LayoutWithThemeProvider>
        )
    }
}

export default Assist

export const pageQuery = graphql`
  query AssistQuery {
    allContentfulHomepage {
        edges {
          node {
            bottomCtaTitle
            bottomCtaImage {
                file {
                  url
                }
              }
          }
        }
    }
    allContentfulFeaturePageTemplate1 {
        edges {
          node {
            id
            title
            tagline
            description {
                description
            }
            benefitsImage {
                file {
                  url
                }
              }
              benefit1Title
              benefit2Title
              benefit3Title
              benefit1Description {
                benefit1Description
              }
              benefit2Description {
                benefit2Description
              }
              benefit3Description {
                benefit3Description
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
