import React, { Component } from 'react'
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
    background: rgba(0,0,0, .3);
    z-index: 0;
    top: 0;
    left: 0;
`

const ModalContent = styled.div`
    position: fixed;
    width: calc(100vw - 30px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 20px;
    max-width: 700px;
    z-index: 5;
`

const Field = styled.div`
    width: calc(50% - 10px);
    position: relative;
    @media(max-width: 992px){
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
    input, select {
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
        &:focus, &:active {
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
    color: #1B5E57;
    margin: 15px 0;
    @media (max-width: 992px){
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

export default class RequestDemoButton extends Component {
    state = {
        modalOpen: false,
        values: {
            first_name: null,
            last_name: null,
            email: null,
            team_size: null,
        }
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
                [field]: e.target.value
            }
        })
    }

    submitData = (e) => {
        e.preventDefault();
        window.gtag('event', 'New demo request', this.state.values);
        axios.post(`https://forms.hubspot.com/uploads/form/v2/${vars.hubspot.portal_id}/${vars.hubspot.form_id}`, this.state.values, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        this.closeModal()
    }

    render() {
        const { modalOpen } = this.state
        return (
            <>
                {
                    modalOpen && (
                        <>
                            <ModalContent>
                                <FormTitle>Learn more about Miuros</FormTitle>
                                <form onSubmit={this.submitData}>
                                    <FlexWrapper wrap align="center" justify="space-between">
                                        <Field>
                                            <label htmlFor="first_name">First Name</label>
                                            <input placeholder="Enter your first name" type="text" id="first_name" name="first_name" required onChange={(e) => this.updateField(e, 'first_name')} />
                                        </Field>
                                        <Field>
                                            <label htmlFor="last_name">First Name</label>
                                            <input placeholder="Enter your last name" type="text" id="last_name" name="last_name" required onChange={(e) => this.updateField(e, 'last_name')} />
                                        </Field>
                                    </FlexWrapper>
                                    <FlexWrapper wrap align="center" justify="space-between">
                                        <Field>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" placeholder="Enter your email" id="email" name="email" required onChange={(e) => this.updateField(e, 'email')} />
                                        </Field>
                                        <Field>
                                            <label htmlFor="team_size">Customer service team size</label>
                                            <select type="email" id="team_size" name="team_size" required onChange={(e) => this.updateField(e, 'team_size')}>
                                                <option value="1 to 5 people">1 to 5 people</option>
                                                <option value="5 to 10 people">5 to 10 people</option>
                                                <option value="10+ people">10+ people</option>
                                            </select>
                                            <SelectArrow />
                                        </Field>
                                    </FlexWrapper>
                                    <Space height="20px" />
                                    <Button secondary type="submit">Request demo</Button>
                                </form>
                            </ModalContent>
                            <ModalBackdrop onClick={this.closeModal} />
                        </>
                    )
                }
                <Button secondary onClick={this.openModal}>Request demo</Button>
            </>
        )
    }
}