import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled, { css } from 'styled-components'


import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'
import Breakpoint from '../components/layout/Breakpoint'
import RequestDemoButton from '../components/shared/RequestDemoButton'
import Section from '../atoms/Section/Section'
import HeroSection from '../components/shared/HeroSection'
import { H1, H3DIFF, TextXSmall, TextBig, TextHighlighter } from '../atoms/Texts'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import { Container, WideContainer } from '../atoms/Container'
import AssistHeroImage from '../atoms/Images/AssistHeroImg.png'
import { AssistSideImg } from '../atoms/Images/Images.jsx'
import Note from '../atoms/Note'
import Testimonials from '../components/Testimonials'

import AutomaticCategorizationImg from '../atoms/Images/AutomaticCategorizationImg.png'
import TemplateRecommandationImg from '../atoms/Images/TemplateRecommandationImg.svg'

const AssistFeaturesSection = styled.section`
    height: 1100px;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    @media(max-width: 992px) {
      height: auto;
    }
`

const assistFeatureMobileCSS = css`
@media (max-width: 992px) {
        flex-direction: column;
        padding: 15px;
        img {
          width: 100%;
          height: auto;
        }
        h3 {
          font-family: Modern Era;
          font-size: 24px;
          line-height: 1.5;
          color: #000000;
          margin: 20px 0;
        }
        p {
          font-family: Modern Era;
          font-size: 16px;
          line-height: 1.5;
          color: #606060;
          margin-bottom: 10px;
        }
    } 
`

const AssistFeature1 = styled.div`
    display: flex;
    margin-top: 100px;
    ${assistFeatureMobileCSS}
`

const AssistFeature1Content = styled.div`
    width: 483px;
    margin-right: 75px;
    @media (max-width: 992px) {
        margin-right: 0px;
        max-width: 100vw;
    }
`

const AssistFeature1Title = styled.div`
    font-weight: 600;
    font-size: 38px;
    line-height: 48px;
    color: #000000;
`

const AssistFeature1Description = styled.div`
    font-size: 18px;
    padding-top: 30px;
    line-height: 32px;
    color: #000000;
`

const AssistFeature1Img = styled.div`
    img {
        @media (max-width: 992px) {
            max-width: 90vw;
        }
    }
`

const AssistFeature2 = styled.div`
    margin: 0 auto;
    ${assistFeatureMobileCSS}
`

const AssistFeature2Title = styled.div`
    font-weight: 600;
    padding-top: 80px;
    text-align: center;
    font-size: 38px;
    line-height: 48px;
    color: #000000;
    @media (max-width: 992px) {
        max-width: 100vw;
    }
`

const AssistFeature2Description = styled.div`
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #4D4D4D;
    margin-bottom: 40px;
    @media (max-width: 992px) {
        max-width: 100vw;
    }
`

const AssistFeature2Details = styled.div`
    display: flex;
    @media (max-width: 992px) {
        flex-direction: column;
        width: 100vw;
    }
`
const AssistFeature2DetailsTitle = styled.h3`
    font-weight: 600;
    font-size: 18px;
    line-height: 48px;
    color: #000000;
`

const AssistFeature2DetailsDescription = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #606060;
    @media (max-width: 992px) {
        line-height: 20px;
    }
`

const AssistFeature2DetailsCard = styled.div`
    margin-left: 50px;
    margin-top: 40px;
    padding: 12px 40px;
    max-width: 539px;
    width: 100vw;
    border-left: solid 8px #FFC509;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    @media (max-width: 992px) {
        width: 100%;
        margin: 10px 0px;
        padding: 5px;
        padding-left: 10px;
    }
`

const AssistFeature2Img = styled.div`
    padding-top: 70px;
    @media (max-width: 992px) {
      padding-top: 0;
      img {
            max-width: 90vw;
        }
    }
`

const AssistFeature2Button = styled.button`
    margin-left: 180px;
    margin-top: 20px;
    height: 48px;
    max-width: 200px;
    background-color: #FFC509;
    border: solid 0px;
    @media (max-width: 992px) {
        margin: 0 auto;
    }
`

const AssistFeature2ButtonText = styled.p`
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: white;
`

// TODO: MORE ABOUT ASSIST

const AssistFeaturesMoreSection = styled.section`
    max-width: 1110px;
    width: 100%;
    margin: 0 auto;
    padding-top: 80px;
    margin-bottom: 100px;
    font-family: Modern Era, sans-serif;
    
