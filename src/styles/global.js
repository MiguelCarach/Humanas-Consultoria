import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    font-family:"Nuniko",sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: #fff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

`;
