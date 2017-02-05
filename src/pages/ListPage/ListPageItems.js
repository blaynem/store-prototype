import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePageCategories extends Component {
	render() {
		const { item, params } = this.props;
		const imageSrc = `/images/${item.img_src[1]}.jpg`;
		const linkTo = `/detail/${params.catId}/${item.code}`;
		const titleOfDiv = (item.text)
		const priceOfDiv = (item.price)
		const textStyle = {
			margin:"0 0 10px 0",
			fontSize:"1em",
			color:"black"
		}
		const imgStyle = {
			maxHeight:"100%",
			margin:"auto"
		}
		return (
			<div style={{padding:0}} className="col-xs-6 col-sm-4">
				<Link to={linkTo}>
					<div className="row">
						<img
							style={imgStyle}
							src={imageSrc}
							alt={item.text}
							className="img-responsive"/>
						<div style={{textAlign:"center", margin:"40px 0"}} className="row">
							<h3 style={textStyle}>{titleOfDiv}</h3>
							<h3 style={textStyle}>${priceOfDiv}</h3>
						</div>
					</div>
				</Link>
			</div>
		)
	}
}