import React from 'react'
import Section from '../atoms/Section/Section'
import { H1, H4, TextBig, TextHighlighter } from '../atoms/Texts'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import Container from '../atoms/Container'

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: 2};
    }
    render() {
        return (
            <div>
            {(() => {
                switch(this.state.active) {
                    case 1:
                    return (
                        <Section testimonials pink >
                            <Container>
                                <Row>
                                    
                                </Row>
                            </Container>
                        </Section>)
                    case 2:
                    return (
                        <Section testimonials yellow >
                            <Container>
                                <Row>
                                
                                </Row>
                            </Container>
                        </Section>)
                    default:
                    return null
                }
            })()}
            </div>
        )
    }
}

export default Testimonials