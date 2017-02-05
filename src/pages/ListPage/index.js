import React, { Component } from 'react';
import ListPageItems from './ListPageItems';

export default class Testimonials extends Component {
	render() {
		// grabs what page you're on and sets the correct categories to get
		const whatPage = (this.props.params.catId);
		// searches through the items data and then grabs the current url
		// page to help determine what item object to get
		const list = (this.props.items[whatPage]);

		// creates the list page items by looping through the items.catId data
    	// then passing it it's props
		const listItems = (list.map((item, i) => (
				<ListPageItems
		    		key={i + item.code}
		            index={i}
		            item={item}
		            {...this.props}/>
			))
		);
		return(
			<div className="container">
				{listItems}
			</div>
		);
	}
};