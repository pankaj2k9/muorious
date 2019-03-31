import React from 'react'
import { Link } from "gatsby"

import styled from 'styled-components'
import Logo from '../atoms/Logo/Logo'
import LinkedinLogo from '../atoms/Logo/Linkedin-Logo.png'
import TwitterLogo from '../atoms/Logo/Twitter-Logo.png'
import ZendeskLogo from '../atoms/Logo/Zendesk-Logo.png'
import TechstarsLogo from '../atoms/Logo/Techstars-Logo.png'
import TheFamilyLogo from '../atoms/Logo/TheFamily-Logo.png'

const FooterSection = styled.section `
    background-color: #174F49;
    color: white;
    display: flex;
    width: 100%;
    height: 264px;
    padding-top: 70px;
`

const FooterContent = styled.div `
    display: flex;
    width: 1067px;
    margin: 0 auto;
`

const FooterMiurosAsset = styled.div `
    margin-right: 120px;
`

const FooterMiurosSocialMedia = styled.div `
    display: flex;
    margin-top: 20px;
`

const FooterTwitterLogo = styled.img `
    margin-right: 20px;
`

const FooterFeatures = styled.div `
    margin-right: 120px;
    line-height: 32px;
`
const FooterFeaturesTitle = styled.div `
    font-weight: 600;
`

const FooterFeaturesDetails = styled.div `
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    a {
        color: white;
    }
`

const FooterIntegrationsTitle = styled.div `
    font-weight: 600;
`

const FooterInformationsTitle = styled.div `
    font-weight: 600;
`

const FooterCompany = styled.div `
    margin-right: 120px;
    line-height: 32px;
    display: flex;
    flex-direction: column;
    a {
        color: white;
    }
`

const FooterContactInfo = styled.div `
    margin-right: 120px;
    line-height: 32px;
`

const FooterContactTitle = styled.div `
    font-weight: 600;
`

const SupportedBy = styled.div `
    display: flex;
    flex-direction: column;
`

const FooterSupporteByTitle = styled.div `
    font-weight: 600;
`
const FooterSupportedByLogos = styled.div `
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

class Footer extends React.Component {
    render() {
        return (
            <FooterSection>
                <FooterContent>
                    <FooterMiurosAsset>
                        <Link to="/"><Logo /></Link>
                        <FooterMiurosSocialMedia>
                        <Link to="https://twitter.com/miuros_software"><FooterTwitterLogo src={TwitterLogo}></FooterTwitterLogo></Link>
                        <Link to="https://www.linkedin.com/company/miuros/"><img src={LinkedinLogo}></img></Link>
                        </FooterMiurosSocialMedia>
                    </FooterMiurosAsset>
                    <FooterFeatures>
                        <FooterFeaturesTitle>Features</FooterFeaturesTitle>
                        <FooterFeaturesDetails>
                            <Link to="/assist">Assist</Link>
                            <Link to="/insights">Insights</Link>
                            <Link to="/#experience">Experience</Link>
                        </FooterFeaturesDetails>
                        <FooterIntegrationsTitle>Integrations</FooterIntegrationsTitle>
                    </FooterFeatures>
                    <FooterCompany>
                        <FooterInformationsTitle>Informations</FooterInformationsTitle>
                        <Link to="/about">About</Link>
                        <Link href="https://angel.co/miuros/jobs">Careers</Link>
                        <Link href="/privacy">Privacy</Link>
                    </FooterCompany>
                    <FooterContactInfo>
                        <FooterContactTitle>Miuros SAS</FooterContactTitle>
                        <div>92 Cours Lafayette</div>
                        <div>69489 Lyon CEDEX 3</div>
                        <div>France</div>
                    </FooterContactInfo>
                    <SupportedBy>
                        <FooterSupporteByTitle>Supported by</FooterSupporteByTitle>
                        <FooterSupportedByLogos>
                            <img src={ZendeskLogo} width="60px"></img>
                            <img src={TechstarsLogo} width="48px"></img>
                            <img src={TheFamilyLogo} width="34px"></img>
                        </FooterSupportedByLogos>
                    </SupportedBy>
                </FooterContent>
            </FooterSection>
        )
    }
}

export default Footer
