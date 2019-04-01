import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link } from "gatsby"

import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'
import Button from '../atoms/Button'
import Section from '../atoms/Section/Section'
import { H1, H3DIFF, TextXSmall , TextBig, TextHighlighter } from '../atoms/Texts'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import { Container, WideContainer  } from '../atoms/Container'
import { AssistHeroImg, AssistSideImg } from'../atoms/Images/Images.jsx'
import Note from '../atoms/Note'
import Testimonials from '../components/Testimonials'

import AutomaticCategorizationImg from '../atoms/Images/AutomaticCategorizationImg.png'
import TemplateRecommandationImg from '../atoms/Images/TemplateRecommandationImg.svg'

const AssistFeaturesSection = styled.section `
    height: 1100px;
    width: 1100px;
    margin: 0 auto;
`

const AssistFeature1 = styled.div `
    display: flex;
    margin-top: 100px;
    @media (max-width: 992px) {
        flex-direction: column;
    }
`

const AssistFeature1Content = styled.div `
    width: 483px;
    margin-right: 75px;
    @media (max-width: 992px) {
        margin-right: 0px;
        max-width: 100vw;
    }
`

const AssistFeature1Title = styled.div `
    font-weight: 600;
    font-size: 38px;
    line-height: 48px;
    color: #000000;
`

const AssistFeature1Description = styled.div `
    font-size: 18px;
    padding-top: 30px;
    line-height: 32px;
    color: #000000;
`

const AssistFeature1Img = styled.div `

`

const AssistFeature2 = styled.div `
    margin: 0 auto;
`

const AssistFeature2Title = styled.div `
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

const AssistFeature2Description = styled.div `
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #4D4D4D;
    margin-bottom: 40px;
    @media (max-width: 992px) {
        max-width: 100vw;
    }
`

const AssistFeature2Details = styled.div `
    display: flex;
    @media (max-width: 992px) {
        flex-direction: column;
        width: 100vw;
    }
`
const AssistFeature2DetailsTitle = styled.h3 `
    font-weight: 600;
    font-size: 18px;
    line-height: 48px;
    color: #000000;
`

const AssistFeature2DetailsDescription = styled.p `
    font-size: 16px;
    line-height: 32px;
    color: #606060;
    @media (max-width: 992px) {
        line-height: 20px;
    }
`

const AssistFeature2DetailsCard = styled.div `
    margin-left: 50px;
    margin-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    height: 126px;
    width: 539px;
    border-left: solid 8px #FFC509;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    @media (max-width: 992px) {
        width: 100vw;
        margin: 10px 0px;
        padding: 5px;
    }
`

const AssistFeature2Img = styled.div `
    padding-top: 70px;
`

const AssistFeature2Button = styled.button `
    margin-left: 180px;
    margin-top: 20px;
    height: 48px;
    width: 200px;
    background-color: #FFC509;
    border: solid 0px;
`

const AssistFeature2ButtonText = styled.p `
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: white;
`

// MORE ABOUT ASSIST

const AssistFeaturesMoreSection = styled.section `
    width: 1110px;
    margin: 0 auto;
    padding-top: 80px;
    margin-bottom: 100px;
    @media (max-width: 992px) {
        padding-top: 900px;
    }
`

const AssistFeaturesMoreTitle = styled.h3 `
    margin: 0 auto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #000000;
    padding-bottom: 20px;
    @media (max-width: 992px) {
        margin: 0;
        width: 100vw;
    }
`

const AssistFeaturesMoreCards = styled.div `
    display: flex;
    margin: auto 0;
    @media (max-width: 992px) {
        flex-direction: column;
    }
`

const AssistFeaturesMoreCard = styled.div `
    width: 347px;
    height: 203px;
    margin: 16px 15px;
    border-top: solid #FFC509 11px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
`

const AssistFeaturesMoreCardTitle = styled.h4 `
    font-size: 24px;
    line-height: 32px;
    color: #000000;
    font-family: 'Muli';
    padding: 20px 20px;
`

const AssistFeaturesMoreCardDescription = styled.p `
    font-family: 'Muli';
    font-size: 18px;
    line-height: 32px;
    color: #828282;
    padding: 0 20px;
