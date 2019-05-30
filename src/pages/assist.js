import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled, { css } from 'styled-components'

import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'
import Breakpoint from '../components/layout/Breakpoint'
import RequestDemoButton from '../components/shared/RequestDemoButton'
import FlexWrapper from '../components/shared/FlexWrapper'
import Section from '../atoms/Section/Section'
import Button from '../atoms/Button'
import Space from '../components/shared/Space'
import HeroSection from '../components/shared/HeroSection'
import {
  H1,
  H3DIFF,
  TextXSmall,
  TextBig,
  TextHighlighter,
} from '../atoms/Texts'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import { Container, WideContainer } from '../atoms/Container'
import AssistHeroImage from '../atoms/Images/AssistHeroImg.png'
import Testimonials from '../components/Testimonials'
import PageTransitionWrapper from '../components/PageTransitionWrapper'
import Feature from '../components/shared/Feature'
import AutomaticCategorizationImg from '../atoms/Images/AutomaticCategorizationIllu.svg'
import TemplateRecommandationImg from '../atoms/Images/TemplateRecommandationImg.svg'
import CTABlock from '../components/shared/CtaBlock'

const AssistFeaturesSection = styled.section`
  padding: 80px 0 40px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 992px) {
    padding: 40px 0;
  }
`
// TODO: MORE ABOUT ASSIST

const AssistFeaturesMoreSection = styled.section`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  padding-top: 80px;
  margin-bottom: 100px;
  font-family: 'Montserrat', sans-serif;
`

const AssistFeaturesMoreTitle = styled.h3`
  margin: 0 auto;
  font-weight: 400;
  font-style: normal;
  font-size: 36px;
  line-height: 1.3;
  text-align: center;
  color: #000000;
  padding-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 992px) {
    margin: 0;
    width: 100vw;
  }
`

const AssistFeaturesMoreCards = styled.div`
  display: flex;
  justify-content: center;
  margin: auto 0;
  width: 100%;
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`

const AssistFeaturesMoreCard = styled.div`
  width: calc(33% - 30px);
  padding-bottom: 15px;
  margin: 16px 15px;
  border-top: solid #ffc509 11px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  @media (max-width: 992px) {
    width: calc(100% - 30px);
  }
`

const AssistFeaturesMoreCardTitle = styled.h4`
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  padding: 20px 20px;
`

const AssistFeaturesMoreCardDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 32px;
  color: #828282;
  padding: 0 20px;
