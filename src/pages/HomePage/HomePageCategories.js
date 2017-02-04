import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePageCategories extends Component {
	render() {

		const imageSrc = `./images/${this.props.category.img_src}.jpg`;
		const linkTo = `/list/${this.props.category.code}`;
		const divClassSize = (this.props.category.size);
		const titleOfDiv = (this.props.category.title)
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