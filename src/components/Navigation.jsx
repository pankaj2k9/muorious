import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Nav from '../atoms/Nav'
import Logo from '../atoms/Logo/Logo'
import { List, ListItem } from '../atoms/List'
import RequestDemoButton from '../components/shared/RequestDemoButton'
import StyledLink from '../atoms/Link'
import Scrollchor from 'react-scrollchor'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import { mediaQueries } from '../utils/styling'
import HamburgerMenu from './layout/HamburgerMenu'
import assistLinkImage from '../atoms/Images/assistDropdownLink.svg'
import { StaticQuery, graphql } from 'gatsby'

const NavPlaceholder = styled.div`
  height: 96px;
  @media (max-width: 992px) {
    height: 72px;
  }
`

const RequestDemoButtonWrapper = styled('a')`
  width: 72%;
`

const dropdownItems = [
  {
    content: (
      <ListItem.DropdownItem
        title="Assist"
        link="/assist"
        description="Miuros Assist increases agent's efficiency & lowers 1st reply times"
        color="#FFC509"
        icon={`url('${assistLinkImage}')`}
      />
    ),
  },
  {
    content: (
      <ListItem.DropdownItem
        title="Insights"
        link="/insights"
        description="Deliver better customer service from new actionable Insights"
        color="#174F49"
        icon="url('data:image/png;base64,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')"
      />
    ),
  },
  {
    content: (
      <Scrollchor to="#experience" animate={{ offset: -80 }}>
        <ListItem.DropdownItem
          title="Experience"
          link="/#experience"
          comingSoon
          description="Build a better overall Experience for your customers"
          color="#FF3A66"
          icon="url('data:image/png;base64,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')"
        />
      </Scrollchor>
    ),
  },
]

const renderIntegrationLink = location => {
  if (location && location.pathname === '/') {
    return (
      <Scrollchor to="#integrations" animate={{ offset: -80 }}>
        Integrations
      </Scrollchor>
    )
  }
  return <Link to="/#integrations">Integrations</Link>
}

const NavContainerGrid = styled(Grid)`
  display: none;
  ${mediaQueries.sm`
        display: block;
        width:95%;
    `} ${mediaQueries.lg`
        display: block;
        margin-right: auto;
        margin-left: auto;
        width:${({ theme }) => theme.flexboxgrid.container.lg}em;
    `};
`

const NavContainerGridMobile = styled(Grid)`
  ${mediaQueries.sm`
        display: none;
    `} margin-right: 0;
  margin-left: 0;
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
`

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false,
    }
    this.handleScroll = event => {
      let scrollTop = window.scrollY
      const { state } = this
      if (scrollTop > 0 && state.scrolled === false) {
        this.setState(() => {
          return { scrolled: true }
        })
      } else if (scrollTop <= 0 && state.scrolled === true) {
        this.setState(() => {
          return { scrolled: false }
        })
      }
    }
  }

  componentDidMount() {
    const { transparency } = this.props
    if (transparency) {
      this.handleScroll()
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { props, state } = this
    return (
      <>
        <Nav
          transparent={!state.scrolled && props.transparency}
          props={props}
          middle="xs"
        >
          <Row middle="xs" between="xs">
            <NavContainerGrid>
              <Row middle="xs" between="xs">
                <Col sm={8}>
                  <Row between="xs" middle="xs">
                    <Col xs={1}>
                      <Link to="/">
                        <Logo />
                      </Link>
                    </Col>
                    <Col xs={10}>
                      <List flex>
                        <StaticQuery
                          query={graphql`
                            query NavQuery {
                              allContentfulFeatures {
                                edges {
                                  node {
                                    featureRecords {
                                      ... on ContentfulFeature {
                                        name
                                        description
                                        link
                                        color
                                        comingSoon
                                        icon {
                                          file {
                                            url
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          `}
                          render={data => {
                            const dropdownItems = data.allContentfulFeatures.edges[0].node.featureRecords.map(
                              (i, idx) => ({
                                content: (
                                  <Scrollchor
                                    key={idx}
                                    to={i.link.replace('/', '')}
                                    animate={{ offset: -80 }}
                                  >
                                    <ListItem.DropdownItem
                                      title={i.name}
                                      link={i.link}
                                      comingSoon={i.comingSoon}
                                      description={i.description}
                                      color={i.color}
                                      icon={`url(${i.icon.file.url})`}
                                    />
                                  </Scrollchor>
                                ),
                              })
                            )
                            return (
                              <ListItem.Dropdown nav items={dropdownItems}>
                                <a>Features</a>
                              </ListItem.Dropdown>
                            )
                          }}
                        />
                        <ListItem nav>
                          {renderIntegrationLink(props.location)}
                        </ListItem>
                        <ListItem nav>
                          <Link to="/use-cases">Use Cases</Link>
                        </ListItem>
                        <ListItem nav>
                          <Link to="/about">About</Link>
                        </ListItem>
                      </List>
                    </Col>
                  </Row>
                </Col>
                <Col sm={4} lg={4}>
                  <Row middle="xs" end="xs">
                    <Col xs={2}>
                      <StyledLink as="a" href="/dashboard">
                        Login
                      </StyledLink>
                    </Col>
                    <Col xs={7}>
                      <RequestDemoButton />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </NavContainerGrid>
            <NavContainerGridMobile>
              <Col xs={12} sm={false} md={false} lg={false}>
                <Row middle="xs" between="xs">
                  <Col xs={2}>
                    <Link to="/">
                      <Logo />
                    </Link>
                  </Col>
                  <Col xs={1}>
                    <Row end="xs">
                      <HamburgerMenu />
                    </Row>
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
