import {React} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../utils/defaultTheme';



const LayoutWithThemeProvider = props => {
  return (
    <ThemeProvider theme={props.theme}>
      {{ children }}
    </ThemeProvider>
  )
};

LayoutWithThemeProvider.defaultProps = {
  theme: defaultTheme,
  children: null
}

LayoutWithThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.node), PropTypes.node]
  )
};