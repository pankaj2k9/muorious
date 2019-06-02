import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Breakpoint from '../components/layout/Breakpoint'
import ColoredText from '../components/shared/ColoredText'
import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'
import Button, { MobileButton } from '../atoms/Button'
import Section from '../atoms/Section/Section'
import { H1, H2, H3, H4, TextBig, TextHighlighter } from '../atoms/Texts'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import { Container } from '../atoms/Container'
import {
  IndexHeroImg,
  IndexCustomerLogo,
  IndexSideImg,
} from '../atoms/Images/Images.jsx'
import Note from '../atoms/Note'
import Space from '../components/shared/Space'
import Testimonials from '../components/Testimonials'
import FlexWrapper from '../components/shared/FlexWrapper'
import RequestDemoButton from '../components/shared/RequestDemoButton'
import Scrollchor from 'react-scrollchor'
import HomeHero from '../components/home/HomeHero'
import HomeFeatureIntro from '../components/home/HomeFeatureIntro'
import HomeCustomerLogos from '../components/home/HomeCustomerLogos'
import PageTransitionWrapper from '../components/PageTransitionWrapper'
import CTABlock from '../components/shared/CtaBlock'

const Img = styled.img`
  width: 100%;
  @media (max-width: 992px) {
    margin-bottom: 30px;
  }
`

const RequestDemoButtonFooterWrapper = styled('a')`
  text-align: center;
`

class UseCases extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { location } = this.props

    window &&
      window.gaTrack &&
      window.gaTrack('pageview', { page: window.location.pathname })
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    const content = this.props.data.allContentfulHomepage.edges[0].node
    const quotesData = content.customerQuotes
    return (
      <LayoutWithThemeProvider>
        <React.Fragment>
          <Helmet>
            <title>{siteTitle}</title>
          </Helmet>
          <main>
            <Nav transparency location={this.props.location} />
            <PageTransitionWrapper>
              <HomeHero content={content} />
              <Section customerLogos>
                <HomeCustomerLogos customerLogos={content.customerLogos} />
              </Section>
              <Section intro>
                <Container>
                  <Row>
                    <Breakpoint medium up>
                      <>
                        <Col equal>
                          <IndexSideImg src={content.valueImage.file.url} />
                        </Col>
                        <Col equal>
                          <H2>{content.valueTitle}</H2>
                          <TextBig color="grey4">
                            <ColoredText
                              config={{
                                Assist: '#FFC509',
                                Insights: '#174F49',
                                Experience: '#FF3A66',
                              }}
                              additionalStyles="font-weight: 600"
                              text={content.valueDescription.valueDescription}
                            />
                          </TextBig>
                        </Col>
                      </>
                    </Breakpoint>
                    <Breakpoint medium down>
                      <>
                        <Col>
                          <IndexSideImg src={content.valueImage.file.url} />
                          <H4>{content.valueTitle}</H4>
                          <TextBig color="grey4">
                            {content.valueDescription.valueDescription}
                          </TextBig>
                        </Col>
                      </>
                    </Breakpoint>
                  </Row>
                </Container>
              </Section>
              <Testimonials color="pink" data={quotesData} />

              <CTABlock
                image={content.bottomCtaImage.file.url}
                title={content.bottomCtaTitle}
              />
              <Footer location={this.props.location} />
            </PageTransitionWrapper>
          </main>
        </React.Fragment>
      </LayoutWithThemeProvider>
    )
  }
}

export default UseCases

export const pageQuery = graphql`
  query UseCasesQuery {
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
          customerQuotes {
            ... on ContentfulQuote {
              content
              authorFirstName
              authorLastName
              authorJobTitle
              authorCompany {
                customerName
                customerUrl
                customerLogo {
                  file {
                    url
                  }
                }
              }
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
          integrationFastTitle
          integrationFastImage {
            file {
              url
            }
          }
          integrationFastDescription {
            integrationFastDescription
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
    allContentfulQuote {
      edges {
        node {
          content
          authorFirstName
          authorLastName
          authorJobTitle
          authorCompany {
            customerName
            customerUrl
            customerLogo {
              file {
                url
              }
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
