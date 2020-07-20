import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    color: #100100;
  }

  body, html {
    margin: 0;
  }

  html {
    padding: 0;
  }

  body {
    padding: 60px 0 0 0;
  }

  * {
    box-sizing: border-box;
  }

  ::before,
  ::after {
    box-sizing: border-box;
  }
`
