import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'
import FlexWrapper from '../components/shared/FlexWrapper'
import RequestDemoButton from '../components/shared/RequestDemoButton'
import CTABlock from '../components/shared/CtaBlock'
import Breakpoint from '../components/layout/Breakpoint'
import {
  H1,
  H2,
  H3DIFF,
  TextXSmall,
  TextBig,
  TextHighlighter,
} from '../atoms/Texts'
import InsightsHeroImg from '../atoms/Images/InsightsHeroImg.svg'
import InsightsBenefitsImg from '../atoms/Images/InsightsBenefitsImg.png'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import { Container, WideContainer } from '../atoms/Container'
import HeroSection from '../components/shared/HeroSection'
import QualityAssuranceIllu from '../atoms/Images/QualityAssuranceImg.svg'
import CommunicationAnalysisIllu from '../atoms/Images/CommunicationAnalysisImg.svg'
import TemplateAnalysisIllu from '../atoms/Images/TemplateAnalysisImg.svg'
import AgentPerformanceIllu from '../atoms/Images/AgentPerformanceImg.svg'
import Testimonials from '../components/Testimonials'
import PageTransitionWrapper from '../components/PageTransitionWrapper'
import Feature from '../components/shared/Feature'
import Section from '../atoms/Section/Section'

const InsightsHeroTitle = styled.h1`
  max-width: 723px;
  width: 100%;
  padding-top: 50px;
  text-align: center;
  color: #0d0d0d;
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 1.3;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 992px) {
    font-size: 24px;
  }
`

const InsightsHeroDescription = styled.p`
  max-width: 877px;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.3;
  text-align: center;
  margin: 0 auto;
  color: #4d4d4d;
  @media (max-width: 992px) {
    margin: 0 auto 41px !important;
  }
`

const InsightsHeroImgSection = styled.div`
  padding-top: 50px;
  max-width: 100vw;
  img {
    max-width: 100vw;
  }
`

const InsightsBenefitsSection = styled.section`
  max-width: 1110px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 992px) {
    margin: 100px auto 60px !important;
  }
`

const InsightsBenefitsContent = styled.div`
  max-width: 484px;
  width: 100%;
  padding-top: 100px;
  margin-right: 130px;
  @media (max-width: 992px) {
    margin-right: 0;
    padding-top: 20px;
    padding: 20px;
  }
`

const InsightsBenefitsContentTitle = styled.h3`
  font-size: 36px;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 20px;
  color: #1b5e57;
`

const InsightsBenefitsContentDescription = styled.p`
  font-size: 16px;
  line-height: 32px;
  padding-bottom: 50px;
  color: #000000;
`

const InsightsBenefitsImgSection = styled.div`
  width: 484px;
  display: flex;
`

const InsightsFeaturesSection = styled.section`
  max-width: 1440px;
  width: 100%;
  padding-top: 120px;
  margin: 0 auto;
`

const InsightsFeaturesMore = styled.section`
  width: 100%;
  margin: 0 auto;
  padding-top: 80px;
`

const InsightsFeaturesMoreTitle = styled.h3`
  margin: 0 auto;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  color: #000000;
  padding-bottom: 20px;
  @media (max-width: 992px) {
    margin: 0 20px;
  }
`

const InsightsFeaturesMoreCards1 = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: auto 0;
`

const InsightsFeaturesMoreCards2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 70px;
`

const InsightsFeaturesMoreCard = styled.div`
  width: 347px;
  height: 203px;
  margin: 16px 15px;
  border-top: solid #1b5e57 11px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
`

const InsightsFeaturesMoreCardTitle = styled.h4`
  font-size: 22чpx;
  line-height: 32px;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  padding: 20px 20px;
`

const InsightsFeaturesMoreCardDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #828282;
  padding: 0 20px;
