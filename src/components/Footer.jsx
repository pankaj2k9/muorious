import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../atoms/Logo/Logo'
import LinkedinLogo from '../atoms/Logo/Linkedin-Logo.png'
import TwitterLogo from '../atoms/Logo/Twitter-Logo.png'
import ZendeskLogo from '../atoms/Logo/Zendesk-Logo.png'
import TechstarsLogo from '../atoms/Logo/Techstars-Logo.png'
import TheFamilyLogo from '../atoms/Logo/TheFamily-Logo.png'
import Breakpoint from '../components/layout/Breakpoint'
import Visible from '../atoms/Visible'
import Hidden from '../atoms/Hidden'
import Scrollchor from 'react-scrollchor'

const FooterSection = styled.section`
  background-color: #174f49;
  color: white;
  display: flex;
  width: 100%;
  padding: 50px 0;
  @media (max-width: 992px) {
    padding: 40px 20px;
  }
`

const FooterContent = styled.div`
  display: flex;
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`

const FooterMiurosAsset = styled.div`
  @media (max-width: 992px) {
    flex-basis: 100%;
    min-width: 100%;
    width: 100%;
    div hr {
      max-width: 80%;
    }
    div,
    div hr,
    a {
      display: flex;
      justify-content: center;
      margin: 20px 0px;
    }
  }
`

const FooterMiurosSocialMedia = styled.div`
  display: flex;
  margin-top: 20px;
  img {
    width: 20px;
    height: auto;
  }
`

const FooterTwitterLogo = styled.img`
  margin-right: 20px;
`

const FooterFeatures = styled.div`
  margin-right: 120px;
  line-height: 32px;
  a {
    color: white;
  }
`

const FooterFeaturesDetails = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  a {
    color: white;
    font-weight: 300;
    line-height: 2.2;
  }
`

const FooterCompany = styled.div`
  margin-right: 120px;
  line-height: 32px;
  display: flex;
  flex-direction: column;
  a {
    color: white;
  }
  @media (max-width: 992px) {
    margin-right: 20px;
  }
`

const FooterContactInfo = styled.div`
  margin-right: 120px;
  line-height: 32px;
  @media (max-width: 992px) {
    margin-right: 0px;
  }
`
const SupportedBy = styled.div`
  display: flex;
  flex-direction: column;
  b {
    line-height: 32px;
  }
`

const Bold = styled.b`
  font-weight: 600;
  display: block;
`

const Italic = styled.i`
  font-weight: 400;
  display: block;
`
const FooterSupportedByLogos = styled.div`
  margin: -5px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin: 10px 0;
  }
  @media (max-width: 992px) {
    flex-direction: row;
    img {
      margin: 10px;
    }
  }
`

const FooterColumn = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px 0;
  flex-basis: 100%;
`

const renderIntegrationLink = location => {
  if (location && location.pathname === '/') {
    return (
      <Scrollchor to="#integrations" animate={{ offset: -80 }}>
        Integrations
      </Scrollchor>
    )
  }
  return <Link to="/#integrations">Integrations</Link>
}

class Footer extends React.Component {
  render() {
    return (
      <>
        <Visible md>
          <FooterSection>
            <FooterContent>
              <FooterMiurosAsset>
                <Link to="/">
                  <Logo />
                </Link>
                <FooterMiurosSocialMedia>
                  <a href="https://twitter.com/miuros_software">
                    <FooterTwitterLogo src={TwitterLogo} />
                  </a>
                  <a href="https://www.linkedin.com/company/miuros/">
                    <img src={LinkedinLogo} />
                  </a>
                </FooterMiurosSocialMedia>
              </FooterMiurosAsset>
              <FooterFeatures>
                <Bold>Features</Bold>
                <FooterFeaturesDetails>
                  <Link to="/assist">Assist</Link>
                  <Link to="/insights">Insights</Link>
                  <Link to="/#experience">Experience</Link>
                </FooterFeaturesDetails>
                <Bold>{renderIntegrationLink(this.props.location)}</Bold>
              </FooterFeatures>
              <FooterCompany>
                <Link to="/about">
                  <Bold>About</Bold>
                </Link>
                <a href="https://angel.co/miuros/jobs">
                  <Bold>Careers</Bold>
                </a>
                <Link to="/privacy">
                  <Bold>Privacy</Bold>
                </Link>
              </FooterCompany>
              <FooterContactInfo>
                <Italic>Miuros SAS</Italic>
                <Italic>92 Cours Lafayette</Italic>
                <Italic>69489 Lyon CEDEX 3</Italic>
                <Italic>France</Italic>
              </FooterContactInfo>
              <SupportedBy>
                <Bold>Supported by</Bold>
                <FooterSupportedByLogos>
                  <img src={ZendeskLogo} width="60px" />
                  <img src={TechstarsLogo} width="48px" />
                  <img src={TheFamilyLogo} width="34px" />
                </FooterSupportedByLogos>
              </SupportedBy>
            </FooterContent>
          </FooterSection>
        </Visible>
        <Hidden md>
          <FooterSection>
            <FooterContent>
              <FooterColumn>
                <FooterFeatures>
                  <Bold>Features</Bold>
                  <div>
                    <Link to="/assist">Assist</Link>
                  </div>
                  <div>
                    <Link to="/insights">Insights</Link>
                  </div>
                  <div>
                    <Link to="/#experience">Experience</Link>
                  </div>
                  <Bold>
                    <Link to="/#integrations">Integrations</Link>
                  </Bold>
                </FooterFeatures>
                <FooterCompany>
                  <Link to="/about">
                    <Bold>About</Bold>
                  </Link>
                  <Bold>
                    <a href="https://angel.co/miuros/jobs">
                      <Bold>Careers</Bold>
                    </a>
                  </Bold>
                  <Bold>
                    <Link to="/privacy">
                      <Bold>Privacy</Bold>
                    </Link>
                  </Bold>
                </FooterCompany>
              </FooterColumn>
              <FooterColumn>
                <FooterContactInfo>
                  <Bold>Miuros SAS</Bold>
                  <div>92 Cours Lafayette</div>
                  <div>69489 Lyon CEDEX 3</div>
                  <div>France</div>
                </FooterContactInfo>
                <FooterCompany>
                  <a to="https://twitter.com/miuros_software">
                    <FooterTwitterLogo src={TwitterLogo} />
                  </a>
                  <a to="https://www.linkedin.com/company/miuros/">
                    <img src={LinkedinLogo} />
                  </a>
                </FooterCompany>
              </FooterColumn>
              <FooterColumn>
                <SupportedBy>
                  <Bold>Supported by</Bold>
                  <FooterSupportedByLogos>
                    <img src={ZendeskLogo} width="60px" />
                    <img src={TechstarsLogo} width="48px" />
                    <img src={TheFamilyLogo} width="34px" />
                  </FooterSupportedByLogos>
                </SupportedBy>
              </FooterColumn>
              <FooterColumn>
                <FooterMiurosAsset>
                  <div>
                    <hr />
                  </div>
                  <Link to="/">
                    <Logo />
                  </Link>
                  <div>2019 Miurous All rights reserved</div>
                </FooterMiurosAsset>
              </FooterColumn>
            </FooterContent>
          </FooterSection>
        </Hidden>
      </>
    )
  }
}

export default Footer
