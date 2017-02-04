import React, { Component } from 'react';
import HomePageCategories from './HomePageCategories';

export default class HomePage extends Component {

  render() {
    return(
      <div className="">
        <HomePageCategories
        	name="Men's Outerwear"
        	headerLink="#"
        	catSize="col-xs-12"
        	headerImage="./images/mens_outerwear.jpg"/>
        <HomePageCategories
        	name="Ladies Outerwear"
        	headerLink="#"
        	catSize="col-xs-12"
        	headerImage="./images/ladies_outerwear.jpg"/>
        <HomePageCategories
        	name="Men's T-Shirts"
        	headerLink="#"
        	catSize="col-xs-6"
        	headerImage="./images/mens_tshirts.jpg"/>
        <HomePageCategories
        	name="Ladies T-Shirts"
        	headerLink="#"
        	catSize="col-xs-6"
        	headerImage="./images/ladies_tshirts.jpg"/>
      </div>
    );
  }
}

