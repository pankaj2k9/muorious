import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import FlexWrapper from '../../components/shared/FlexWrapper'
import Space from '../../components/shared/Space'

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
    max-width: 480px;
    z-index: 5;
`

const Field = styled.div`
    width: calc(50% - 20px);
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
        &:focus, &:active {
            outline: none;
            border-color: #333;
        }
    }
`

export default class RequestDemoBtn extends Component {
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
        this.setState({ modalOpen: true })
    }

    closeModal = () => {
        this.setState({ modalOpen: false })
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
        console.warn(this.state.values)
    }

    render() {
        const { modalOpen } = this.state
        return (
            <>
                {
                    modalOpen && (
                        <>
                            <ModalContent>
                                <h2>Learn more about Miuros</h2>
                                <form onSubmit={this.submitData}>
                                    <FlexWrapper align="center" justify="space-between">
                                        <Field>
                                            <label htmlFor="first_name">First Name</label>
                                            <input type="text" id="first_name" name="first_name" required onChange={(e) => this.updateField(e, 'first_name')} />
                                        </Field>
                                        <Field>
                                            <label htmlFor="last_name">First Name</label>
                                            <input type="text" id="last_name" name="last_name" required onChange={(e) => this.updateField(e, 'last_name')} />
                                        </Field>
                                    </FlexWrapper>
                                    <FlexWrapper align="center" justify="space-between">
                                        <Field>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email" required onChange={(e) => this.updateField(e, 'email')} />
                                        </Field>
                                        <Field>
                                            <label htmlFor="team_size">Customer service team size</label>
                                            <select type="email" id="team_size" name="team_size" required onChange={(e) => this.updateField(e, 'team_size')}>
                                                <option value="1 to 5 people">1 to 5 people</option>
                                                <option value="5 to 10 people">5 to 10 people</option>
                                                <option value="10+ people">10+ people</option>
                                            </select>
                                        </Field>
                                    </FlexWrapper>
                                    <Space height="40px" />
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