import { createGlobalStyle } from 'styled-components';

import GraphikExtralight from './fonts/Graphik-Extralight-Web.woff2';
import GraphikMedium from './fonts/Graphik-Medium.woff2';
import GraphikRegular from './fonts/Graphik-Regular-Web.woff2';
import GraphikSemibold from './fonts/Graphik-Semibold-Web.woff2';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Graphik Web';
    src: url(${GraphikExtralight}) format('truetype');
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Graphik Web';
    src: url(${GraphikExtralight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Graphik Web';
    src: url(${GraphikRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Graphik Web';
    src: url(${GraphikMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Graphik Web';
    src: url(${GraphikMedium}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Graphik Web';
    src: url(${GraphikSemibold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Graphik Web';
    src: url(${GraphikSemibold}) format('truetype');
    font-weight: 800;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }
`;

export default GlobalFonts;
