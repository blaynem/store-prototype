import React, { Component } from 'react';
import HomePageCategories from './HomePageCategories';

export default class HomePage extends Component {

  render() {

    return(
      <div className="container">
        <HomePageCategories
        	name="Memes"
        	catSize="col-xs-12"
        	headerImage="./images/mens_outerwear.jpg"/>
        <HomePageCategories
        	name="Beer"
        	catSize="col-xs-12"
        	headerImage="./images/ladies_outerwear.jpg"/>
        <HomePageCategories
        	name="Memes"
        	catSize="col-xs-6"
        	headerImage="./images/mens_tshirts.jpg"/>
        <HomePageCategories
        	name="Beer"
        	catSize="col-xs-6"
        	headerImage="./images/ladies_tshirts.jpg"/>
      </div>
    );
  }
}

