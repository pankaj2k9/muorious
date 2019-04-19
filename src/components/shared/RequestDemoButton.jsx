import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import FlexWrapper from './FlexWrapper'
import Space from './Space'
import vars from '../../utils/vars'

const ModalBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  top: 0;
  left: 0;
`

const ModalContent = styled.div`
  position: fixed;
  width: calc(100vw - 30px);
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 20px;
  max-width: 700px;
  z-index: 1001;
`

const Field = styled.div`
  width: calc(50% - 10px);
  position: relative;
  @media (max-width: 992px) {
    width: 100%;
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
    background-color: transparent;
    &:focus,
    &:active {
      outline: none;
      border-color: #333;
    }
  }
`
const FormTitle = styled.h2`
  font-family: Modern Era;
  font-size: 30px;
  line-height: 1.4;
  text-align: center;
  color: #1b5e57;
  margin: 15px 0;
  @media (max-width: 992px) {
    font-size: 22px;
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

export default class RequestDemoButton extends Component {
  state = {
    modalOpen: false,
    postForm: false,
    values: {
      firstname: null,
      lastname: null,
      email: null,
      support_team_size: 'Less than 20 agents',
    },
  }

  openModal = () => {
    document.body.style.overflowY = 'hidden'
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    document.body.style.overflowY = ''
    this.setState({ modalOpen: false })
  }

  componentWillUnmount() {
    // Prevent body not scrolling when changing from desktop to mobile or vice versa which causes modal to unrender
    document.body.style.overflowY = ''
  }

  updateField = (e, field) => {
    this.setState({
      values: {
        ...this.state.values,
        [field]: e.target.value,
      },
    })
  }

  submitData = e => {
    e.preventDefault()
    window.gtag('event', 'New demo request', this.state.values)
    axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${vars.hubspot.portal_id}/${
        vars.hubspot.form_id
        }`,
      { fields: Object.entries(this.state.values).reduce((arr, [key, value]) => [...arr, { name: key, value }], []) },
      { headers: { 'Content-Type': 'application/json' } },
    ).then(() => {
      this.setState({ postForm: true })
    })
      .catch(e => {
        const { errors } = e.response.data
        if (!!(errors.find(i => i.errorType == 'BLOCKED_EMAIL'))) {
          this.setState({ blockedEmail: true })
        }
      })

  }

  renderAction = () => {
    const { handler } = this.props
    return handler ? (
      <span onClick={this.openModal}>{handler}</span>
    ) : (
      <Button secondary onClick={this.openModal}>
        Request demo
      </Button>
    )
  }

  render() {
    const { modalOpen, postForm, blockedEmail } = this.state
    return (
      <>
        {modalOpen &&
        ReactDOM.createPortal(
          <>
            <ModalContent>
              {postForm ? (
                <FormTitle>Thanks for submitting the form. We will get back to you shortly</FormTitle>
              ) : (
                <>
                  <FormTitle>Learn more about Miuros</FormTitle>
                  <form onSubmit={this.submitData}>
                    <FlexWrapper wrap align="flex-start" justify="space-between">
                      <Field>
                        <label htmlFor="firstname">First Name</label>
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
                        <label htmlFor="lastname">Last Name</label>
                        <input
                          placeholder="Enter your last name"
                          type="text"
                          id="lastname"
                          name="lastname"
                          required
                          onChange={e => this.updateField(e, 'lastname')}
                        />
                      </Field>
                    </FlexWrapper>
                    <FlexWrapper wrap align="flex-start" justify="space-between">
                      <Field>
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          id="email"
                          name="email"
                          required
                          onChange={e => this.updateField(e, 'email')}
                        />
                        {blockedEmail ? <FieldError>Submission from this email address are not allowed</FieldError> : null}
                      </Field>
                      <Field>
                        <label htmlFor="team_size">
                          Customer service team size
                        </label>
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
                    </FlexWrapper>
                    <Space height="20px"/>
                    <Button secondary type="submit" fluid>
                      Request demo
                    </Button>
                  </form>
                </>
              )}
            </ModalContent>
            <ModalBackdrop onClick={this.closeModal}/>
          </>,
          document.querySelector('body'),
        )}
        {this.renderAction()}
      </>
    )
  }
}
