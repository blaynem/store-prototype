import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return(
      <div style={{borderBottom:"2px solid gray", width:"100%", background:"rgba(0,0,0,0.2"}} className="container">
      	<div style={{textAlign:"center"}} className="row">
	        <div className="col-xs-2">
	        	<h3><i className="glyphicon glyphicon-chevron-left"></i></h3>
	        </div>
	        <div className="col-xs-8">
	        	<h1>Store</h1>
	        </div>
	        <div className="col-xs-2">
	        	<h3><i className="glyphicon glyphicon-shopping-cart"></i></h3>
	        </div>
      	</div>
      	<div style={{width:"50%", textAlign:"center"}} className="container">
      		<div style={{margin:"0 10px", display:"inline-block"}}><h3>Memes</h3></div>
      		<div style={{margin:"0 10px", display:"inline-block"}}><h3>Beer</h3></div>
      		<div style={{margin:"0 10px", display:"inline-block"}}><h3>Cats</h3></div>
      		<div style={{margin:"0 10px", display:"inline-block"}}><h3>Doggos</h3></div>
      	</div>
      </div>
    );
  }
}

