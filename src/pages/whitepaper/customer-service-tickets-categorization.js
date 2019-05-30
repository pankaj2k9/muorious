import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import LayoutWithThemeProvider from '../../layouts/LayoutWithThemeProvider'
import Nav from '../../components/Navigation'
import Footer from '../../components/Footer'
import Section from '../../atoms/Section/Section'
import WhitepaperIllustration from '../../atoms/Images/WhitepaperIllustration.svg'
import Scrollchor from 'react-scrollchor'
import HomeCustomerLogos from '../../components/home/HomeCustomerLogos'
import PageTransitionWrapper from '../../components/PageTransitionWrapper'
import FlexWrapper from '../../components/shared/FlexWrapper'
import Space from '../../components/shared/Space'
import Button from '../../atoms/Button'
import axios from 'axios'
import vars from '../../utils/vars'
import ColoredText from '../../components/shared/ColoredText'
import * as FileSaver from 'save-as-js';

const FormSection = styled.section`
  min-height: 100vh;
  background-color: #174F49;
  padding-top: 140px;
  background-image: url(${WhitepaperIllustration});
  background-size: cover;
  @media(max-width: 960px){
    padding-top: 100px;
  }
  @media(max-width: 768px){
    background-image: none;
  }
`

const Inner = styled.div`
  max-width: 1090px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 60px;
  @media(max-width: 960px){
  padding-bottom: 0;
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }
`
const Col = styled.div`
  width: 45%;
  padding: 0 15px;

  @media(max-width: 960px){
    width: 100%;
  }
`

const Illustration = styled.img`
  width: 95%;
  height: auto;
  display: block;
  margin: 0 auto;
`

const Title = styled.h2`
font-family: Modern Era;
font-size: 38px;
line-height: 50px;
color: #FFFFFF;
margin-bottom: 40px;
@media(max-width: 960px){
font-size: 24px;
line-height: 32px;
margin-bottom: 25px;
}
`

const Description = styled.p`
font-size: 18px;
line-height: 32px;
color: #fff;
margin-bottom: 40px;
@media(max-width: 960px){
font-size: 14px;
line-height: 32px;
margin-bottom: 25px;
}
`


const Field = styled.div`
  width: 100%;
  max-width: 360px;
  position: relative;
  &:not(:last-of-type){
    margin-bottom: 15px;
  }
  label {
    display: block;
    font-family: Modern Era;
    font-size: 12px;
    line-height: 24px;

    color: #000000;
    margin: 15px 0 5px;
  }
  input,
  select {
    display: block;
    border: 1px solid rgba(196, 196, 196, 0.3);
    width: 100%;
    border-radius: 0;
    font-size: 14px;
    line-height: 24px;
    padding: 5px;
    color: #333;
    -webkit-appearance: none;
    background: #FFFFFF;
    &:focus,
    &:active {
      outline: none;
      border-color: #333;
    }
  }
`

const SelectArrow = styled.span`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 4.5px 0 4.5px;
  border-color: #000000 transparent transparent transparent;
  right: 10px;
  bottom: 14px;
`

const FieldError = styled.p`
    line-height: 1.4;
    font-size: 14px;
    margin: 10px 0;
    color: maroon;
`

const P = styled.p`
  font-family: Modern Era;
  font-size: 9px;
  line-height: 24px;
  margin: 7px 0;
  color: #FFFFFF;
`
const Checkbox = styled.input`
  display: none;
  & + label {
    &:before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 5px;
      border: 1px solid #EDEDED;
      transform: translateY(2px);
    }
  }
  &:checked + label:before {
    background-color: #FFC509;
  }
`

class WhitepaperPage extends React.Component {
  state = {
    postForm: false,
    values: {
      firstname: null,
      lastname: null,
      email: null,
      support_team_size: 'Less than 20 agents',
    },
  }

  constructor(props) {
    super(props)

    this.scrollAnchorRef = React.createRef()
  }

  componentDidMount() {
    const { location } = this.props
    const self = this
    setTimeout(() => {
      if (location.hash.length > 0) {
        self.scrollAnchorRef.current.simulateClick()
      }
    }, 20)
    window && window.gaTrack && window.gaTrack('pageview', { page: window.location.pathname })
  }


  updateField = (e, field) => {
    console.log('updateField', e, field)
    this.setState({
      values: {
        ...this.state.values,
        [field]: e.target.value,
      },
    })
  }

