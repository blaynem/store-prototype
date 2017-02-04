import React, { Component } from 'react';

export default class Testimonials extends Component {
	render() {
		return(
			<div className="container">
				<h1>This page is: {this.props.category}</h1>
			</div>
		);
	}
};