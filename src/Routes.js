import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './App';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
import ListPage from './pages/ListPage';

const Routes = (props) => (
	<Provider store={store}>
		<Router history={history}>
			<Route
				path="/"
				component={App} >
				<IndexRoute
					component={HomePage}/>
				<Route 
					path="/list/:catId"
					component={ListPage}/>
				<Route
					path="*"
					component={NotFound}/>
			</Route>
		</Router>
	</Provider>
);

export default Routes;