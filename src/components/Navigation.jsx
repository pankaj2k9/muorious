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

const Navigation = ( props ) => (
    <Nav props={props}>
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
                    <StyledLink as="a" href="/login">Login</StyledLink>
                    <Button secondary>Request demo</Button>
                </Col>
            </Row>
        </Container>
    </Nav>
)

export default Navigation
