import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';
import history from './services/history';

import { initGA } from './utils/googleAnalytics';
initGA();

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default hot(App);
