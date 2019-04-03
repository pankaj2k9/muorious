import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import MenuBackground from './MenuBackground.png'

import { Link } from 'gatsby'

import Nav from '../../atoms/Nav'
import Logo from '../../atoms/Logo/Logo'
import { Container } from '../../atoms/Container'
import Row from '../../atoms/Row'
import Col from '../../atoms/Col'
import Button from '../../atoms/Button'
import FlexWrapper from '../../components/shared/FlexWrapper'
import RequestDemoButton from '../../components/shared/RequestDemoButton'

const ToggleBtn = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-size: cover;
  background-position: center;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAYAAAAJKR1YAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgB7dbBDYMwDAXQ76oDZISM0E5QRugIsBmbABuwAbABG4QfpJw52of/DrFyi2LJ30AwVo9SSs/yg6/FzEbjYzpeJsTwffE4EUdqLfuzfOBrZstmiIg4a4OxY8nwtdfBqCx7kN78ppW/NMB//TiUZSISQcuyBP8lv2bZXrMs87IhhjvLMuJIF+OPKN1Wet8cAAAAAElFTkSuQmCC');
`
const CloseBtn = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-size: cover;
  background-position: center;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAERSURBVHgBxdbbDoMgDAbgDvXCp5x7srmnNCYell5sUUKFlrb+CTEeIl8EoTDP8/5ry7I8wTnY59EAxxNvVIzBFuKH1nUdPVDYB/YVXw/btr3AGUVh/pZpmob401kNX2qYsKHh9KAHqhjjgWJjLFFijAWqGqOJUsNooNQxNSgzjARljuGgNDAPYARfHEJ4x9ebphnwSG0Hfd+PYAG6QqXCxYhDDZ/pnKlB1WACCNN13S65ZxLqb+IunqmwJzVVXKWCf1/bth9ghAXKVXrUksBFFWNyE9it8uSswOYoyXZghqrZm9RRGhulGkqzhKhGWdQzYpRlccVGeVR6xSi3srME5YkpQnljcii4A3OFgrswFOoLfni3MET2HJQAAAAASUVORK5CYII=');
`

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh !important;
  background-image: url(${MenuBackground});
  background-size: cover;
  background-position: center;
  padding: 0 30px 60px 30px;
`
const MobileMenuBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 30px;
`

const MobileMenuItems = styled.div``

const MobileMenuItemElement = styled.div`
  font-family: Modern Era;
  font-size: 24px;
  line-height: 3;
  color: #ffffff;
  position: relative;
  ${({ arrowDown }) =>
    arrowDown &&
    css`
      padding-right: 20px;
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 35px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 8px 0 8px;
        border-color: #ffffff transparent transparent transparent;
      }
    `} ${({ arrowUp }) =>
    arrowUp &&
    css`
      padding-right: 20px;
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 35px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 8px 10px 8px;
        border-color: transparent transparent #ffffff transparent;
      }
    `}
    a {
    color: #ffffff;
  }
`

const MobileMenuItem = ({ onClick, children, ...otherProps }) => (
  <MobileMenuItemElement
    {...otherProps}
    onClick={
      onClick ||
      (() => {
        document.body.style.overflowY = ''
      })
    }
  >
    {children}
  </MobileMenuItemElement>
)

const MobileMenuDropdownItems = styled.div``

const MobileMenuDropdownItem = styled.div`
  font-family: Modern Era;
  font-size: 18px;
  line-height: 2;
  color: #ffffff;
  a {
    color: #ffffff;
  }
`

MobileMenuItem.Dropdown = class extends Component {
  state = { open: false }

  toggle = () => this.setState({ open: !this.state.open })

  render() {
    const { open } = this.state
    const { children, items } = this.props
    return (
      <MobileMenuItem arrowUp={open} arrowDown={!open} onClick={this.toggle}>
        {children}
        {this.state.open && (
          <MobileMenuDropdownItems>
            {items.map((i, idx) => (
              <MobileMenuDropdownItem
                onClick={() => {
                  document.body.style.overflowY = ''
                }}
                key={idx}
              >
                {i.content}
              </MobileMenuDropdownItem>
            ))}
          </MobileMenuDropdownItems>
        )}
      </MobileMenuItem>
    )
  }
}

const ComingSoon = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
  color: #ff3a66;
  padding: 0 6px;
  background-color: #2e4d4c;
  &:after {
    content: 'Coming soon';
  }
`

const NavContainer = styled(Container)`
  padding: 0 !important;
`

const dropdownItems = [
  {
    content: (
      <>
        <Link to="/assist">Assist</Link>
      </>
    ),
  },
  {
    content: (
      <>
        <Link to="/insights">Insights</Link>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          Experiences <ComingSoon />
        </p>
      </>
    ),
  },
]

class HamburgerMenu extends Component {
  state = {
    menuOpen: false,
  }

  toggleMenu = () =>
    this.setState({ menuOpen: !this.state.menuOpen }, () => {
      if (this.state.menuOpen) {
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = ''
      }
    })

  render() {
    return (
      <>
        <ToggleBtn onClick={this.toggleMenu} />
        {this.state.menuOpen && (
          <MobileMenu>
            <Nav position="static" transparent small>
              <NavContainer>
                <Row>
                  <Col NavLeft>
                    <Link to="/">
                      <Logo />
                    </Link>
                  </Col>
                  <Col NavRight justifyContent="flex-end">
                    <CloseBtn onClick={this.toggleMenu} />
                  </Col>
                </Row>
              </NavContainer>
            </Nav>
            <MobileMenuItems>
              <MobileMenuItem.Dropdown items={dropdownItems}>
                <p>Features</p>
              </MobileMenuItem.Dropdown>
              <MobileMenuItem onClick={this.toggleMenu}>
                <Link to="/#integrations">Integrations</Link>
              </MobileMenuItem>
              <MobileMenuItem>
                <Link to="/about">About</Link>
              </MobileMenuItem>
              <MobileMenuItem>
                <Link to="/login">Login</Link>
              </MobileMenuItem>
            </MobileMenuItems>
            <MobileMenuBottom>
              <FlexWrapper>
                <RequestDemoButton />
              </FlexWrapper>
            </MobileMenuBottom>
          </MobileMenu>
        )}
      </>
    )
  }
}

export default HamburgerMenu
