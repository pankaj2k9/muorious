import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from '../atoms/Container'
import LayoutWithThemeProvider from '../layouts/LayoutWithThemeProvider'
import Nav from '../components/Navigation'
import Footer from '../components/Footer'
import CTABlock from '../components/shared/CtaBlock'
import AboutHeroShape from '../atoms/images/AboutHeroShape.svg'

const Main = styled.main``

const Img = styled.img`
  width: 100%;
`

const aboutEntries = [
  {
    year: 2016,
    data: [
      {
        text: 'Benoit, Ricardo & Daniele decide to start a company',
        position: 'left',
      },
      { text: 'Miuros was founded', position: 'right' },
      { text: 'Signed our first customer', position: 'left' },
    ],
  },
  {
    year: 2017,
    data: [
      {
        text: '1st employee, bringing a 4th nationality to the team',
        position: 'right',
      },
      {
        text:
          'Miuros is awared the "Young Innovator Award" by CVC Capital Partner',
        position: 'left',
      },
      { text: 'A round of Angel investment', position: 'right' },
      { text: 'Miuros joined Techstars', position: 'left' },
    ],
  },
  {
    year: 2018,
    data: [
      { text: 'Zendesk Incubator program', position: 'right' },
      { text: 'Seed round closed', position: 'left' },
    ],
  },
  {
    year: 2019,
    data: [
      {
        text:
          'Our 10th employee joined us bringing in an 8th nationality to the team',
        position: 'right',
      },
    ],
  },
]

const AboutOuter = styled.div`
  padding: 40px 60px;
  position: relative;
  &:after {
    content: '';
    background: #ffc509;
    width: 8px;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`
const AboutYearRow = styled.div``
const AboutRecordRow = styled.div`
  overflow: hidden;
`
const AboutYear = styled.h2`
  text-align: center;
  position: relative;
  z-index: 20;
  span {
    background-color: rgb(249, 249, 249);
    font-family: Modern Era;
    font-size: 18px;
    line-height: 35px;
    display: inline-block;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin: 10px 0 30px;
    color: #0d0d0d;
  }
`
const AboutEntry = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: ${({ align }) => (align === 'left' ? 'row' : 'row-reverse')};
  float: ${({ align }) => align};
  position: relative;
  margin-bottom: 40px;
  z-index: 10;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 5px;
    background: #ffc509;
    left: ${({ align }) => (align === 'right' ? '-8px' : 'calc(100% - 8px)')};
  }
`

const AboutText = styled.span`
  max-width: 60%;
  font-family: Modern Era;
  font-size: 16px;
  line-height: 1.8;
  text-align: ${({ align }) => align};
`

const AboutLine = styled.div`
  height: 1px;
  background: rgba(0, 0, 0, 0.5);
  flex-grow: 1;
  margin: 12px 20px;
`

const AboutTimeline = ({ entries }) => {
  console.warn(entries)
  return (
    <AboutOuter>
      {entries.map(record => (
        <AboutYearRow key={record.year}>
          <AboutYear>
            <span>{record.year}</span>
          </AboutYear>
          {record.data.map((item, idx) => (
            <AboutRecordRow>
              <AboutEntry align={item.position} key={idx}>
                <AboutText>{item.text}</AboutText>
                <AboutLine align={item.position} />
              </AboutEntry>
            </AboutRecordRow>
          ))}
        </AboutYearRow>
      ))}
    </AboutOuter>
  )
}

const HeroSection = styled.section`
  height: 90vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #174f49;
  background-image: url(${AboutHeroShape});
  background-size: 40% auto;
  background-position: top left;
  background-repeat: no-repeat;
`

const SectionTitle = styled.h2`
  font-family: Modern Era;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  font-weight: 400;
  color: #000000;
  margin: 30px 0 50px;
`

const HeroText = styled.div`
  max-width: 980px;
  font-family: Modern Era;
  font-size: 28px;
  line-height: 54px;
  font-weight: 400;
  color: #ffffff;
  position: relative;
  p {
    position: relative;
    z-index: 5;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: -90px;
    left: -40px;
    width: 392px;
    height: 317px;
    background-size: cover;
    background-position: center;
    z-index: 0;
    background-image: url('data:image/png;base64,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');
  }
`

const TimelineSection = styled.section`
  background-color: rgb(249, 249, 249);
  padding: 60px 0;
`
const FoundersSection = styled.section`
  padding: 60px 0;
`
const AboutPage = props => {
  const {
    location,
    data: {
      site: {
        siteMetadata: { title },
      },
    },
  } = props
  const content = props.data.allContentfulHomepage.edges[0].node

  return (
    <LayoutWithThemeProvider>
      <React.Fragment>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Nav location={location} transparency />
        <Main>
          <HeroSection>
            <HeroText>
              <p>
                At Miuros, we believe that Customer Support is more than a cost
                center, and we want to help our customers create value out of
                it. We develop smart solutions that unlock and exploit the great
                potential of the most underused corporate asset: the Customer
                Support data.
                <br /> With a better use of this goldmine, we aim to enhance the
                overall customer experience, the efficiency of Support teams and
                to deliver actionable insights to Product Development, Marketing
                and Sales teams.
              </p>
            </HeroText>
          </HeroSection>
          <FoundersSection>
            <Container>
              <SectionTitle>Meet our founders</SectionTitle>
            </Container>
          </FoundersSection>
          <TimelineSection>
            <Container>
              <SectionTitle>A brief history of Miuros</SectionTitle>
              <AboutTimeline entries={aboutEntries} />
            </Container>
          </TimelineSection>
          <CTABlock
            image={content.bottomCtaImage.file.url}
            title={content.bottomCtaTitle}
          />
          <Footer location={location} />
        </Main>
      </React.Fragment>
    </LayoutWithThemeProvider>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
