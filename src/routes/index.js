import React from 'react';
import { Route, Switch, withRouter } from 'react-router'
import { connect } from 'react-redux';
import Home from '../containers/Home'
import TabThree from '../containers/TabThree'
import TabTwo from '../containers/TabTwo'
import TabOne from '../containers/TabOne'

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

export default withRouter(connect(state => ({
	location: state.location,
}))(Routes));