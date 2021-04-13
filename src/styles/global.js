import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    font-family:"Nunito",sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html,
  body,
  #root {
    height: 100%;
    background-color: #fbf7ea;
  }

  body {
    background: #fff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

`;
