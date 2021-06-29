import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes';
import { GlobalMain } from '../styles';

export default function App({ Component, pageProps }) {
  const [theme, updateTheme] = useState('light');

  // Save Theme to Local Storage
  function saveTheme(mode) {
    localStorage.setItem('theme', mode);
    updateTheme(mode);
  }

  // Toggle Light/Dark Theme
  function toggleTheme() {
    saveTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') || 'light';
    saveTheme(localTheme);
  }, []);

  return (
    <React.Fragment>
      <GlobalMain />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
          <link rel='apple-touch-icon' href='/logo192.png' />
          <link rel='manifest' href='/manifest.json' />
          <title>Blinkhash | API Reference</title>
        </Head>
        <Component theme={theme} toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
