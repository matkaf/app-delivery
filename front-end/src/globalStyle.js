import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Source Code Pro', monospace;
  }
  html {
    height: 100vh;
    width: 100%;
  }

  body {
    height: 100vh;
    width: 100%;
  }
`;

export default globalStyle;
