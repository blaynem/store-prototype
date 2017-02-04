import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePageCategories extends Component {
	render() {
		const { item } = this.props;
		// const imageSrc = `./images/${item.img_src}.jpg`;
		const imageSrc = "./images/mens_outerwear.jpg";
		console.log(imageSrc);
		const linkTo = `/list/${item.code}`;
		const divClassSize = (item.size);
		const titleOfDiv = (item.text)
		return (
			<div>
				{JSON.stringify(this.props.item, null,' ')}
				<div style={{padding:0}} className="col-xs-6">
					<div style={{margin:"auto"}} className="row">
						<Link to={linkTo}>
							<img
							style={{maxHeight:"100%", width:"100%"}}
							src={imageSrc}
							alt={item.text}
							className="img-responsive"/>
						</Link>
					</div>
					<div style={{textAlign:"center", margin:"40px 0"}} className="row">
						<h3 style={{margin:"0 0 40px 0"}}>{titleOfDiv}</h3>
					</div>
				</div>
			</div>
		)
	}
}