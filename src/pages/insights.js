import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'

const HeroSection = styled.section `
    padding-top: 96px;
    height: 900px;
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
                <HeroSection>
                    <InsightsHeroTitle>Deliver better customer service from new actionable <span>Insights</span></InsightsHeroTitle>
                    <InsightsHeroDescription>Insights is an analytical solution for international customer service teams that helps managers identify areas for improvement, and empower agents to self-assess their performance.</InsightsHeroDescription>
                </HeroSection>
                <Footer />
            </main>
        </React.Fragment>
      </LayoutWithThemeProvider>
    )
  }
}

export default Insights