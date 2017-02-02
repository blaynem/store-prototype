import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return(
      <div style={{backgroundColor:"red"}}>
      	<div className="row">
	        <div className="col-xs-2">
	        	<h3><i className="glyphicon glyphicon-chevron-left"></i></h3>
	        </div>
	        <div className="col-xs-8">
	        	<h1 style={{textAlign:"center"}}>Store</h1>
	        </div>
	        <div className="col-xs-2">
	        	<h3><i className="glyphicon glyphicon-shopping-cart"></i></h3>
	        </div>
      	</div>
      	<div className="row">
      		
      	</div>
      </div>
    );
  }
}

