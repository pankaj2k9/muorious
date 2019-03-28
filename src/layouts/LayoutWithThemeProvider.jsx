import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../utils/defaultTheme';



const LayoutWithThemeProvider = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      { children }
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