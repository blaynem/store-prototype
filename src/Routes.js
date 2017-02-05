import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
// import store, { history } from './store';
import store from './store';

import App from './App';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

// change back to <Router history={history}> after styling
// use hashHistory for styling, when the site reloads it doesn't break styling
const Routes = (props) => (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route
				path="/"
				component={App} >
				<IndexRoute
					component={HomePage}/>
				<Route 
					path="/list/:catId"
					component={ListPage}/>
				<Route 
					path="/detail/:catId/:itemId"
					component={DetailPage}/>
				<Route
					path="*"
					component={NotFound}/>
			</Route>
		</Router>
	</Provider>
);

export default Routes;