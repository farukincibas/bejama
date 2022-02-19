import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    padding: 0 20px;
    max-width: 1276px;
    margin: auto;
  }
`;

export default GlobalStyle;