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
				{this.props.children}
				<div style={{marginLeft:0, marginRight:0, textAlign:"center", position:"absolute", bottom:0, right:"50%"}} className="row">
					<button style={{border:"2px solid black", backgroundColor:"white"}}>This is just a demo store</button>
				</div>
			</div>
		)
	}
};