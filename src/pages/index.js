import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'
import Button from '../atoms/Button'
import Section from '../atoms/Section/Section'
import { H1, H4, TextBig, TextHighlighter } from '../atoms/Texts'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import Container from '../atoms/Container'
import { IndexHeroImg, IndexCustomerLogo, IndexSideImg } from'../atoms/Images/Images.jsx'
import Note from '../atoms/Note'

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
            <Section indexHero>
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
                <IndexHeroImg src={content.heroImage.file.url}/>
            </Section>
            <Section customerLogos>
                <Container>
                    <Row customerLogos>
                        {content.customerLogos.map((logo, index) => (
                            logo.customerLogo && 
                            <a key={index} href={logo.customerUrl} >
                                <IndexCustomerLogo src={logo.customerLogo.file.url} />
                            </a>
                        ))}
                    </Row>   
                </Container>
            </Section>
            <Section intro>
                <Container>
                    <Row>
                        <Col equal>
                            <IndexSideImg src={content.valueImage.file.url} />
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
            <Section features>
                <Container>
                    <Row>
                        <Col>
                            <H1 center>{ content.featuresTitle }</H1>
                        </Col>
                    </Row>
                </Container>
            </Section>
            <Section intro>
                <Container>
                    <Row>
                        <Col equal center>
                            <H1>{ content.feature1Title }</H1>
                            <TextBig color="grey4">{ content.feature1Description.feature1Description }</TextBig>
                            <Button primary>Learn about Assist</Button>
                        </Col>
                        <Col equal center>
                            <SideImg src={content.feature1Image.file.url} />
                        </Col>
                    </Row>
                </Container>
            </Section>
            <Section intro>
                <Container>
                    <Row>
                        <Col equal center>
                            <SideImg src={content.feature2Image.file.url} />
                        </Col>
                        <Col equal center>
                            <H1>{ content.feature2Title }</H1>
                            <TextBig color="grey4">{ content.feature2Description.feature2Description }</TextBig>
                            <Button primary>Learn about Insights</Button>
                        </Col>
                    </Row>
                </Container>
            </Section>
            <Section intro>
                <Container>
                    <Row>
                        <Col equal center>
                            <H1>{ content.feature3Title }<Note>Coming soon</Note></H1>
                            <TextBig color="grey4">
                                { content.feature3Description.feature3Description }
                            </TextBig>
                        </Col>
                        <Col equal center>
                            <SideImg src={content.feature3Image.file.url} />
                        </Col>
                    </Row>
                </Container>
            </Section>
            <Section intro grey>
                <Container>
                    <Row>
                        <Col equal center>
                            <SideImg src={content.integrationImage.file.url} />
                        </Col>
                        <Col equal center>
                            <H1>{ content.integrationTitle }</H1>
                            <TextBig color="grey4">
                                { content.integrationDescription.integrationDescription }
                            </TextBig>
                        </Col>
                    </Row>
                </Container>
            </Section>
            <Section intro grey>
                <Container>
                    <Row>
                        <Col equal center>
                            <H1>{ content.integrationTitle }</H1>
                            <TextBig color="grey4">
                                { content.integrationDescription.integrationDescription }
                            </TextBig>
                        </Col>
                        <Col equal center>
                            <SideImg src={content.integrationImage.file.url} />
                        </Col>
                    </Row>
                </Container>
            </Section>
            <Section src={content.bottomCtaImage.file.url} cta>
                <Container>
                    <Row>
                        <Col center>
                            <H1 color="white" center>{content.bottomCtaTitle}</H1>
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
            featuresTitle
            feature1Title
            feature1Image {
              file {
                url
              }
            }
            feature1Description {
              feature1Description
            }
            feature2Title
            feature2Image {
              file {
                url
              }
            }
            feature2Description {
              feature2Description
            }
            feature3Title
            feature3Image {
              file {
                url
              }
            }
            feature3Description {
                feature3Description
              }
            integrationTitle
            integrationImage {
              file {
                url
              }
            }
            integrationDescription {
              integrationDescription
            }
            bottomCtaTitle
            bottomCtaImage {
                file {
                  url
                }
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
