import React, { Component } from 'react';
import HomePageCategories from './HomePageCategories';

export default class HomePage extends Component {

  render() {

    // creates the home page categories by looping through the categories data
    // then passing it it's props
    const createHomeCats = (this.props.categories.map(
      (category, i) => 
        (
          <HomePageCategories
          key={category.title + i}
          index={i}
          category={category}
          {...this.props}/>
        )
      )
    );
    return(
      <div className="">
        {createHomeCats}
      </div>
    );
  }
}