`

class Assist extends React.Component {
  componentDidMount() {
    window &&
      window.gaTrack &&
      window.gaTrack('pageview', { page: window.location.pathname })
  }

  render() {
    const content = this.props.data.allContentfulFeaturePageTemplate1.edges[0]
      .node
    const siteTitle = `${content.title} - ${get(
      this,
      'props.data.site.siteMetadata.title'
    )}`

    let quotesData = []
    try {
      quotesData = this.props.data.allContentfulFeaturePageTemplate1.edges[0]
        .node.quotes
    } catch (e) {
      console.warn(e)
    }

    return (
      <LayoutWithThemeProvider>
        <React.Fragment>
          <Helmet>
            <title>{siteTitle}</title>
          </Helmet>
          <main>
            <Nav isGreen location={this.props.location} />
            <PageTransitionWrapper>
              <HeroSection assistHero>
                <Container>
                  <H1 style={{ fontWeight: 400 }} center>
                    <span
                      style={{ maxWidth: '760px', display: 'inline-block' }}
                    >
                      {content.tagline}
                    </span>
                  </H1>
                  <TextBig color="grey4" center>
                    {content.description.description}
                  </TextBig>
                  <Breakpoint medium down>
                    <FlexWrapper>
                      <RequestDemoButton />
                    </FlexWrapper>
                  </Breakpoint>
                  <HeroSection.Img src={AssistHeroImage} />
                </Container>
              </HeroSection>
              <Section benefits>
                <Container>
                  <FlexWrapper
                    style={{ position: 'relative' }}
                    justify="flex-end"
                  >
                    <Breakpoint medium up>
                      <Col
                        benefitImg
                        benefit
                        bgi={content.benefitsImage.file.url}
                      />
                    </Breakpoint>
                    <Col benefit>
                      <div>
                        <H3DIFF color="green">{content.benefit1Title}</H3DIFF>
                        <TextXSmall color="gray1">
                          {content.benefit1Description.benefit1Description}
                        </TextXSmall>
                      </div>
                      <div>
                        <H3DIFF color="green">{content.benefit2Title}</H3DIFF>
                        <TextXSmall color="gray1">
                          {content.benefit2Description.benefit2Description}
                        </TextXSmall>
                      </div>
                      <div>
                        <H3DIFF color="green">{content.benefit3Title}</H3DIFF>
                        <TextXSmall color="gray1">
                          {content.benefit3Description.benefit3Description}
                        </TextXSmall>
                      </div>
                    </Col>
                  </FlexWrapper>
                </Container>
              </Section>
              <Testimonials color="yellow" data={quotesData} />
              <AssistFeaturesSection>
                <Feature
                  imagePosition="left"
                  image={AutomaticCategorizationImg}
                >
                  <Feature.Title>{content.feature1Title}</Feature.Title>
                  <Feature.Description>
                    <>
                      {content.feature1Description.feature1Description}
                      <div>
                        <Space height="20px" />
                        <Link
                          to="/whitepaper/customer-service-tickets-categorization"
                          target="_blank"
                        >
                          <Button secondary>Download our whitepaper</Button>
                        </Link>
                      </div>
                    </>
                  </Feature.Description>
                </Feature>
                <Feature
                  imagePosition="right"
                  image={TemplateRecommandationImg}
                >
                  <Feature.Title>{content.feature2Title}</Feature.Title>
                  <Feature.Description>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: content.feature2Description.feature2Description.replace(
                          /\s\s/g,
                          '</br>'
                        ),
                      }}
                    />
                  </Feature.Description>
                </Feature>
              </AssistFeaturesSection>
              <AssistFeaturesMoreSection>
                <AssistFeaturesMoreTitle>
                  {content.moreTitle}
                </AssistFeaturesMoreTitle>
                <AssistFeaturesMoreCards>
                  <AssistFeaturesMoreCard>
                    <AssistFeaturesMoreCardTitle>
                      {content.moreFeature1Title}
                    </AssistFeaturesMoreCardTitle>
                    <AssistFeaturesMoreCardDescription>
                      {content.moreFeature1Description.moreFeature1Description}
                    </AssistFeaturesMoreCardDescription>
                  </AssistFeaturesMoreCard>
                  <AssistFeaturesMoreCard>
                    <AssistFeaturesMoreCardTitle>
                      {content.moreFeature2Title}
                    </AssistFeaturesMoreCardTitle>
                    <AssistFeaturesMoreCardDescription>
                      {content.moreFeature2Description.moreFeature2Description}
                    </AssistFeaturesMoreCardDescription>
                  </AssistFeaturesMoreCard>
                  <AssistFeaturesMoreCard>
                    <AssistFeaturesMoreCardTitle>
                      {content.moreFeature3Title}
                    </AssistFeaturesMoreCardTitle>
                    <AssistFeaturesMoreCardDescription>
                      {content.moreFeature3Description.moreFeature3Description}
                    </AssistFeaturesMoreCardDescription>
                  </AssistFeaturesMoreCard>
                </AssistFeaturesMoreCards>
              </AssistFeaturesMoreSection>
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
          quotes {
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
          feature1Title
          feature1Description {
            feature1Description
          }

          feature2Title
          feature2Description {
            feature2Description
          }
          moreTitle
          moreFeature1Title
          moreFeature2Title
          moreFeature3Title
          moreFeature1Description {
            moreFeature1Description
          }
          moreFeature2Description {
            moreFeature2Description
          }
          moreFeature3Description {
            moreFeature3Description
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
