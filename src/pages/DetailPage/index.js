import React, { Component } from 'react';

export default class HomePageCategories extends Component {
	render() {
		const catParams = (this.props.params.catId);
		const itemParams = (this.props.params.itemId);
		const items = (this.props.items[catParams]);

		var details = {};
		for (var i=0; i<items.length; i++){	
			if (items[i].code === itemParams){
				details = (items[i]);
			}
		};
		const featureList = (details.features.map((features, i) => (<li key={i}>{features}</li>)));

		const imgsrc = `/images/${details.img_src[0]}.jpg`;
		const imgStyle = {
			maxHeight:"100%",
			margin:"auto"
		}
		return (
			<div style={{margin:0}} className="row">
				<div className="col-sm-6">
					<img style={imgStyle} src={imgsrc} alt={details.text} className="img-responsive"/>
				</div>
				<div className="col-sm-6">
					<h2>{details.text}</h2>
					<h3>${details.price}</h3>
					<h3>Description</h3>
					<h4>{details.description}</h4>
					<h3>Features</h3>
					<ul>
						{featureList}
					</ul>
				</div>
			</div>
		)
	}
}