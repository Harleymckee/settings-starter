import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import createHistory from 'history/createBrowserHistory';
import Layout from './Layout';

const history = createHistory()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router history={history}><Layout /></Router>, div);
});
