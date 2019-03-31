import React, { Component } from 'react'
import { ThemeContext } from './BreakpointProvider'

const sizes = {
    xsmall: 0,
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200
}

export default class Breakpoint extends Component {
    static contextType = ThemeContext;
    render() {
        const { only, up, down, ...screenSizes } = this.props
        const givenSize = Object.entries(screenSizes).find(i => i[1])[0]
        return (
            <ThemeContext.Consumer>{({ currentBreakpoint, currentWidth }) => {
                const matchesBreakpoint = screenSizes[currentBreakpoint]
                const shouldRender = only
                    ? matchesBreakpoint
                    : (up
                        ? currentWidth >= sizes[givenSize]
                        : currentWidth < sizes[givenSize]
                    )
                return shouldRender ? this.props.children : null
            }}
            </ThemeContext.Consumer>
        )
    }
}