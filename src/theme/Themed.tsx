import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalFonts, GlobalStyles } from './theme';

const Themed: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Themed;