`

const AssistFeaturesMoreTitle = styled.h3`
    margin: 0 auto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #000000;
    padding-bottom: 20px;
    font-family: Modern Era, sans-serif;
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
    border-top: solid #FFC509 11px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
    @media (max-width: 992px) {
        width: calc(100% - 30px);
    }
`

const AssistFeaturesMoreCardTitle = styled.h4`
    font-size: 24px;
    line-height: 32px;
    color: #000000;
    font-family: Modern Era, sans-serif;
    padding: 20px 20px;
`

const AssistFeaturesMoreCardDescription = styled.p`
    font-family: Modern Era, sans-serif;
    font-size: 18px;
    line-height: 32px;
    color: #828282;
    padding: 0 20px;
`

class Assist extends React.Component {
  render() {
    const content = this.props.data.allContentfulFeaturePageTemplate1.edges[0].node
    const siteTitle = `${content.title} - ${get(this, 'props.data.site.siteMetadata.title')}`

    let quotesData = []
    try {
      quotesData = this.props.data.allContentfulFeaturePageTemplate1.edges[0].node.quotes
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
            <HeroSection assistHero>
              <Container>
                <Row>
                  <Col center>
                    <H1 bold center>{content.tagline}</H1>
                    <TextBig color="grey4" center>{content.description.description}</TextBig>
                    <Breakpoint medium down><RequestDemoButton /></Breakpoint>
                    <HeroSection.Img src={AssistHeroImage} />
                  </Col>
                </Row>
              </Container>
            </HeroSection>
            <Section benefits>
              <WideContainer>
                <Breakpoint medium up><Col benefitImg benefit bgi={content.benefitsImage.file.url} /></Breakpoint>
                <Col benefit>
                  <div>
                    <H3DIFF color="green">{content.benefit1Title}</H3DIFF>
                    <TextXSmall color="gray1">{content.benefit1Description.benefit1Description}</TextXSmall>
                  </div>
                  <div>
                    <H3DIFF color="green">{content.benefit2Title}</H3DIFF>
                    <TextXSmall color="gray1">{content.benefit2Description.benefit2Description}</TextXSmall>
                  </div>
                  <div>
                    <H3DIFF color="green">{content.benefit3Title}</H3DIFF>
                    <TextXSmall color="gray1">{content.benefit3Description.benefit3Description}</TextXSmall>
                  </div>
                </Col>
              </WideContainer>
            </Section>
            <Testimonials color="yellow" withData data={quotesData} />
            <AssistFeaturesSection>
              <Breakpoint medium up>
                <>
                  <AssistFeature1>
                    <AssistFeature1Content>
                      <AssistFeature1Title>{content.feature1Title}</AssistFeature1Title>
                      <AssistFeature1Description>{content.feature1Description.feature1Description}</AssistFeature1Description>
                    </AssistFeature1Content>
                    <AssistFeature1Img><img src={AutomaticCategorizationImg}></img></AssistFeature1Img>
                  </AssistFeature1>
                  <AssistFeature2>
                    <AssistFeature2Title>{content.feature2Title}</AssistFeature2Title>
                    <AssistFeature2Description>{content.feature2Description.feature2Description}</AssistFeature2Description>
                    <AssistFeature2Details>
                      <AssistFeature2Img>
                        <img src={TemplateRecommandationImg}></img>
                      </AssistFeature2Img>
                      <div>
                        <AssistFeature2DetailsCard>
                          <AssistFeature2DetailsTitle>{content.feature2SubTitle1}</AssistFeature2DetailsTitle>
                          <AssistFeature2DetailsDescription>{content.feature2SubDescription1.feature2SubDescription1}</AssistFeature2DetailsDescription>
                        </AssistFeature2DetailsCard>
                        <AssistFeature2DetailsCard>
                          <AssistFeature2DetailsTitle>{content.feature2SubTitle2}</AssistFeature2DetailsTitle>
                          <AssistFeature2DetailsDescription>{content.feature2SubDescription2.feature2SubDescription2}</AssistFeature2DetailsDescription>
                        </AssistFeature2DetailsCard>
                        <AssistFeature2DetailsCard>
                          <AssistFeature2DetailsTitle>{content.feature2SubTitle3}</AssistFeature2DetailsTitle>
                          <AssistFeature2DetailsDescription>{content.feature2SubDescription3.feature2SubDescription3}</AssistFeature2DetailsDescription>
                        </AssistFeature2DetailsCard>
                      </div>
                    </AssistFeature2Details>
                  </AssistFeature2>
                </>
              </Breakpoint>
              <Breakpoint medium down>
                <>
                  <AssistFeature1>
                    <h3>Automatic Categorization</h3>
                    <p>Your customer service data can be a gold mine when agents properly tag and categorize their tickets. When they are not, it can be pretty difficult to extract meaningful insights. Miuros uses AI to automatically identify the ticket category and apply the proper one to it.</p>
                    <img src={AutomaticCategorizationImg}></img>
                  </AssistFeature1>
                  <AssistFeature2>
                    <h3>Template Recommandation</h3>
                    <p>You have spent hours building a library of templates tailored to specific requests and problems you have identified. You know they perform well. Miuros helps your agents take better advantage of it.</p>
                    <AssistFeature2Details>
                      <AssistFeature2Img>
                        <img src={TemplateRecommandationImg}></img>
                      </AssistFeature2Img>
                      <div style={{ width: 'calc(100% - 30px)' }}>
                      <AssistFeature2DetailsCard>
                          <AssistFeature2DetailsTitle>{content.feature2SubTitle1}</AssistFeature2DetailsTitle>
                          <AssistFeature2DetailsDescription>{content.feature2SubDescription1.feature2SubDescription1}</AssistFeature2DetailsDescription>
                        </AssistFeature2DetailsCard>
                        <AssistFeature2DetailsCard>
                          <AssistFeature2DetailsTitle>{content.feature2SubTitle2}</AssistFeature2DetailsTitle>
                          <AssistFeature2DetailsDescription>{content.feature2SubDescription2.feature2SubDescription2}</AssistFeature2DetailsDescription>
                        </AssistFeature2DetailsCard>
                        <AssistFeature2DetailsCard>
                          <AssistFeature2DetailsTitle>{content.feature2SubTitle3}</AssistFeature2DetailsTitle>
                          <AssistFeature2DetailsDescription>{content.feature2SubDescription3.feature2SubDescription3}</AssistFeature2DetailsDescription>
                        </AssistFeature2DetailsCard>
                      </div>
                    </AssistFeature2Details>
                  </AssistFeature2>
                </>
              </Breakpoint>
            </AssistFeaturesSection>
            <AssistFeaturesMoreSection>
              <AssistFeaturesMoreTitle>{content.moreTitle}</AssistFeaturesMoreTitle>
              <AssistFeaturesMoreCards>
                <AssistFeaturesMoreCard>
                  <AssistFeaturesMoreCardTitle>{content.moreFeature1Title}</AssistFeaturesMoreCardTitle>
                  <AssistFeaturesMoreCardDescription>{content.moreFeature1Description.moreFeature1Description}</AssistFeaturesMoreCardDescription>
                </AssistFeaturesMoreCard>
                <AssistFeaturesMoreCard>
                  <AssistFeaturesMoreCardTitle>{content.moreFeature2Title}</AssistFeaturesMoreCardTitle>
                  <AssistFeaturesMoreCardDescription>{content.moreFeature2Description.moreFeature2Description}</AssistFeaturesMoreCardDescription>
                </AssistFeaturesMoreCard>
                <AssistFeaturesMoreCard>
                  <AssistFeaturesMoreCardTitle>{content.moreFeature3Title}</AssistFeaturesMoreCardTitle>
                  <AssistFeaturesMoreCardDescription>{content.moreFeature3Description.moreFeature3Description}</AssistFeaturesMoreCardDescription>
                </AssistFeaturesMoreCard>
              </AssistFeaturesMoreCards>
            </AssistFeaturesMoreSection>
            <Footer location={this.props.location} />
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
        feature2SubTitle1
        feature2SubTitle2
        feature2SubTitle3
        feature2SubDescription1 {
          feature2SubDescription1
        }
        feature2SubDescription2 {
          feature2SubDescription2
        }
        feature2SubDescription3 {
          feature2SubDescription3
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
