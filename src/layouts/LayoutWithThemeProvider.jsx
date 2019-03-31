import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import BreakpointProvider from '../components/layout/BreakpointProvider'
import { Fonts, defaultTheme, Reset } from '../utils/styling';



const LayoutWithThemeProvider = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <BreakpointProvider>
        <React.Fragment>
          <Reset />
          <Fonts />
          {children}
        </React.Fragment>
      </BreakpointProvider>
    </ThemeProvider>
  )
};

LayoutWithThemeProvider.defaultProps = {
  theme: defaultTheme
}

LayoutWithThemeProvider.propTypes = {
  theme: PropTypes.object
};

export default LayoutWithThemeProvider;