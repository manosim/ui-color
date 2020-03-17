import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

export const DEFAULT_COLOR = '#4A5899';

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
    primary: DEFAULT_COLOR,
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
    picker: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      ':hover,:focus,:active': {
        cursor: 'pointer',
        outline: 'none',
        color: '#000',
      },
    },
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

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
