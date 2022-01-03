import { css, DefaultTheme } from 'styled-components';

export { default as GlobalFonts } from './GlobalFonts';
export { default as GlobalStyles } from './GlobalStyles';

const theme: DefaultTheme = {
  palette: {
    white: '#fff',
    text: '#3e3934',
    dark: '#2E384D',
    gray: '#676460',
    blueGray: '#8798AD',
    gray25: '#bbbab8',
    lightGray: '#e9e9ec',

    blue: '#0096d7',
    electric: '#38DAFF',
    bleached: '#EEFCFE',
    orange: '#ff9700',
    faded: '#f8fafb',

    error: '#FF4444',
    warning: '#ffbb34',
    success: '#6CD038',
  },
  breakpoints: {
    mobile: '420px',
    fablet: '600px',
    tablet: '750px',
    desktop: '990px',
  },
  util: {
    ellipsis: css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `,
    flexCenter: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    baseAnswerWrapper: css`
      background: #ffffff;
      box-shadow: 0 10px 20px rgba(31, 32, 65, 0.05);
      border-radius: 4px;
      border: 2px solid transparent;
    `,
    clickElem: css`
      cursor: pointer;
      &:hover {
        opacity: 0.7;
        transition: 0.2s opacity;
      }
      &:active {
        opacity: 0.5;
      }
    `,
  },
};

export default theme;
