import React, { Component } from 'react';

export default class HomePageCategories extends Component {
	render() {
		// grabs the params from url to check what category it's on
		const catParams = (this.props.params.catId);
		// grabs the params from url to check what item it's on
		const itemParams = (this.props.params.itemId);
		// grabs the data of items and sets the category page to 
		// more easily grab specific items
		const items = (this.props.items[catParams]);

		// loops over the data of items, finds which one is equal to the page
		// you're on, then sets that as details. There's probably a better
		// way to do this, but i'm still learning
		var details = {};
		for (var i=0; i<items.length; i++){	
			if (items[i].code === itemParams){
				details = (items[i]);
			}
		};

		// maps through the features in items data and places them in a list
		const featureList = (details.features.map((features, i) => (<li key={i}>{features}</li>)));

		// gets the correct image to be displayed
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