import { createGlobalStyle } from 'styled-components'

/* eslint no-unused-expressions: 0 */
const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

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
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`

export default GlobalStyles