import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    height: 100vh;
    width: 100vw;
  }

  body {
    height: 100vh;
    width: 100vw;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;

    &::-moz-focus-inner {
    border: 0;
    padding: 0;
    }
  }
`;

export default globalStyle;
