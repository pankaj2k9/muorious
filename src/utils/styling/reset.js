import { createGlobalStyle } from 'styled-components'

const reset = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    h1, h2, h3, h4, h5, p {
        margin: 0;
    }
`
export default reset