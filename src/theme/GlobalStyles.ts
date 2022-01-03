import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Graphik Web', 'Roboto', 'Arial', sans-serif;
  }
  html {
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
  }
  body {
    height: 100%;
    background-color: #f8fafb;
    overflow-x: hidden;
  }
  
  ul, li, ol {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: transparent;
  }
  
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  &:focus {
    outline: none;
  }
`;

export default GlobalStyles;