`

class Insights extends React.Component {
  componentDidMount() {
    window &&
      window.gaTrack &&
      window.gaTrack('pageview', { page: window.location.pathname })
  }

  render() {
    const content = this.props.data.allContentfulFeaturePageTemplate2.edges[0]
      .node
    const siteTitle = `${content.title} - ${get(
      this,
      'props.data.site.siteMetadata.title'
    )}`

    let quotesData = []
    try {
      quotesData = this.props.data.allContentfulFeaturePageTemplate2.edges[0]
        .node.quotes
      console.log('insight', quotesData)
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
            <Nav location={this.props.location} />
            <PageTransitionWrapper>
              <HeroSection insightsHero>
                <Container>
                  <Breakpoint medium up>
                    <H1 style={{ fontWeight: 400 }} center>
                      <span
                        style={{ maxWidth: '760px', display: 'inline-block' }}
                      >
                        {content.tagline}
                      </span>
                    </H1>
                    <InsightsHeroDescription>
                      {content.description.description}
                    </InsightsHeroDescription>
                  </Breakpoint>
                  <Breakpoint medium down>
                    <H1
                      style={{ fontWeight: 400, margin: '30px 0px 41px' }}
                      center
                    >
                      <span
                        style={{ maxWidth: '760px', display: 'inline-block' }}
                      >
                        {content.tagline}
                      </span>
                    </H1>
                    <InsightsHeroDescription>
                      {content.description.description}
                    </InsightsHeroDescription>
                    <FlexWrapper>
                      <RequestDemoButton assistRequestBtn />
                    </FlexWrapper>
                  </Breakpoint>
                  <FlexWrapper>
                    <HeroSection.Img insightHero src={InsightsHeroImg} />
                  </FlexWrapper>
                </Container>
              </HeroSection>
              <InsightsBenefitsSection>
                <Container>
                  <FlexWrapper
                    style={{ position: 'relative' }}
                    justify="flex-start"
                  >
                    <Col insightsBenefits>
                      <div>
                        <H3DIFF color="green">{content.benefit1Title}</H3DIFF>
                        <InsightsBenefitsContentDescription>
                          {content.benefit1Description.benefit1Description}
                        </InsightsBenefitsContentDescription>
                      </div>
                      <div>
                        <H3DIFF color="green">{content.benefit2Title}</H3DIFF>
                        <InsightsBenefitsContentDescription>
                          {content.benefit2Description.benefit2Description}
                        </InsightsBenefitsContentDescription>
                      </div>
                      <div>
                        <H3DIFF color="green">{content.benefit3Title}</H3DIFF>
                        <InsightsBenefitsContentDescription>
                          {content.benefit3Description.benefit3Description}
                        </InsightsBenefitsContentDescription>
                      </div>
                    </Col>
                    <Breakpoint medium up>
                      <Col insightsBenefitsImg>
                        <img src={InsightsBenefitsImg} />
                      </Col>
                    </Breakpoint>
                  </FlexWrapper>
                </Container>
              </InsightsBenefitsSection>
              <Testimonials
                insightsTestimnoial
                color="green"
                data={quotesData}
              />
              <InsightsFeaturesSection>
                <Feature imagePosition="right" image={QualityAssuranceIllu}>
                  <Feature.Title>{content.feature1Title}</Feature.Title>
                  <Feature.Description>
                    {content.feature1Description.feature1Description}
                  </Feature.Description>
                </Feature>

                <Feature imagePosition="left" image={CommunicationAnalysisIllu}>
                  <Feature.Title>{content.feature2Title}</Feature.Title>
                  <Feature.Description>
                    {content.feature2Description.feature2Description}
                  </Feature.Description>
                </Feature>

                <Feature imagePosition="right" image={TemplateAnalysisIllu}>
                  <Feature.Title>{content.feature3Title}</Feature.Title>
                  <Feature.Description>
                    {content.feature3Description.feature3Description}
                  </Feature.Description>
                </Feature>

                <Feature imagePosition="left" image={AgentPerformanceIllu}>
                  <Feature.Title>{content.feature4Title}</Feature.Title>
                  <Feature.Description>
                    {content.feature4Description.feature4Description}
                  </Feature.Description>
                </Feature>
              </InsightsFeaturesSection>

              <InsightsFeaturesMore>
                <InsightsFeaturesMoreTitle>
                  {content.moreTitle}
                </InsightsFeaturesMoreTitle>
                <InsightsFeaturesMoreCards1>
                  <InsightsFeaturesMoreCard>
                    <InsightsFeaturesMoreCardTitle>
                      {content.moreFeature1Title}
                    </InsightsFeaturesMoreCardTitle>
                    <InsightsFeaturesMoreCardDescription>
                      {content.moreFeature1Description.moreFeature1Description}
                    </InsightsFeaturesMoreCardDescription>
                  </InsightsFeaturesMoreCard>
                  <InsightsFeaturesMoreCard>
                    <InsightsFeaturesMoreCardTitle>
                      {content.moreFeature2Title}
                    </InsightsFeaturesMoreCardTitle>
                    <InsightsFeaturesMoreCardDescription>
                      {content.moreFeature2Description.moreFeature2Description}
                    </InsightsFeaturesMoreCardDescription>
                  </InsightsFeaturesMoreCard>
                  <InsightsFeaturesMoreCard>
                    <InsightsFeaturesMoreCardTitle>
                      {content.moreFeature3Title}
                    </InsightsFeaturesMoreCardTitle>
                    <InsightsFeaturesMoreCardDescription>
                      {content.moreFeature3Description.moreFeature3Description}
                    </InsightsFeaturesMoreCardDescription>
                  </InsightsFeaturesMoreCard>
                </InsightsFeaturesMoreCards1>
                <InsightsFeaturesMoreCards2>
                  <InsightsFeaturesMoreCard>
                    <InsightsFeaturesMoreCardTitle>
                      {content.moreFeature4Title}
                    </InsightsFeaturesMoreCardTitle>
                    <InsightsFeaturesMoreCardDescription>
                      {content.moreFeature4Description.moreFeature4Description}
                    </InsightsFeaturesMoreCardDescription>
                  </InsightsFeaturesMoreCard>
                  <InsightsFeaturesMoreCard>
                    <InsightsFeaturesMoreCardTitle>
                      {content.moreFeature5Title}
                    </InsightsFeaturesMoreCardTitle>
                    <InsightsFeaturesMoreCardDescription>
                      {content.moreFeature5Description.moreFeature5Description}
                    </InsightsFeaturesMoreCardDescription>
                  </InsightsFeaturesMoreCard>
                  <InsightsFeaturesMoreCard>
                    <InsightsFeaturesMoreCardTitle>
                      {content.moreFeature6Title}
                    </InsightsFeaturesMoreCardTitle>
                    <InsightsFeaturesMoreCardDescription>
                      {content.moreFeature6Description.moreFeature6Description}
                    </InsightsFeaturesMoreCardDescription>
                  </InsightsFeaturesMoreCard>
                </InsightsFeaturesMoreCards2>
              </InsightsFeaturesMore>
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

export default Insights

export const pageQuery = graphql`
  query InsightsQuery {
    allContentfulFeaturePageTemplate2 {
      edges {
        node {
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
          feature1Title
          feature1Description {
            feature1Description
          }

          feature2Title
          feature2Description {
            feature2Description
          }

          feature3Title
          feature3Description {
            feature3Description
          }
          feature4Title
          feature4Description {
            feature4Description
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

          moreTitle
          moreFeature1Title
          moreFeature2Title
          moreFeature3Title
          moreFeature4Title
          moreFeature5Title
          moreFeature6Title
          moreFeature1Description {
            moreFeature1Description
          }
          moreFeature2Description {
            moreFeature2Description
          }
          moreFeature3Description {
            moreFeature3Description
          }
          moreFeature4Description {
            moreFeature4Description
          }
          moreFeature5Description {
            moreFeature5Description
          }
          moreFeature6Description {
            moreFeature6Description
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
