import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Breakpoint from '../components/layout/Breakpoint'
import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'
import Button from '../atoms/Button'
import Section from '../atoms/Section/Section'
import { H1, H4, TextBig, TextHighlighter } from '../atoms/Texts'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import { Container } from '../atoms/Container'
import { IndexHeroImg, IndexCustomerLogo, IndexSideImg } from '../atoms/Images/Images.jsx'
import Note from '../atoms/Note'
import Space from '../components/shared/Space'
import Testimonials from '../components/Testimonials'
import FlexWrapper from '../components/shared/FlexWrapper'
import RequestDemoButton from '../components/shared/RequestDemoButton'
import Scrollchor from 'react-scrollchor';

const Img = styled.img`
width: 100%;
`

const RequestDemoButtonFooterWrapper = styled('a')`
  text-align: center;
`

class RootIndex extends React.Component {
  constructor(props) {
    super(props);
    this.scrollAnchorRef = React.createRef();
  }

  componentDidMount() {
    const { location } = this.props;
    const self = this;
    setTimeout(() => {
      if (location.hash.length > 0) {
        self.scrollAnchorRef.current.simulateClick()
      }
    }, 20)
  }
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
          <Scrollchor ref={this.scrollAnchorRef} style={{ display: "none" }} animate={{ offset: -80 }} to={this.props.location.hash} />
          <main>
            <Nav transparency location={this.props.location} />
            <Section indexHero>
              <Container>
                <Row>
                  <Col equal>
                    <Breakpoint medium up>
                      <H1 color="white">
                        {content.tagline}
                      </H1>
                    </Breakpoint>
                    <Breakpoint medium down>
                      <>
                        <H1 color="white" center>
                          {content.tagline}
                        </H1>
                        <Space height="20px" />
                      </>
                    </Breakpoint>
                    <Breakpoint medium up>
                      <H4 color="white">
                        {content.description}
                      </H4>
                    </Breakpoint>
                    <Breakpoint medium up><RequestDemoButton /></Breakpoint>
                    <Breakpoint medium down><FlexWrapper><RequestDemoButton /></FlexWrapper></Breakpoint>
                  </Col>
                  <Breakpoint medium up>
                    <Col equal />
                  </Breakpoint>
                </Row>
              </Container>
              <Breakpoint medium up>
                <IndexHeroImg src={content.heroImage.file.url} />
              </Breakpoint>
            </Section>
            <Breakpoint medium down>
              <Img src={content.heroImage.file.url} />
            </Breakpoint>
            <Section customerLogos>
              <Container>
                <Row customerLogos>
                  <Breakpoint medium up>{content.customerLogos.map((logo, index) => (
                    logo.customerLogo &&
                    <a key={index} href={logo.customerUrl} >
                      <IndexCustomerLogo src={logo.customerLogo.file.url} />
                    </a>
                  ))}
                  </Breakpoint>
                  <Breakpoint medium down>{content.customerLogos.slice(0, 3).map((logo, index) => (
                    logo.customerLogo &&
                    <a key={index} href={logo.customerUrl} >
                      <IndexCustomerLogo src={logo.customerLogo.file.url} />
                    </a>
                  ))}
                  </Breakpoint>
                </Row>
              </Container>
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
                        <H1>{content.valueTitle}</H1>
                        <TextBig color="grey4">{content.valueDescription.valueDescription}</TextBig>
                      </Col>
                    </>
                  </Breakpoint>
                  <Breakpoint medium down>
                    <>
                      <Col>
                        <IndexSideImg src={content.valueImage.file.url} />
                        <H1 small>{content.valueTitle}</H1>
                        <TextBig color="grey4">{content.valueDescription.valueDescription}</TextBig>
                      </Col>
                    </>
                  </Breakpoint>
                </Row>
              </Container>
            </Section>
            <Testimonials color="pink" />
            <Section features>
              <Container>
                <Row>
                  <Col>
                    <Breakpoint medium up>
                      <H1 center>{content.featuresTitle}</H1>
                    </Breakpoint>
                    <Breakpoint medium down>
                      <H1 small>{content.featuresTitle}</H1>
                    </Breakpoint>
                  </Col>
                </Row>
              </Container>
            </Section>
            <Section intro>
              <Container>
                <Row>
                  <Breakpoint medium up>
                    <>
                      <Col equal center>
                        <H1>{content.feature1Title}</H1>
                        <TextBig color="grey4">{content.feature1Description.feature1Description}</TextBig>
                        <Link to="/assist"><Button primary>Learn about Assist</Button></Link>
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
                        <H1 small>{content.feature1Title}</H1>
                        <TextBig color="grey4">{content.feature1Description.feature1Description}</TextBig>
                        <FlexWrapper><Link to="/assist"><Button light>Learn about Assist</Button></Link></FlexWrapper>
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
                        <H1>{content.feature2Title}</H1>
                        <TextBig color="grey4">{content.feature2Description.feature2Description}</TextBig>
                        <Link to="/insights"><Button primary>Learn about Insights</Button></Link>
                      </Col>
                    </>
                  </Breakpoint>
                  <Breakpoint medium down>
                    <>
                      <Col >
                        <Img src={content.feature2Image.file.url} />
                        <H1 small>{content.feature2Title}</H1>
                        <TextBig color="grey4">{content.feature2Description.feature2Description}</TextBig>
                        <FlexWrapper><Button light>Learn about Insights</Button></FlexWrapper>
                      </Col>
                    </>
                  </Breakpoint>
                </Row>
              </Container>
            </Section>

            <Section intro>
              <Container>
                <Breakpoint medium up>
                  <Row>
                    <Col equal center>
                      <H1>{content.feature3Title}<Note>Coming soon</Note></H1>
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
                      <H1 small>{content.feature3Title}<Note>Coming soon</Note></H1>
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
                      <H1>{content.integrationTitle}</H1>
                      <TextBig color="grey4">
                        {content.integrationDescription.integrationDescription}
                      </TextBig>
                    </Col>
                  </Row>
                </Breakpoint>
                <Breakpoint medium down>
                  <Row>
                    <Col>
                      <Img src={content.integrationImage.file.url} />
                      <H1 small>{content.integrationTitle}</H1>
                      <TextBig color="grey4">
                        {content.integrationDescription.integrationDescription}
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
                      <H1>{content.integrationFastTitle}</H1>
                      <TextBig color="grey4">
                        {content.integrationDescription.integrationFastDescription}
                      </TextBig>
                    </Col>
                    <Col equal center>
                      <IndexSideImg src={content.integrationFastImage.file.url} />
                    </Col>
                  </Row>
                </Breakpoint>
                <Breakpoint medium down>
                  <Row>
                    <Col>
                      <Img src={content.integrationImage.file.url} />
                      <H1 small>{content.integrationTitle}</H1>
                      <TextBig color="grey4">
                        {content.integrationDescription.integrationDescription}
                      </TextBig>
                    </Col>
                  </Row>
                </Breakpoint>
              </Container>
            </Section>
            <Section src={content.bottomCtaImage.file.url} cta>
              <Container>
                <Row>
                  <Col center>
                    <H1 color="white" center>{content.bottomCtaTitle}</H1>
                    <FlexWrapper>
                      <RequestDemoButton />
                    </FlexWrapper>
                  </Col>
                </Row>
              </Container>
            </Section>
            <Footer />
          </main>
        </React.Fragment>
      </LayoutWithThemeProvider >
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
