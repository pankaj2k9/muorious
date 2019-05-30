import { fontFace } from 'polished'
import { createGlobalStyle } from 'styled-components'

import modernEraBold from './Modern Era/Modern Era Bold.ttf'
import modernEraRegular from './Modern Era/Modern Era Regular.ttf'
import modernEraMedium from './Modern Era/Modern Era Medium.ttf'
import modernEraLight from './Modern Era/Modern Era Light.ttf'

const injectFontsStyle = createGlobalStyle`
  @font-face {
    font-family: 'Modern Era';
    font-weight: 400;
    src: url("${modernEraRegular}") format('truetype');
  }
  @font-face {
    font-family: 'Modern Era';
    font-weight: 500;
    src: url("${modernEraMedium}") format('truetype');
  }
  @font-face {
    font-family: 'Modern Era';
    font-weight: 700;
    src: url("${modernEraBold}") format('truetype');
  }
  @font-face {
    font-family: 'Modern Era';
    font-weight: 200;
    src: url("${modernEraLight}") format('truetype');
  }

  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    font-size:16px;
  }
`

export default injectFontsStyle
