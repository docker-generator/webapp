import { createGlobalStyle } from 'styled-components'

/* eslint no-unused-expressions: 0 */
const GlobalStyles = createGlobalStyle`
    * {
        list-style: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`

export default GlobalStyles