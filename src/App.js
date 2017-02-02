import React, { Component } from 'react';
import Header from './components/Header';

import './App.css';

export default class App extends Component{
	render() {
		return (
			<div style={{width:"100%", padding:0}} className="container">
				<div style={{margin:0}} className="row">
					<Header />
				</div>
				<h1>suh</h1>
			</div>
		)
	}
};