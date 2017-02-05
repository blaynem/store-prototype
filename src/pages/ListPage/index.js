import React, { Component } from 'react';
import { Link } from 'react-router';
import ListPageItems from './ListPageItems';

export default class Testimonials extends Component {
	render() {
		const whatPage = (this.props.params.catId);
		const things = (this.props.items[whatPage]);
		return(
			<div className="container">
				{things.map((item, i) => 
			        <ListPageItems
		        		key={i + item.code}
			            index={i}
			            item={item}
			            {...this.props}/>
				)}
			</div>
		);
	}
};