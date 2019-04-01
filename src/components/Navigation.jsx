import React from 'react'
import { Link } from "gatsby"

import Nav from '../atoms/Nav'
import Logo from '../atoms/Logo/Logo'
import { Container } from '../atoms/Container'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import { List, ListItem } from '../atoms/List'
import Button from '../atoms/Button'
import StyledLink from '../atoms/Link'

import Breakpoint from './layout/Breakpoint'
import HamburgerMenu from './layout/HamburgerMenu'

const Navigation = (props) => (
    <>
        <Breakpoint medium up>
            <Nav dark props={props}>
                <Container>
                    <Row>
                        <Col NavLeft>
                            <Link to="/"><Logo /></Link>
                            <List flex>
                                <ListItem nav><a>Features</a></ListItem>
                                <ListItem nav><Link to="/#integrations">Integrations</Link></ListItem>
                                <ListItem nav><Link to="/about">About</Link></ListItem>
                            </List>
                        </Col>
                        <Col NavRight>
                            <StyledLink as="a" href="/dashboard">Login</StyledLink>
                            <Button secondary><a href="https://share.hsforms.com/1HM6O2ZMSQrOP96qfQrHCRA1nwt0">Request demo</a></Button>
                        </Col>
                    </Row>
                </Container>
            </Nav>
        </Breakpoint>
        <Breakpoint medium down>
            <Nav small light props={props}>
                <Container>
                    <Row>
                        <Col NavLeft>
                            <Link to="/"><Logo dark /></Link>
                        </Col>
                        <Col NavRight justifyContent="flex-end">
                            <HamburgerMenu />
                        </Col>
                    </Row>
                </Container>
            </Nav>
        </Breakpoint>
    </>
)

export default Navigation