  submitData = (e) => {
    e.preventDefault()

    console.log('submitData', e)

    window.gtag('event', 'New demo request', this.state.values)

    let fileName = this.props.data.allContentfulWhitepaperPage.edges[0].node.document.file.fileName;
    let fileUrl = this.props.data.allContentfulWhitepaperPage.edges[0].node.document.file.url;

    axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${vars.hubspot.portal_id}/${
        vars.hubspot.form_id
        }`,
      { fields: Object.entries(this.state.values).reduce((arr, [key, value]) => [...arr, { name: key, value }], []) },
      { headers: { 'Content-Type': 'application/json' } },
    ).then(() => {
      fetch(fileUrl).then((res) => {
        res.blob().then((b) => {
          FileSaver.saveAs(b, fileName);
        });
      })
      this.setState({ postForm: true })
    })
      .catch(e => {
        const { errors } = e.response.data
        if (!!(errors.find(i => i.errorType == 'BLOCKED_EMAIL'))) {
          this.setState({ blockedEmail: true })
        }
      })
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    const content = this.props.data.allContentfulHomepage.edges[0].node
    const whitePaperContent = this.props.data.allContentfulWhitepaperPage.edges[0].node

    const { postForm, blockedEmail } = this.state
    return (
      <LayoutWithThemeProvider>
        <React.Fragment>
          <Helmet>
            <title>{siteTitle}</title>
          </Helmet>

          <Scrollchor
            ref={this.scrollAnchorRef}
            style={{ display: 'none' }}
            animate={{ offset: -80 }}
            to={this.props.location.hash}
          />
          <main style={{ overflow: 'hidden' }}>
            <Nav transparency location={this.props.location}/>
            <FormSection>
              <Inner>
                <Col>
                  {postForm ? (
                    <Title style={{textAlign: 'center'}}>Thanks for submitting the form.</Title>
                  ) : (
                    <>
                    <Title>{whitePaperContent.title}</Title>
                    <Description>
                      <ColoredText
                        config={{
                          'best practices': '#fff',
                          'Artificial Intelligence': '#fff',
                          'support and drastically enhance': '#fff',
                        }}
                        additionalStyles="font-weight: 600"
                        text={whitePaperContent.description.description}
                      />
                    </Description>
                    <form onSubmit={e => this.submitData(e)}>
                      <Field>
                        <input
                          placeholder="Enter your first name"
                          type="text"
                          id="firstname"
                          name="firstname"
                          required
                          onChange={e => this.updateField(e, 'firstname')}
                        />
                      </Field>
                      <Field>
                        <input
                          placeholder="Enter your last name"
                          type="text"
                          id="lastname"
                          name="lastname"
                          required
                          onChange={e => this.updateField(e, 'lastname')}
                        />
                      </Field>
                      <Field>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          id="email"
                          name="email"
                          required
                          onChange={e => this.updateField(e, 'email')}
                        />
                        {blockedEmail ?
                          <FieldError>Submission from this email address are not allowed</FieldError> : null}
                      </Field>
                      <Field>
                        <select
                          type="email"
                          id="team_size"
                          name="team_size"
                          required
                          onChange={e => this.updateField(e, 'support_team_size')}
                        >
                          <option value="Less than 20 agents">
                            Less than 20 agents
                          </option>
                          <option value="Between 20 and 49 agents">
                            Between 20 and 49 agents
                          </option>
                          <option value="Between 50 and 99 agents">
                            Between 50 and 99 agents
                          </option>
                          <option value="Between 100 and 199 agents">
                            Between 100 and 199 agents
                          </option>
                          <option value="More than 199 agents">
                            More than 199 agents
                          </option>
                        </select>
                        <SelectArrow/>
                      </Field>
                      <P><Checkbox type="checkbox" id="consent"/><label
                        style={{ userSelect: 'none', cursor: 'pointer' }}
                        htmlFor="consent">{whitePaperContent.subscriptionConsentDisclaimer}</label></P>
                      <Button style={{ maxWidth: '360px' }} secondary type="submit" fluid>
                        Download whitepaper
                      </Button>
                      <P>
                        <ColoredText
                          config={{
                            'Privacy Policy': '#fff',
                          }}
                          link="/privacy"
                          additionalStyles="font-weight: 600"
                          text={whitePaperContent.consentDisclaimer}
                        />
                      </P>
                    </form>
                    </>
                  )}
                </Col>
                <Col>
                  <Illustration src={whitePaperContent.illustration.file.url} alt="Miuros whitepaper"/>
                </Col>
              </Inner>

            </FormSection>
            <PageTransitionWrapper>
              <Section customerLogos>
                <HomeCustomerLogos customerLogos={content.customerLogos}/>
              </Section>

              <Footer location={this.props.location}/>
            </PageTransitionWrapper>
          </main>
        </React.Fragment>
      </LayoutWithThemeProvider>
    )
  }
}

export default WhitepaperPage

export const pageQuery = graphql`
  query WhitepaperPageQuery {
    allContentfulHomepage {
      edges {
        node {
          customerLogos {
            customerUrl
            customerLogo {
              id
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
      }
    }
    allContentfulWhitepaperPage {
      edges {
        node {
          title
          description {
            description
          }
          subscriptionConsentDisclaimer
          consentDisclaimer
          illustration {
            file {
              url
            }
          }

          document {
            file {
              fileName
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
