import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { getColors } from "../utils/styling";
import FlexWrapper from '../components/shared/FlexWrapper';

const cssForNavFlex = ({ theme, flex }) => {
    if (flex) {
        return css`
            display: flex;
            flex-direction: row;    
            justify-content: space-between;
            align-items: center;
            width: 70%;
        `
    }
}

const List = styled("ul")`
    list-style-type: none;
    margin: 0;
    ${props => cssForNavFlex(props)}
`

const cssForNavLink = ({ theme, nav }) => {
    if (nav) {
        return css`
            a {
                color: ${getColors(theme).white};
                font-size: 18px;
            }
        `
    }
}

const ListItem = styled("li")`
    ${props => cssForNavLink(props)};
    position: relative;
    cursor: pointer;
`

export { List, ListItem }

const ListItemDropdownItems = styled.div`
    position: absolute;
    top: calc(100% + 15px);
    left: 50%;
    transform: translateX(-50%);
    width: 340px;
    max-width: 100vw;
    background-color: #fff;
    padding: 0 15px;
    z-index: 2;
    &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
border-style: solid;
top: -7px;
left: 50%;
transform: translateX(-50%);
border-width: 0 5px 7px 5px;
border-color: transparent transparent #ffffff transparent;
    }
`
const ListItemDropdownItem = styled.div`
    margin: 10px 0;
`

const Overlay = styled('div')`
    position: fixed;
    width: 100%; 
    height: 100%; 
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
`

ListItem.Dropdown = class extends Component {
    state = { open: false }

    toggle = () => this.setState({ open: !this.state.open })

    isOpen(){
        return this.state.open
    }

    render() {
        const { open } = this.state
        const { children, items, ...rest } = this.props
        return (
            <>
                <ListItem {...rest} onClick={this.toggle}>
                    {children}
                    {this.state.open && (
                        <ListItemDropdownItems>
                            {items.map((i, idx) => <ListItemDropdownItem onClick={() => { document.body.style.overflowY = '' }} key={idx}>{i.content}</ListItemDropdownItem>)}
                        </ListItemDropdownItems>
                    )}
                    {this.isOpen() ? <Overlay onClick={this.toogle}/> : null }
                </ListItem>
                
            </>
        )
    }
}
const Icon = styled.div`
    width: 56px;
    height: 56px;
    margin: 7px;
    background-image: ${({ icon }) => icon};
    background-size: cover;
    background-position: center;
`
const Text = styled.div`
    width: calc(100% - 70px);
    padding: 10px;
`

const hexToRGB = (hex, alpha) => {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

const Title = styled.h3`
    font-family: Modern Era;
    font-size: 18px;
    line-height: 2;
    color: ${({ color }) => color || '#313131'};
    ${({ comingSoon }) => comingSoon && css`
        &:after {
            display: inline-block;
            padding: 6px;
            border-radius: 4px;
            background-color: ${({ color }) => hexToRGB(color || '#313131', .1)};
            color: ${({ color }) => color || '#313131'};
            content: 'Coming soon';
            font-size: 14px;
            margin-left: 6px;
            line-height: 1;
        }
    `}
`
const Description = styled.p`
    font-family: Modern Era;
    font-size: 14px;
    line-height: 20px;
    color: #606060;
`

ListItem.DropdownItem = ({ icon, title, description, color, link = null, comingSoon = false }) => {
    const Wrap = link ? Link : React.Fragment
    return (
        <Wrap {...(link ? { to: link } : {})}>
            <FlexWrapper>
                <Icon icon={icon} />
                <Text>
                    <Title comingSoon={comingSoon} color={color}>{title}</Title>
                    <Description>{description}</Description>
                </Text>
            </FlexWrapper>
        </Wrap>
    )
}