import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

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
`

const AssistFeature1Content = styled.div `
    width: 483px;
    margin-right: 75px;
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
`

const AssistFeature2Description = styled.div `
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #4D4D4D;
`

const AssistFeature2Details = styled.div `
    display: flex;
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
                                    <Col benefit bgi={content.benefitsImage.file.url}/>
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
                                    <div>
                                    <img src={TemplateRecommandationImg}></img>
                                        <div>Read our whitepaper</div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>Tailored Engine</div>
                                            <div>We are building dedicated models for each of our customers so it’s tailored and optimized for your data.</div>
                                        </div>
                                        <div>
                                            <div>Advanced Search</div>
                                            <div>Save precious seconds on each ticket by letting your agents search for canned responses by content and not just by title. </div>
                                        </div>
                                        <div>
                                            <div>Warnings</div>
                                            <div>Avoid template repetition by warning agents when a specific canned response was already used on a ticket.</div>
                                        </div>
                                    </div>
                                </AssistFeature2Details>
                            </AssistFeature2>
                        </AssistFeaturesSection>
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
