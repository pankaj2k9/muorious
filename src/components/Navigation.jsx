import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import Nav from '../atoms/Nav'
import Logo from '../atoms/Logo/Logo'
import { List, ListItem } from '../atoms/List'
import RequestDemoButton from '../components/shared/RequestDemoBtn'
import StyledLink from '../atoms/Link'
import Scrollchor from 'react-scrollchor';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { mediaQueries } from '../utils/styling'
import HamburgerMenu from './layout/HamburgerMenu'


const NavPlaceholder = styled.div`
    height: 96px;
    @media (max-width: 992px){
        height: 72px;
    }
`

const RequestDemoButtonWrapper = styled("a")`
    width: 72%;
`

const dropdownItems = [
    { content: <ListItem.DropdownItem title="Assist" link="/assist" description="Assist your agents increase their efficiency and first reply times" color="#FFC509" icon="url('data:image/png;base64,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')"/> },
    { content: <ListItem.DropdownItem title="Insights" link="/insights" description="Deliver better customer service from new actionable Insights" color="#174F49" icon="url('data:image/png;base64,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')" /> },
    { content: <ListItem.DropdownItem title="Experience" link="/#experience" comingSoon description="Build a better overall Experience for your customers" color="#FF3A66" icon="url('data:image/png;base64,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')" /> },
]

const renderIntegrationLink = (location) => {
    if(location && location.pathname === "/"){
        return (
            <Scrollchor to="#integrations" animate={{offset: -80}}>Integrations</Scrollchor>
        )
    }
    return (<Link to="/#integrations">Integrations</Link>)
}

const NavContainerGrid = styled(Grid)`
    display: none;
    ${mediaQueries.sm`
        display: block;
    `}
`

const NavContainerGridMobile = styled(Grid)`
    ${mediaQueries.sm`
        display: none;
    `}
    margin-right: 0;
    margin-left: 0;
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
`

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scrolled : false
        }
        this.handleScroll = (event) => {
            let scrollTop = window.scrollY;
            const {state} = this;
            if (scrollTop > 0 && state.scrolled === false){
                this.setState(() => { return { scrolled: true}})
            } else if(scrollTop <= 0 && state.scrolled === true) {
                this.setState(() => { return { scrolled: false}})
            }
        };
    }
    componentDidMount(){
        const {transparency} = this.props;
        if(transparency){
            this.handleScroll();
            window.addEventListener('scroll', this.handleScroll)
        }
    }

    componentWillUnMount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    render(){
        const {props, state} = this;
        return (
            <>
            <Nav transparent={!state.scrolled && props.transparency} props={props} middle="xs">
                <Row middle="xs" between="xs">
                    <NavContainerGrid>
                    <Row>
                        <Col xs={false} sm>
                            <Row middle="xs" between="xs">
                                <Col sm={7}>
                                    <Row between="xs" middle="xs">
                                        <Col xs={1}>
                                            <Link to="/"><Logo /></Link>
                                        </Col>
                                        <Col xs={10}>
                                            <List flex>
                                                <ListItem.Dropdown nav items={dropdownItems}><a>Features</a></ListItem.Dropdown>
                                                <ListItem nav>{renderIntegrationLink(props.location)}</ListItem>
                                                <ListItem nav><Link to="/about">About</Link></ListItem>
                                            </List>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={5} md={5} lg={4}>
                                    <Row middle="xs" end="xs">
                                        <Col xs={2}>
                                            <StyledLink as="a" href="/dashboard">Login</StyledLink>
                                        </Col>
                                        <Col xs={7}>
                                            <RequestDemoButton />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    </NavContainerGrid>
                    <NavContainerGridMobile>
                        <Col xs={12} sm={false} md={false} lg={false}>
                            <Row middle="xs" between="xs">
                                <Col xs={2}>
                                    <Link to="/"><Logo /></Link>
                                </Col>
                                <Col xs={1}>
                                    <HamburgerMenu />
                                </Col>
                            </Row>
                        </Col>
                    </NavContainerGridMobile>
                </Row>
            </Nav>
            {/* <NavPlaceholder /> */}
        </>
        )
    }
}
export default Navigation
