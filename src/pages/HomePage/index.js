import React, { Component } from 'react';
import HomePageCategories from './HomePageCategories';

export default class HomePage extends Component {

  render() {
    const createHomeCats = (
        (category, i) => 
        <HomePageCategories
            key={category.title + i}
            index={i}
            category={category}
            {...this.props}/>
    );
    return(
      <div className="">
        {this.props.categories.map(createHomeCats)}
      </div>
    );
  }
}