import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import * as reducers from './reducers'
import Layout from './components/Layout'
import Home from './containers/Home'

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

ReactDOM.render(
	<Provider store={store}>
		<Layout>
			<Home />
		</Layout>
	</Provider>
	, document.getElementById('root')
	);
registerServiceWorker();