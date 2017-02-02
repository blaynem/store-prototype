import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFoundPage';

const Routes = (props) => (
	<Router history={hashHistory}>
		<Route
			path="/"
			component={App} >
			<IndexRoute
				component={HomePage}/>
		</Route>
		<Route
			path="*"
			component={NotFound}/>
	</Router>
);

export default Routes;