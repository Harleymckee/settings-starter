// TODO get rid of this and just ignore oneline with global
/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import * as reducers from './reducers'
import Layout from './components/Layout'
import Home from './containers/Home'
import TabOne from './containers/TabOne'
import TabTwo from './containers/TabTwo'
import TabThree from './containers/TabThree'

// TODO: clean this up
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './styles/animate.css'; 
import './styles/admin-style.css';

const store = createStore(
  combineReducers({
    ...reducers,
  }),
)

// TODO: this is weird
let _path;
if (typeof path !== 'undefined') {
	_path = path;
} else {
	_path = '/'
}

const content = {
		'/': Home,
		'/tabone': TabOne,
		'/tabtwo': TabTwo,
		'/tabthree': TabThree,
}

const Content = content[_path];

ReactDOM.render(
	<Provider store={store}>
		<Layout>
			<Content />
		</Layout>
	</Provider>
	, document.getElementById('root')
	);
registerServiceWorker();

/* eslint-enable */