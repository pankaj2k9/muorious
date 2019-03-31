import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'
import InsightsBenefitsImg from '../atoms/Images/InsightsBenefitsImg.png'

const InsightsHeroSection = styled.section `
    padding-top: 96px;
    height: 600px;
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
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 24px;
    margin-bottom: 20px;
    color: #1B5E57;
`

const InsightsBenefitsContentDescription = styled.p `
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    padding-bottom: 50px;
    color: #000000;
`

const InsightsBenefitsImgSection = styled.div `
    width: 484px;
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
                <Footer />
            </main>
        </React.Fragment>
      </LayoutWithThemeProvider>
    )
  }
}

export default Insights