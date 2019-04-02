import React from 'react'
import { Link } from "gatsby"

import styled from 'styled-components'
import Logo from '../atoms/Logo/Logo'
import LinkedinLogo from '../atoms/Logo/Linkedin-Logo.png'
import TwitterLogo from '../atoms/Logo/Twitter-Logo.png'
import ZendeskLogo from '../atoms/Logo/Zendesk-Logo.png'
import TechstarsLogo from '../atoms/Logo/Techstars-Logo.png'
import TheFamilyLogo from '../atoms/Logo/TheFamily-Logo.png'
import Breakpoint from '../components/layout/Breakpoint'
import Visible from '../atoms/Visible';
import Hidden from '../atoms/Hidden';

const FooterSection = styled.section`
    background-color: #174F49;
    color: white;
    display: flex;
    width: 100%;
    padding-top: 70px;
    @media (max-width: 992px){
        padding: 40px 20px;
    }
`

const FooterContent = styled.div`
    display: flex;
    max-width: 1067px;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    @media (max-width: 992px){
        flex-wrap: wrap;
    }
`

const FooterMiurosAsset = styled.div`
    @media (max-width: 992px){
        flex-basis: 100%;
        min-width: 100%;
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
const FooterFeaturesTitle = styled.div`
    font-weight: 600;
`

const FooterFeaturesDetails = styled.div`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    a {
        color: white;
    }
`

const FooterIntegrationsTitle = styled.div`
    font-weight: 600;
`

const FooterInformationsTitle = styled.div`
    font-weight: 600;
`

const FooterCompany = styled.div`
    margin-right: 120px;
    line-height: 32px;
    display: flex;
    flex-direction: column;
    a {
        color: white;
    }
`

const FooterContactInfo = styled.div`
    margin-right: 120px;
    line-height: 32px;
`

const FooterContactTitle = styled.div`
    font-weight: 600;
`

const SupportedBy = styled.div`
    display: flex;
    flex-direction: column;
`

const FooterSupporteByTitle = styled.div`
    font-weight: 600;
`
const FooterSupportedByLogos = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        margin: 10px 0;
    }
`

const FooterColumn = styled.div`
    min-width: 100%;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    flex-basis: 100%;    
`

class Footer extends React.Component {
    render() {
        return (
            <>
                <Visible md>
                    <FooterSection>
                        <FooterContent>
                            <FooterMiurosAsset>
                                <Link to="/"><Logo /></Link>
                                <FooterMiurosSocialMedia>
                                    <a href="https://twitter.com/miuros_software"><FooterTwitterLogo src={TwitterLogo}></FooterTwitterLogo></a>
                                    <a href="https://www.linkedin.com/company/miuros/"><img src={LinkedinLogo}></img></a>
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
                                <FooterInformationsTitle>Company</FooterInformationsTitle>
                                <Link to="/about">About</Link>
                                <a href="https://angel.co/miuros/jobs">Careers</a>
                                <Link to="/privacy">Privacy</Link>
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
                </Visible>
                <Hidden md>
                    <FooterSection>
                        <FooterContent>
                            <FooterColumn>
                                <FooterMiurosAsset>
                                    <Link to="/"><Logo /></Link>
                                    <FooterMiurosSocialMedia>
                                        <a to="https://twitter.com/miuros_software"><FooterTwitterLogo src={TwitterLogo}></FooterTwitterLogo></a>
                                        <a to="https://www.linkedin.com/company/miuros/"><img src={LinkedinLogo}></img></a>
                                    </FooterMiurosSocialMedia>
                                </FooterMiurosAsset>
                            </FooterColumn>
                            <FooterColumn>
                                <FooterFeatures>
                                    <FooterFeaturesTitle><Link to="/assist">Assist</Link></FooterFeaturesTitle>
                                    <FooterFeaturesTitle><Link to="/insights">Insights</Link></FooterFeaturesTitle>
                                    <FooterFeaturesTitle><Link to="/#experience">Experience</Link></FooterFeaturesTitle>
                                    <FooterIntegrationsTitle><Link to="/#integrations">Integrations</Link></FooterIntegrationsTitle>
                                </FooterFeatures>
                                <FooterCompany>
                                    <FooterInformationsTitle><Link to="/about">About</Link></FooterInformationsTitle>
                                    <FooterInformationsTitle><a href="https://angel.co/miuros/jobs">Careers</a></FooterInformationsTitle>
                                    <FooterInformationsTitle><Link to="/privacy">Privacy</Link></FooterInformationsTitle>
                                </FooterCompany>

                            </FooterColumn>
                            <FooterColumn>
                                <FooterContactInfo>
                                    <FooterContactTitle>Miuros SAS</FooterContactTitle>
                                    <div>92 Cours Lafayette</div>
                                    <div>69489 Lyon CEDEX 3</div>
                                    <div>France</div>
                                </FooterContactInfo>
                            </FooterColumn>
                            <FooterColumn>
                                <SupportedBy>
                                    <FooterSupporteByTitle>Supported by</FooterSupporteByTitle>
                                    <FooterSupportedByLogos>
                                        <img src={ZendeskLogo} width="60px"></img>
                                        <img src={TechstarsLogo} width="48px"></img>
                                        <img src={TheFamilyLogo} width="34px"></img>
                                    </FooterSupportedByLogos>
                                </SupportedBy>
                            </FooterColumn>
                        </FooterContent>
                    </FooterSection>
                </Hidden>
            </>
        )
    }
}

export default Footer
