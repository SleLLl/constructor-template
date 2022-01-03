import 'styled-components';

import { FlattenSimpleInterpolation } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      white: string;
      text: string;
      dark: string;
      gray: string;
      blueGray: string;
      gray25: string;
      lightGray: string;

      blue: string;
      electric: string;
      bleached: string;
      orange: string;
      faded: string;

      error: string;
      warning: string;
      success: string;
    };
    breakpoints: {
      mobile: string;
      fablet: string;
      tablet: string;
      desktop: string;
    };
    util: {
      ellipsis: FlattenSimpleInterpolation;
      flexCenter: FlattenSimpleInterpolation;
      clickElem: FlattenSimpleInterpolation;
      baseAnswerWrapper: FlattenSimpleInterpolation;
    };
  }
}