`

class Assist extends React.Component {
    render() {
        const content = this.props.data.allContentfulFeaturePageTemplate1.edges[0].node
        const siteTitle = `${content.title} - ${get(this, 'props.data.site.siteMetadata.title')}`
        return (
            <LayoutWithThemeProvider>
                <React.Fragment>
                    <Helmet>
                    <title>{siteTitle}</title>
                    </Helmet>
                    <main> 
                        <Nav isGreen />
                        <Section assistHero>
                            <Container>
                                <Row>
                                    <Col center>
                                        <H1 center>{content.tagline}</H1>
                                        <TextBig color="grey4" center>{content.description.description}</TextBig>
                                        <AssistHeroImg />
                                    </Col>
                                </Row>
                            </Container>
                        </Section>
                        <Section benefits>
                            <WideContainer>
                                    <Col benefitImg benefit bgi={content.benefitsImage.file.url}/>
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
                        <Testimonials />
                        <AssistFeaturesSection>
                            <AssistFeature1>
                                <AssistFeature1Content>
                                    <AssistFeature1Title>Automatic Categorization</AssistFeature1Title>
                                    <AssistFeature1Description>Your customer service data can be a gold mine when agents properly tag and categorize their tickets. When they are not, it can be pretty difficult to extract meaningful insights. Miuros uses AI to automatically identify the ticket category and apply the proper one to it.</AssistFeature1Description>
                                </AssistFeature1Content>
                                <AssistFeature1Img><img src={AutomaticCategorizationImg}></img></AssistFeature1Img>
                            </AssistFeature1>
                            <AssistFeature2>
                                <AssistFeature2Title>Template Recommandation</AssistFeature2Title>
                                <AssistFeature2Description>You have spent hours building a library of templates tailored to specific requests and problems you have identified. You know they perform well. Miuros helps your agents take better advantage of it.</AssistFeature2Description>
                                <AssistFeature2Details>
                                    <AssistFeature2Img>
                                        <img src={TemplateRecommandationImg}></img>
                                        <Link to="/categorization-whitepaper"><AssistFeature2Button><AssistFeature2ButtonText>Read our whitepaper</AssistFeature2ButtonText></AssistFeature2Button></Link>
                                    </AssistFeature2Img>
                                    <div>
                                        <AssistFeature2DetailsCard>
                                            <AssistFeature2DetailsTitle>Tailored Engine</AssistFeature2DetailsTitle>
                                            <AssistFeature2DetailsDescription>We are building dedicated models for each of our customers so it’s tailored and optimized for your data.</AssistFeature2DetailsDescription>
                                        </AssistFeature2DetailsCard>
                                        <AssistFeature2DetailsCard>
                                            <AssistFeature2DetailsTitle>Advanced Search</AssistFeature2DetailsTitle>
                                            <AssistFeature2DetailsDescription>Save precious seconds on each ticket by letting your agents search for canned responses by content and not just by title. </AssistFeature2DetailsDescription>
                                        </AssistFeature2DetailsCard>
                                        <AssistFeature2DetailsCard>
                                            <AssistFeature2DetailsTitle>Warnings</AssistFeature2DetailsTitle>
                                            <AssistFeature2DetailsDescription>Avoid template repetition by warning agents when a specific canned response was already used on a ticket.</AssistFeature2DetailsDescription>
                                        </AssistFeature2DetailsCard>
                                    </div>
                                </AssistFeature2Details>
                            </AssistFeature2>
                        </AssistFeaturesSection>
                        <AssistFeaturesMoreSection>
                            <AssistFeaturesMoreTitle>More from Assist</AssistFeaturesMoreTitle>
                            <AssistFeaturesMoreCards>
                                <AssistFeaturesMoreCard>
                                    <AssistFeaturesMoreCardTitle>Multi-lingual</AssistFeaturesMoreCardTitle>
                                    <AssistFeaturesMoreCardDescription>Miuros is multi-lingual, making it the perfect AI-solution for your international Customer Support team.</AssistFeaturesMoreCardDescription>
                                </AssistFeaturesMoreCard>
                                <AssistFeaturesMoreCard>
                                    <AssistFeaturesMoreCardTitle>Automate Replies</AssistFeaturesMoreCardTitle>
                                    <AssistFeaturesMoreCardDescription>Let Assist automatically send replies for you based on your best-performing canned responses.</AssistFeaturesMoreCardDescription>
                                </AssistFeaturesMoreCard>
                                <AssistFeaturesMoreCard>
                                    <AssistFeaturesMoreCardTitle>Agents Administration</AssistFeaturesMoreCardTitle>
                                    <AssistFeaturesMoreCardDescription>Easy and configurable agents management settings built with medium and large customer service teams in mind.</AssistFeaturesMoreCardDescription>
                                </AssistFeaturesMoreCard>
                            </AssistFeaturesMoreCards>
                        </AssistFeaturesMoreSection>
                        <Footer />
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
