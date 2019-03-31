import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'

import InsightsHeroImg from '../atoms/Images/InsightsHeroImg.png'
import InsightsBenefitsImg from '../atoms/Images/InsightsBenefitsImg.png'

import QualityAssuranceIllu from '../atoms/Images/QualityAssuranceIllu.png'
import CommunicationAnalysisIllu from '../atoms/Images/CommunicationAnalysisIllu.png'
import TemplateAnalysisIllu from '../atoms/Images/TemplateAnalysisIllu.png'
import AgentPerformanceIllu from '../atoms/Images/AgentPerformanceIllu.png'

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

const InsightsFeaturesSection = styled.section `
    height: 2000px;
    max-width: 1440px;
    padding-top: 120px;
    margin: 0 auto;
`

const InsightsQualityAssurance = styled.div `
    display: flex;
`

const InsightsFeaturesTitle = styled.h3 `
    font-weight: 600;
    font-size: 38px;
    line-height: 48px;
    color: #000000;
    margin-right: 100px;
    margin-left: 100px;
`

const InsightsFeaturesDescription = styled.p `
    width: 470px;
    font-size: 18px;
    line-height: 32px;
    color: #000000;
    margin-right: 100px;
    margin-left: 100px;
`

const InsightCommunicationAnalysis = styled.div `
    display: flex;
    margin-top: 120px;
`

const InsightsTemplateAnalysis = styled.div `
    display: flex;
    margin-top: 120px;
`

const InsightsAgentPerformance = styled.div `
    display: flex;
    margin-top: 120px;
`

const InsightsFeaturesMore = styled.section `
    width: 1110px;
    margin: 0 auto;
    padding-top: 80px;
`

const InsightsFeaturesMoreTitle = styled.h3 `
    margin: 0 auto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #000000;
    padding-bottom: 20px;
`

const InsightsFeaturesMoreCards1 = styled.div `
    display: flex;
    margin: auto 0;
`

const InsightsFeaturesMoreCards2 = styled.div `
    display: flex;
    padding-bottom: 70px;
`

const InsightsFeaturesMoreCard = styled.div `
    width: 347px;
    height: 203px;
    margin: 16px 15px;
    border-top: solid #1B5E57 11px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
`

const InsightsFeaturesMoreCardTitle = styled.h4 `
    font-size: 24px;
    line-height: 32px;
    color: #000000;
    font-family: 'Muli';
    padding: 20px 20px;
`

const InsightsFeaturesMoreCardDescription = styled.p `
    font-family: 'Muli';
    font-size: 18px;
    line-height: 32px;
    color: #828282;
    padding: 0 20px;
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
                <InsightsFeaturesSection>
                    <InsightsQualityAssurance>
                        <div>
                            <InsightsFeaturesTitle>Quality Assurance</InsightsFeaturesTitle>
                            <InsightsFeaturesDescription>Explore, navigate, slice and dice your data to validate assumptions, measure performance with a few clicks or compare each element with the average.</InsightsFeaturesDescription>
                        </div>
                        <img src={QualityAssuranceIllu}></img>
                    </InsightsQualityAssurance>
                    <InsightCommunicationAnalysis>
                    <img src={CommunicationAnalysisIllu}></img>
                        <div>
                            <InsightsFeaturesTitle>Communication Analysis</InsightsFeaturesTitle>
                            <InsightsFeaturesDescription>Break down each of your key metrics depending on the usage of canned responses. Understand how they are used and how they impact your Customer Satisfaction and productivity. Monitor adherence to communication guidelines and identify optimization to be made.</InsightsFeaturesDescription>
                        </div>
                    </InsightCommunicationAnalysis>
                    <InsightsTemplateAnalysis>
                        <div>
                            <InsightsFeaturesTitle>Template Analysis</InsightsFeaturesTitle>
                            <InsightsFeaturesDescription>Build a healthy library of canned responses, figure out which ones have high re-opening rates, negative impact on your Customer Satisfaction, assess how often they’re being customized or even completely changed. 
We also gives you visibility and metrics over private and non-official canned responses that your agents created for themselves.</InsightsFeaturesDescription>
                        </div>
                        <img src={TemplateAnalysisIllu}></img>
                    </InsightsTemplateAnalysis>
                    <InsightsAgentPerformance>
                        <img src={AgentPerformanceIllu}></img>
                        <div>
                            <InsightsFeaturesTitle>Agent Performance</InsightsFeaturesTitle>
                            <InsightsFeaturesDescription>Empower your staff to self-assess their performance, in a fair way, while saving the management team lots of analytical time. The Agent Performance dashboard will help your agents interpret their results and how their trends compare to others, giving them access with one click to the comments customers left about their work.</InsightsFeaturesDescription>
                        </div>
                    </InsightsAgentPerformance>
                </InsightsFeaturesSection>
                <InsightsFeaturesMore>
                    <InsightsFeaturesMoreTitle>More from Insights</InsightsFeaturesMoreTitle>
                    <InsightsFeaturesMoreCards1>
                        <InsightsFeaturesMoreCard>
                            <InsightsFeaturesMoreCardTitle>Artificial Intelligence</InsightsFeaturesMoreCardTitle>
                            <InsightsFeaturesMoreCardDescription>Our unique canned responses analysis relies on Artificial Intelligence to derive new insights.</InsightsFeaturesMoreCardDescription>
                        </InsightsFeaturesMoreCard>
                        <InsightsFeaturesMoreCard>
                            <InsightsFeaturesMoreCardTitle>Alerts</InsightsFeaturesMoreCardTitle>
                            <InsightsFeaturesMoreCardDescription>Let Insights send you an alert whenever a specific metric deviates from your expectations.</InsightsFeaturesMoreCardDescription>
                        </InsightsFeaturesMoreCard>
                        <InsightsFeaturesMoreCard>
                            <InsightsFeaturesMoreCardTitle>Period over period analysis</InsightsFeaturesMoreCardTitle>
                            <InsightsFeaturesMoreCardDescription>Insights automatically compares results period over period to understand trends.</InsightsFeaturesMoreCardDescription>
                        </InsightsFeaturesMoreCard>
                    </InsightsFeaturesMoreCards1>
                    <InsightsFeaturesMoreCards2>
                        <InsightsFeaturesMoreCard>
                            <InsightsFeaturesMoreCardTitle>Unlimited access</InsightsFeaturesMoreCardTitle>
                            <InsightsFeaturesMoreCardDescription>Grant access to anyone in your company to Insights, no limit.</InsightsFeaturesMoreCardDescription>
                        </InsightsFeaturesMoreCard>
                        <InsightsFeaturesMoreCard>
                            <InsightsFeaturesMoreCardTitle>Sharing</InsightsFeaturesMoreCardTitle>
                            <InsightsFeaturesMoreCardDescription>Found an interesting insight from your data exploration with Miuros? Share your findings with an URL</InsightsFeaturesMoreCardDescription>
                        </InsightsFeaturesMoreCard>
                        <InsightsFeaturesMoreCard>
                            <InsightsFeaturesMoreCardTitle>Automated Insights</InsightsFeaturesMoreCardTitle>
                            <InsightsFeaturesMoreCardDescription>Automated data exploration bringing to your attention unprecedented valuable insights.</InsightsFeaturesMoreCardDescription>
                        </InsightsFeaturesMoreCard>
                    </InsightsFeaturesMoreCards2>
                </InsightsFeaturesMore>
                <Footer />
            </main>
        </React.Fragment>
      </LayoutWithThemeProvider>
    )
  }
}

export default Insights