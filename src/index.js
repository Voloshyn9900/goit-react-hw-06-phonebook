import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from './components/Global.styled';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#212121',
    lightGray: '#e4eaf0',
    lightBlue: '#2196f3',
    lightBlueHover: '#188ce8',
  },
  radii: {
    sm: '2px',
    md: '6px',
    lg: '12px',

  },

  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
