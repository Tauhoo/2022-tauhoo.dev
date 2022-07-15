import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Inter;
    font-size: 16px;
    color: #646464;
    background: linear-gradient(180deg, #6D6AFE 0%, #FE6A6A 100%);
  }
  * {
      box-sizing: border-box;
  }
`

export default GlobalStyle
