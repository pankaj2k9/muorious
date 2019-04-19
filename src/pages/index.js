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
import Button from '../atoms/Button'
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
`

const RequestDemoButtonFooterWrapper = styled('a')`
  text-align: center;
`

class RootIndex extends React.Component {
  constructor(props) {
    super(props)
    this.scrollAnchorRef = React.createRef()
  }

  componentDidMount() {
    const { location } = this.props
    const self = this
    setTimeout(() => {
      if (location.hash.length > 0) {
        self.scrollAnchorRef.current.simulateClick()
      }
    }, 20)
    window && window.gaTrack && window.gaTrack('pageview', { page: window.location.pathname })
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
          <Scrollchor
            ref={this.scrollAnchorRef}
            style={{ display: 'none' }}
            animate={{ offset: -80 }}
            to={this.props.location.hash}
          />
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
              <Section features>
                <Container>
                  <Row>
                    <Col>
                      <Breakpoint medium up>
                        <H2 center>
                          {content.featuresTitle.replace(/[^ -~]+/g, '')}
                        </H2>
                      </Breakpoint>
                      <Breakpoint medium down>
                        <H2 small>{content.featuresTitle}</H2>
                      </Breakpoint>
                    </Col>
                  </Row>
                </Container>
              </Section>
              {/* TODO: Not ready yet */}
              {/* <HomeFeatureIntro 
              description={content.feature1Description.feature1Description}
              title={content.feature1Title}
              imgUrl={content.feature1Image.file.url}
              button={{link: "/assist", title: 'Learn about Assist'}}
            /> */}
              <Section intro>
                <Container>
                  <Row>
                    <Breakpoint medium up>
                      <>
                        <Col equal center>
                          <H3> <ColoredText
                            config={{
                              Assist: '#FFC509',
                              Insights: '#174F49',
                              Experience: '#FF3A66',
                            }}
                            additionalStyles="font-weight: 600"
                            text={content.feature1Title}
                          /></H3>
                          <TextBig color="grey4">
                            {content.feature1Description.feature1Description}
                          </TextBig>
                          <Link to="/assist">
                            <Button primary>Learn about Assist</Button>
                          </Link>
                        </Col>
                        <Col equal center>
                          <IndexSideImg src={content.feature1Image.file.url} />
                        </Col>
                      </>
                    </Breakpoint>
                    <Breakpoint medium down>
                      <>
                        <Col>
                          <Img src={content.feature1Image.file.url} />
                          <H3> <ColoredText
                            config={{
                              Assist: '#FFC509',
                              Insights: '#174F49',
                              Experience: '#FF3A66',
                            }}
                            additionalStyles="font-weight: 600"
                            text={content.feature1Title}
                          /></H3>
                          <TextBig color="grey4">
                            {content.feature1Description.feature1Description}
                          </TextBig>
                          <FlexWrapper>
                            <Link to="/assist">
                              <Button light>Learn about Assist</Button>
                            </Link>
                          </FlexWrapper>
                        </Col>
                      </>
                    </Breakpoint>
                  </Row>
                </Container>
              </Section>
              <Section intro>
                <Container>
                  <Row autoHeight>
                    <Breakpoint medium up>
                      <>
                        <Col equal center>
                          <IndexSideImg src={content.feature2Image.file.url} />
                        </Col>
                        <Col equal center>
                          <H3> <ColoredText
                            config={{
                              Assist: '#FFC509',
                              Insights: '#174F49',
                              Experience: '#FF3A66',
                            }}
                            additionalStyles="font-weight: 600"
                            text={content.feature2Title}
                          /></H3>
                          <TextBig color="grey4">
                            {content.feature2Description.feature2Description}
                          </TextBig>
                          <Link to="/insights">
                            <Button primary>Learn about Insights</Button>
                          </Link>
                        </Col>
                      </>
                    </Breakpoint>
                    <Breakpoint medium down>
                      <>
                        <Col>
                          <Img src={content.feature2Image.file.url} />
                          <H3> <ColoredText
                            config={{
                              Assist: '#FFC509',
                              Insights: '#174F49',
                              Experience: '#FF3A66',
                            }}
                            additionalStyles="font-weight: 600"
                            text={content.feature2Title}
                          /></H3>
                          <TextBig color="grey4">
                            {content.feature2Description.feature2Description}
                          </TextBig>
                          <FlexWrapper>
                            <Button light>Learn about Insights</Button>
                          </FlexWrapper>
                        </Col>
                      </>
                    </Breakpoint>
                  </Row>
                </Container>
              </Section>

              <Section intro id="experience">
                <Container>
                  <Breakpoint medium up>
                    <Row>
                      <Col equal center>
                        <H3>
                          <ColoredText
                            config={{
                              Assist: '#FFC509',
                              Insights: '#174F49',
                              Experience: '#FF3A66',
                            }}
                            additionalStyles="font-weight: 600"
                            text={content.feature3Title}
                          />

                          <RequestDemoButton handler={<Note>Coming soon</Note>}/>
                        </H3>
                        <TextBig color="grey4">
                          {content.feature3Description.feature3Description}
                        </TextBig>
                      </Col>
                      <Col equal center>
                        <IndexSideImg src={content.feature3Image.file.url} />
                      </Col>
                    </Row>
                  </Breakpoint>
                  <Breakpoint medium down>
                    <Row autoHeight>
                      <Col>
                        <Img src={content.feature3Image.file.url} />
                        <H3>
                          <ColoredText
                            config={{
                              Assist: '#FFC509',
                              Insights: '#174F49',
                              Experience: '#FF3A66',
                            }}
                            additionalStyles="font-weight: 600"
                            text={content.feature3Title}
                          />
                          <RequestDemoButton handler={<Note>Coming soon</Note>}/>
                        </H3>
                        <TextBig color="grey4">
                          {content.feature3Description.feature3Description}
                        </TextBig>
                      </Col>
                    </Row>
                  </Breakpoint>
                </Container>
              </Section>

              <Section intro grey id="integrations">
                <Container>
                  <Breakpoint medium up>
                    <Row>
                      <Col equal center>
                        <IndexSideImg src={content.integrationImage.file.url} />
                      </Col>
                      <Col equal center>
                        <H3>{content.integrationTitle}</H3>
                        <TextBig color="grey4">
                          {
                            content.integrationDescription
                              .integrationDescription
                          }
                        </TextBig>
                      </Col>
                    </Row>
                  </Breakpoint>
                  <Breakpoint medium down>
                    <Row>
                      <Col>
                        <Img src={content.integrationImage.file.url} />
                        <H3>{content.integrationTitle}</H3>
                        <TextBig color="grey4">
                          {
                            content.integrationDescription
                              .integrationDescription
                          }
                        </TextBig>
                      </Col>
                    </Row>
                  </Breakpoint>
                </Container>
              </Section>
              <Section intro grey>
                <Container>
                  <Breakpoint medium up>
                    <Row>
                      <Col equal center>
                        <H3>{content.integrationFastTitle}</H3>
                        <TextBig color="grey4">
                          {
                            content.integrationFastDescription
                              .integrationFastDescription
                          }
                        </TextBig>
                      </Col>
                      <Col equal center>
                        <IndexSideImg
                          src={content.integrationFastImage.file.url}
                        />
                      </Col>
                    </Row>
                  </Breakpoint>
                  <Breakpoint medium down>
                    <Row>
                      <Col>
                        <Img src={content.integrationImage.file.url} />
                        <H3>{content.integrationTitle}</H3>
                        <TextBig color="grey4">
                          {
                            content.integrationDescription
                              .integrationDescription
                          }
                        </TextBig>
                      </Col>
                    </Row>
                  </Breakpoint>
                </Container>
              </Section>
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
