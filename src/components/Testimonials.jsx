import React from 'react'
import Section from '../atoms/Section/Section'
import { H1, H4, TextBig, TextHighlighter } from '../atoms/Texts'
import Row from '../atoms/Row'
import Col from '../atoms/Col'
import { Container } from '../atoms/Container'

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: 1};
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
                                    <div className="box">
                                        <H4>
                                            “Miuros helped us analyze our customer service data and has 
                                            significantly improved our customer support responses efficiency.”
                                        </H4>
                                    </div>
                                </Row>
                            </Container>
                        </Section>)
                    case 2:
                    return (
                        <Section testimonials yellow >
                            <Container>
                                <Row>
                                    <div className="box">
                                        <H4>
                                            "Within a month the first reply time improved by almost 50%
                                            and the average ticket handling time was cut by 10%"
                                        </H4>
                                    </div>
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

    componentDidMount() {
        this._interval = setInterval(() => {
            this.setState({
                active: this.state.active < 2 ? this.state.active+1 : 1
            });
        }, 2000);
      }
    
    componentWillUnmount() {
        clearInterval(this._interval);
    }
}

export default Testimonials