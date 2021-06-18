import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes.js';
import ScrollToTop from './common/scroll';
import configureStore from './redux/configure';
import './index.css';

// Individual App Routes
import { Routes } from './routes';

// External CSS
import './assets/styles/bootstrap.css';
import './assets/styles/modal.css';

const initialState = {};
const store = configureStore({ initialState });

export default function App() {
  const [theme, updateTheme] = useState('light');

  // Save Theme to Local Storage
  function saveTheme(mode) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', mode);
    }
    updateTheme(mode);
  }

  // Toggle Light/Dark Theme
  function toggleTheme() {
    saveTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') || '';
    saveTheme(localTheme);
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            {renderRoutes(Routes, {
              theme: theme,
              toggleTheme: toggleTheme,
            })}
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('root'));
}
