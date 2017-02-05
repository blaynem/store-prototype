import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePageCategories extends Component {
	render() {
		// allows you to not type 'this.props' a lot
		const { category } = this.props;
		// grabs the correct images for the homepage categories
		const imageSrc = `./images/${category.img_src}.jpg`;
		// grabs the correct link for the homepage categories
		const linkTo = `/list/${category.code}`;
		// allows you to pass in the size of the homepage category you want
		const divClassSize = (category.size);
		const titleOfDiv = (category.title)
		const buttonStyle = {
			backgroundColor: "white",
			padding: "10px 30px",
			border: "2px solid black",
			color: "black"
		}
		return (
			<div style={{padding:0}} className={divClassSize}>
				<div style={{margin:"auto"}} className="row">
					<Link to={linkTo}>
						<img
						style={{maxHeight:"100%", width:"100%"}}
						src={imageSrc}
						alt="uh yeah"
						className="img-responsive"/>
					</Link>
				</div>
				<div style={{textAlign:"center", margin:"40px 0"}} className="row">
					<h3 style={{margin:"0 0 40px 0"}}>{titleOfDiv}</h3>
					<Link to={linkTo}>
						<button
						style={buttonStyle}
						type="button">Shop Now</button>
					</Link>
				</div>
			</div>
		)
	}
}