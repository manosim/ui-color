import App from 'next/app';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#4A5899',
    grayLight: '#F5F7F5',
  },
  fonts: {
    heading: "'Sen', sans-serif",
    monospace: "Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
  variants: {
    link: {
      backgroundColor: 'none',
      color: 'primary',
      textDecoration: 'none',
    },
  },
  buttons: {
    transparent: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      ':hover,:focus': {
        cursor: 'pointer',
        outline: 'none',
      },
      ':active': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
