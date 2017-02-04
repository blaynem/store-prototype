import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
import ListPage from './pages/ListPage';

const Routes = (props) => (
	<Router history={hashHistory}>
		<Route
			path="/"
			component={App} >
			<IndexRoute
				component={HomePage}/>
			<Route 
				path="/list/:category"
				component={ListPage}/>
			<Route
				path="*"
				component={NotFound}/>
		</Route>
	</Router>
);

export default Routes;