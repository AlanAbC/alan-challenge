import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './store';
import './index.css';

const store = configureStore();

/**
 * Renders the full app with redux
 */
render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
