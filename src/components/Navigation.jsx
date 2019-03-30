import React from 'react'

import Nav from '../atoms/Nav'
import Logo from '../atoms/Logo/Logo'
import Container from '../atoms/Container'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import { List, ListItem } from '../atoms/List'
import Button from '../atoms/Button'
import StyledLink from '../atoms/Link'

class Navigation extends React.Component {
    render() {
        return (
            <Nav>
                <Container>
                    <Row>
                        <Col NavLeft>
                            <Logo />
                            <List flex>
                                <ListItem nav><a href="">Features</a></ListItem>
                                <ListItem nav><a href="">Integrations</a></ListItem>
                                <ListItem nav><a href="">About</a></ListItem>
                            </List>
                        </Col>
                        <Col NavRight>
                            <StyledLink as="a" href="/">Login</StyledLink>
                            <Button secondary>Request demo</Button>
                        </Col>
                    </Row>
                </Container>
            </Nav>
        )
    }
}

export default Navigation
