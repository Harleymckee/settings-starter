import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router'

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Route, Switch, withRouter } from 'react-router'

import { connect } from 'react-redux';
import * as reducers from './reducers'
import Layout from './components/Layout'

import Home from './containers/Home'
import TabThree from './containers/TabThree'
import TabTwo from './containers/TabTwo'
import TabOne from './containers/TabOne'


// TODO: clean this up
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './styles/animate.css'; 
import './styles/admin-style.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

// move to components?
const ConnectedSwitch = connect(state => ({
	location: state.location
}))(Switch);

const Routes = () => {
	return (
		<ConnectedSwitch>
			<Route exact path="/" component={Home} />
			<Route path="/tabone" component={TabOne} />
			<Route path="/tabtwo" component={TabTwo} />
			<Route path="/tabthree" component={TabThree} />
		</ConnectedSwitch>
	)
}

const ConnectedRoutes = withRouter(connect(state => ({
	location: state.location,
}))(Routes));

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Layout>
				<ConnectedRoutes />
			</Layout>
		</ConnectedRouter>
	</Provider>
	, document.getElementById('root')
	);
registerServiceWorker();