import React, { Component } from 'react';

export default class HomePageCategories extends Component {
	render() {

		const buttonStyle = {
			backgroundColor: "white",
			padding: "10px 30px"
		}

		return (
			<div className={this.props.catSize}>
				<img
					style={{maxHeight:"100%"}}
					src={this.props.headerImage}
					className="img-responsive"/>
				<h1>{this.props.name}</h1>
				<button
					style={buttonStyle}
					type="button"
					class="btn btn-link">Shop Now</button>
			</div>
		)
	}
}