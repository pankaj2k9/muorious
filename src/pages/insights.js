import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'
import FlexWrapper from '../components/shared/FlexWrapper'
import Breakpoint from '../components/layout/Breakpoint'
import {
  H1,
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
import PageTransitionWrapper from '../components/PageTransitionWrapper';

const InsightsHeroTitle = styled.h1`
  max-width: 723px;
  width: 100%;
  padding-top: 50px;
  text-align: center;
  color: #0d0d0d;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 1.6;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 992px) {
    font-size: 24px;
  }
`

const InsightsHeroDescription = styled.p`
  max-width: 877px;
  width: 100%;
  font-family: Modern Era;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  margin: 0 auto;
  color: #4d4d4d;
`

const InsightsHeroImgSection = styled.div`
  padding-top: 50px;
  max-width: 100vw;
  img {
    max-width: 100vw;
  }
`

const InsightsBenefitsSection = styled.section`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
  line-height: 24px;
  margin-bottom: 20px;
  color: #1b5e57;
`

const InsightsBenefitsContentDescription = styled.p`
  font-size: 18px;
  line-height: 32px;
  padding-bottom: 50px;
  color: #000000;
`

const InsightsBenefitsImgSection = styled.div`
  width: 484px;
`

const InsightsFeaturesSection = styled.section`
  max-width: 1440px;
  width: 100%;
  padding-top: 120px;
  margin: 0 auto;
  img {
    width: 90vw;
    display: block;
    margin: 10px auto;
  }
`

const InsightsQualityAssurance = styled.div`
  display: flex;
`

const InsightsFeaturesTitle = styled.h3`
  font-weight: 600;
  font-size: 38px;
  line-height: 48px;
  color: #000000;
  margin-right: 100px;
  margin-left: 100px;
  @media (max-width: 992px) {
    margin-right: 0;
    margin-left: 0;
    padding: 15px;
  }
`

const InsightsFeaturesDescription = styled.p`
  max-width: 470px;
  width: 100%;
  font-size: 18px;
  line-height: 32px;
  color: #000000;
  margin-right: 100px;
  margin-left: 100px;
  @media (max-width: 992px) {
    margin-right: 0;
    margin-left: 0;
    padding: 15px;
  }
`

const InsightCommunicationAnalysis = styled.div`
  display: flex;
  margin-top: 120px;
`

const InsightsTemplateAnalysis = styled.div`
  display: flex;
  margin-top: 120px;
`

const InsightsAgentPerformance = styled.div`
  display: flex;
  margin-top: 120px;
`

const InsightsFeaturesMore = styled.section`
  width: 100%;
  margin: 0 auto;
  padding-top: 80px;
`

const InsightsFeaturesMoreTitle = styled.h3`
  margin: 0 auto;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: #000000;
  padding-bottom: 20px;
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
  font-family: Modern Era, sans-serif;
  padding: 20px 20px;
`

const InsightsFeaturesMoreCardDescription = styled.p`
  font-family: Modern Era, sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #828282;
  padding: 0 20px;
`

class Insights extends React.Component {
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
    console.warn(content)
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
                <Row>
                  <Col center>
                    <H1 center bold>
                      {content.tagline}
                    </H1>
                    <InsightsHeroDescription>
                      {content.description.description}
                    </InsightsHeroDescription>
                    <FlexWrapper>
                      <HeroSection.Img src={InsightsHeroImg} />
                    </FlexWrapper>
                  </Col>
                </Row>
              </Container>
            </HeroSection>
            <InsightsBenefitsSection>
              <InsightsBenefitsContent>
                <div>
                  <InsightsBenefitsContentTitle>
                    {content.benefit1Title}
                  </InsightsBenefitsContentTitle>
                  <InsightsBenefitsContentDescription>
                    {content.benefit1Description.benefit1Description}
                  </InsightsBenefitsContentDescription>
                </div>
                <div>
                  <InsightsBenefitsContentTitle>
                    {content.benefit2Title}
                  </InsightsBenefitsContentTitle>
                  <InsightsBenefitsContentDescription>
                    {content.benefit2Description.benefit2Description}
                  </InsightsBenefitsContentDescription>
                </div>
                <div>
                  <InsightsBenefitsContentTitle>
                    {content.benefit3Title}
                  </InsightsBenefitsContentTitle>
                  <InsightsBenefitsContentDescription>
                    {content.benefit3Description.benefit3Description}
                  </InsightsBenefitsContentDescription>
                </div>
              </InsightsBenefitsContent>
              <Breakpoint medium up>
                <InsightsBenefitsImgSection>
                  <img src={InsightsBenefitsImg} />
                </InsightsBenefitsImgSection>
              </Breakpoint>
            </InsightsBenefitsSection>
            <Testimonials color="green" data={quotesData} />
            <Breakpoint medium up>
              <InsightsFeaturesSection>
                <InsightsQualityAssurance>
                  <div>
                    <InsightsFeaturesTitle>
                      Quality Assurance
                    </InsightsFeaturesTitle>
                    <InsightsFeaturesDescription>
                      Explore, navigate, slice and dice your data to validate
                      assumptions, measure performance with a few clicks or
                      compare each element with the average.
                    </InsightsFeaturesDescription>
                  </div>
                  <img src={QualityAssuranceIllu} />
                </InsightsQualityAssurance>
                <InsightCommunicationAnalysis>
                  <img src={CommunicationAnalysisIllu} />
                  <div>
                    <InsightsFeaturesTitle>
                      Communication Analysis
                    </InsightsFeaturesTitle>
                    <InsightsFeaturesDescription>
                      Break down each of your key metrics depending on the usage
                      of canned responses. Understand how they are used and how
                      they impact your Customer Satisfaction and productivity.
                      Monitor adherence to communication guidelines and identify
                      optimization to be made.
                    </InsightsFeaturesDescription>
                  </div>
                </InsightCommunicationAnalysis>
                <InsightsTemplateAnalysis>
                  <div>
                    <InsightsFeaturesTitle>
                      Template Analysis
                    </InsightsFeaturesTitle>
                    <InsightsFeaturesDescription>
                      Build a healthy library of canned responses, figure out
                      which ones have high re-opening rates, negative impact on
                      your Customer Satisfaction, assess how often they’re being
                      customized or even completely changed. We also gives you
                      visibility and metrics over private and non-official
                      canned responses that your agents created for themselves.
                    </InsightsFeaturesDescription>
                  </div>
                  <img src={TemplateAnalysisIllu} />
                </InsightsTemplateAnalysis>
                <InsightsAgentPerformance>
                  <img src={AgentPerformanceIllu} />
                  <div>
                    <InsightsFeaturesTitle>
                      Agent Performance
                    </InsightsFeaturesTitle>
                    <InsightsFeaturesDescription>
                      Empower your staff to self-assess their performance, in a
                      fair way, while saving the management team lots of
                      analytical time. The Agent Performance dashboard will help
                      your agents interpret their results and how their trends
                      compare to others, giving them access with one click to
                      the comments customers left about their work.
                    </InsightsFeaturesDescription>
                  </div>
                </InsightsAgentPerformance>
              </InsightsFeaturesSection>
            </Breakpoint>
            <Breakpoint medium down>
              <InsightsFeaturesSection>
                <img src={QualityAssuranceIllu} />

                <div>
                  <InsightsFeaturesTitle>
                    Quality Assurance
                  </InsightsFeaturesTitle>
                  <InsightsFeaturesDescription>
                    Explore, navigate, slice and dice your data to validate
                    assumptions, measure performance with a few clicks or
                    compare each element with the average.
                  </InsightsFeaturesDescription>
                </div>
                <img src={CommunicationAnalysisIllu} />

                <div>
                  <InsightsFeaturesTitle>
                    Communication Analysis
                  </InsightsFeaturesTitle>
                  <InsightsFeaturesDescription>
                    Break down each of your key metrics depending on the usage
                    of canned responses. Understand how they are used and how
                    they impact your Customer Satisfaction and productivity.
                    Monitor adherence to communication guidelines and identify
                    optimization to be made.
                  </InsightsFeaturesDescription>
                </div>
                <img src={TemplateAnalysisIllu} />

                <div>
                  <InsightsFeaturesTitle>
                    Template Analysis
                  </InsightsFeaturesTitle>
                  <InsightsFeaturesDescription>
                    Build a healthy library of canned responses, figure out
                    which ones have high re-opening rates, negative impact on
                    your Customer Satisfaction, assess how often they’re being
                    customized or even completely changed. We also gives you
                    visibility and metrics over private and non-official canned
                    responses that your agents created for themselves.
                  </InsightsFeaturesDescription>
                </div>
                <img src={AgentPerformanceIllu} />
                <div>
                  <InsightsFeaturesTitle>
                    Agent Performance
                  </InsightsFeaturesTitle>
                  <InsightsFeaturesDescription>
                    Empower your staff to self-assess their performance, in a
                    fair way, while saving the management team lots of
                    analytical time. The Agent Performance dashboard will help
                    your agents interpret their results and how their trends
                    compare to others, giving them access with one click to the
                    comments customers left about their work.
                  </InsightsFeaturesDescription>
                </div>
              </InsightsFeaturesSection>
            </Breakpoint>
            <InsightsFeaturesMore>
              <InsightsFeaturesMoreTitle>
                More from Insights
              </InsightsFeaturesMoreTitle>
              <InsightsFeaturesMoreCards1>
                <InsightsFeaturesMoreCard>
                  <InsightsFeaturesMoreCardTitle>
                    Artificial Intelligence
                  </InsightsFeaturesMoreCardTitle>
                  <InsightsFeaturesMoreCardDescription>
                    Our unique canned responses analysis relies on Artificial
                    Intelligence to derive new insights.
                  </InsightsFeaturesMoreCardDescription>
                </InsightsFeaturesMoreCard>
                <InsightsFeaturesMoreCard>
                  <InsightsFeaturesMoreCardTitle>
                    Alerts
                  </InsightsFeaturesMoreCardTitle>
                  <InsightsFeaturesMoreCardDescription>
                    Let Insights send you an alert whenever a specific metric
                    deviates from your expectations.
                  </InsightsFeaturesMoreCardDescription>
                </InsightsFeaturesMoreCard>
                <InsightsFeaturesMoreCard>
                  <InsightsFeaturesMoreCardTitle>
                    Period over period analysis
                  </InsightsFeaturesMoreCardTitle>
                  <InsightsFeaturesMoreCardDescription>
                    Insights automatically compares results period over period
                    to understand trends.
                  </InsightsFeaturesMoreCardDescription>
                </InsightsFeaturesMoreCard>
              </InsightsFeaturesMoreCards1>
              <InsightsFeaturesMoreCards2>
                <InsightsFeaturesMoreCard>
                  <InsightsFeaturesMoreCardTitle>
                    Unlimited access
                  </InsightsFeaturesMoreCardTitle>
                  <InsightsFeaturesMoreCardDescription>
                    Grant access to anyone in your company to Insights, no
                    limit.
                  </InsightsFeaturesMoreCardDescription>
                </InsightsFeaturesMoreCard>
                <InsightsFeaturesMoreCard>
                  <InsightsFeaturesMoreCardTitle>
                    Sharing
                  </InsightsFeaturesMoreCardTitle>
                  <InsightsFeaturesMoreCardDescription>
                    Found an interesting insight from your data exploration with
                    Miuros? Share your findings with an URL
                  </InsightsFeaturesMoreCardDescription>
                </InsightsFeaturesMoreCard>
                <InsightsFeaturesMoreCard>
                  <InsightsFeaturesMoreCardTitle>
                    Automated Insights
                  </InsightsFeaturesMoreCardTitle>
                  <InsightsFeaturesMoreCardDescription>
                    Automated data exploration bringing to your attention
                    unprecedented valuable insights.
                  </InsightsFeaturesMoreCardDescription>
                </InsightsFeaturesMoreCard>
              </InsightsFeaturesMoreCards2>
            </InsightsFeaturesMore>
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
            }
          }
          description {
            description
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
