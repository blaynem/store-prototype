import React, { Component } from 'react';

export default class Testimonials extends Component {
	render() {
		return(
			<figure className="container">
				<pre>
		        {JSON.stringify(this.props.items,' ')}
		        </pre>
			</figure>
		);
	}
};