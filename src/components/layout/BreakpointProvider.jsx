import React, { Component } from 'react'

const breakpoints = [
    { start: 0, limit: 575, key: 'xsmall' },
    { start: 576, limit: 767, key: 'small' },
    { start: 768, limit: 991, key: 'medium' },
    { start: 992, limit: 1199, key: 'large' },
    { start: 1200, limit: 8000, key: 'xlarge' },
]

export const ThemeContext = React.createContext('medium');

export default class BreakpointProvider extends Component {
    state = { value: { currentBreakpoint: 'xsmall', currentWidth: 0 } }

    componentDidMount() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    onResize = () => {
        const width = window.innerWidth
        let currentBreakpoint = breakpoints.find(i => i.start <= width && i.limit > width).key
        this.setState({ value: { currentBreakpoint, currentWidth: width } })
    }

    render() {
        return <ThemeContext.Provider value={this.state.value}>{this.props.children}</ThemeContext.Provider>
    }
}