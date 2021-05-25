import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './utils/theme';
import GlobalStyles from './utils/GlobalStyles';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
