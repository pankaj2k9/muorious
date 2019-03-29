import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Fonts, defaultTheme } from '../utils/styling';



const LayoutWithThemeProvider = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Fonts/>
        { children }
      </React.Fragment>
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