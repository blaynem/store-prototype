import React, { Component } from 'react';
import Header from './components/Header';

export default class Main extends Component{
	render() {
		return (
			<div style={{width:"100%", padding:0}} className="container">
				<div style={{margin:0}} className="row">
					<Header />
				</div>
				{React.cloneElement(this.props.children, this.props)}
				<div style={{marginLeft:0, marginRight:0, textAlign:"center"}} className="row">
					<button style={{border:"2px solid black", backgroundColor:"white"}}>This is just a demo store</button>
				</div>
			</div>
		)
	}
};