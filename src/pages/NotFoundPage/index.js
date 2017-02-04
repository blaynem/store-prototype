import React, { Component } from 'react';

export default class Testimonials extends Component {
	render() {
		return(
			<div className="container">
				<h1>WHOOPSIE DOODLES</h1>
				{this.props.children}
			</div>
		);
	}
};