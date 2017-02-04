import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePageCategories extends Component {
	render() {

		const buttonStyle = {
			backgroundColor: "white",
			padding: "10px 30px",
			border: "2px solid black",
			color: "black"
		}
		return (
			<div style={{padding:0}} className={this.props.catSize}>
				<div style={{margin:"auto"}} className="row">
					<Link to={this.props.headerLink}><img
						style={{maxHeight:"100%", width:"100%"}}
						src={this.props.headerImage}
						className="img-responsive"/></Link>
				</div>
				<div style={{textAlign:"center", margin:"40px 0"}} className="row">
					<h3 style={{margin:"0 0 40px 0"}}>{this.props.name}</h3>
					<Link to={this.props.headerLink}><button
						style={buttonStyle}
						type="button"
						class="btn btn-link">Shop Now</button></Link>
				</div>
			</div>
		)
	}
}