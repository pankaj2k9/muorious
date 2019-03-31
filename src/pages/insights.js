import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'

import InsightsHeroImg from '../atoms/Images/InsightsHeroImg.png'
import InsightsBenefitsImg from '../atoms/Images/InsightsBenefitsImg.png'

const InsightsHeroSection = styled.section `
    padding-top: 96px;
    height: 1100px;
    width: 1000px;
    margin: 0 auto;
`

const InsightsHeroTitle = styled.h1 `
    width: 723px;
    padding-top: 93px;
    text-align: center;
    color: #0D0D0D;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    margin: 0 auto;
`

const InsightsHeroDescription = styled.p `
    width: 877px;
    font-family: Modern Era;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    margin: 0 auto;
    color: #4D4D4D;
`

const InsightsHeroImgSection = styled.div `
    padding-top: 50px;
`

const InsightsBenefitsSection = styled.section `
    height: 1003px;
    max-width: 1440px;
    display: flex;
    margin: 0 auto;
`

const InsightsBenefitsContent = styled.div `
    width: 484px;
    padding-top: 100px;
    margin-right: 130px;
`

const InsightsBenefitsContentTitle = styled.h3 `
    font-size: 36px;
    line-height: 24px;
    margin-bottom: 20px;
    color: #1B5E57;
`

const InsightsBenefitsContentDescription = styled.p `
    font-size: 18px;
    line-height: 32px;
    padding-bottom: 50px;
    color: #000000;
`

const InsightsBenefitsImgSection = styled.div `
    width: 484px;
`

const InsightsQuotesSection = styled.section `
    height: 472px;
    background-color: #174F49;
`

const InsightsDasboardsSection = styled.section `
    height: 1200px;
`

const InsightsFeaturesSection = styled.section `
    height: 1200px;
`

const InsightsQualityAssurance = styled.div `
    display: flex;
`

const InsightCommunicationAnalysis = styled.div `
    display: flex;
`

const InsightsTemplateAnalysis = styled.div `
    display: flex;
`

const InsightsAgentPerformance = styled.div `
    display: flex;
`

class Insights extends React.Component {
  render() {
    return (
      <LayoutWithThemeProvider>
        <React.Fragment>
            <Helmet>
                <title>Miuros Insights</title>
            </Helmet>
            <main>
                <Nav />
                <InsightsHeroSection>
                    <InsightsHeroTitle>Deliver better customer service from new actionable <span>Insights</span></InsightsHeroTitle>
                    <InsightsHeroDescription>Insights is an analytical solution for international customer service teams that helps managers identify areas for improvement, and empower agents to self-assess their performance.</InsightsHeroDescription>
                    <InsightsHeroImgSection>
                        <img src={InsightsHeroImg}></img>
                    </InsightsHeroImgSection>
                </InsightsHeroSection>
                <InsightsBenefitsSection>
                    <InsightsBenefitsContent>
                        <div>
                            <InsightsBenefitsContentTitle>Make data-driven decisions</InsightsBenefitsContentTitle>
                            <InsightsBenefitsContentDescription>Benefit from a sophisticated but intuitive A.I. powered analytical solution to make faster, data-driven decisions. Insights is your personal data scientist, your dependancy on other departments for data analysis is finally be over.</InsightsBenefitsContentDescription>
                        </div>
                        <div>
                        <InsightsBenefitsContentTitle>Save hours every week</InsightsBenefitsContentTitle>
                            <InsightsBenefitsContentDescription>Consume actionable information brought to your attention automatically by Insights. Discover in minutes, instead of hours, new insights revealed by our AI and derive actions to improve your operations and people.</InsightsBenefitsContentDescription>
                        </div>
                        <div>
                            <InsightsBenefitsContentTitle>Empower your agents</InsightsBenefitsContentTitle>
                            <InsightsBenefitsContentDescription>Let your agents self-assess their performance with the Miuros Smart Benchmark, a new and fair way to measure performance.</InsightsBenefitsContentDescription>
                        </div>
                    </InsightsBenefitsContent>
                    <InsightsBenefitsImgSection>
                        <img src={InsightsBenefitsImg}></img>
                    </InsightsBenefitsImgSection>
                </InsightsBenefitsSection>
                <InsightsQuotesSection />
                <InsightsDasboardsSection />
                <InsightsFeaturesSection>
                    <InsightsQualityAssurance>
                        <div>
                            <div>Quality Assurance</div>
                            <div>Explore, navigate, slice and dice your data to validate assumptions, measure performance with a few clicks or compare each element with the average.</div>
                        </div>
                        <div>IMG</div>
                    </InsightsQualityAssurance>
                    <InsightCommunicationAnalysis>
                        <div>IMG</div>
                        <div>
                            <div>Communication Analysis</div>
                            <div>Break down each of your key metrics depending on the usage of canned responses. Understand how they are used and how they impact your Customer Satisfaction and productivity. Monitor adherence to communication guidelines and identify optimization to be made.</div>
                        </div>
                    </InsightCommunicationAnalysis>
                    <InsightsTemplateAnalysis>
                        <div>
                            <div>Template Analysis</div>
                            <div>Build a healthy library of canned responses, figure out which ones have high re-opening rates, negative impact on your Customer Satisfaction, assess how often they’re being customized or even completely changed. 
We also gives you visibility and metrics over private and non-official canned responses that your agents created for themselves.</div>
                        </div>
                        <div>IMG</div>
                    </InsightsTemplateAnalysis>
                    <InsightsAgentPerformance>
                        <div>IMG</div>
                        <div>
                            <div>Agent Performance</div>
                            <div>Empower your staff to self-assess their performance, in a fair way, while saving the management team lots of analytical time. The Agent Performance dashboard will help your agents interpret their results and how their trends compare to others, giving them access with one click to the comments customers left about their work.</div>
                        </div>
                    </InsightsAgentPerformance>
                </InsightsFeaturesSection>
                <Footer />
            </main>
        </React.Fragment>
      </LayoutWithThemeProvider>
    )
  }
}

export default Insights