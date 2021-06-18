import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import ScrollToTop from './common/scroll';
import { Routes } from './routes'
import configureStore from './redux/configure';
import './index.css';

const initialState = {};
const store = configureStore({ initialState });

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <div className="index__background">
            {renderRoutes(Routes, {})}
          </div>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

if (typeof window !== 'undefined') {
    ReactDOM.render(<App />, document.getElementById("root"));
}
