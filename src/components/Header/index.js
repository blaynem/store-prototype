import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return(
      <div style={{ width:"100%", background:"rgba(0,0,0,0.2"}} className="container">
      	<div style={{textAlign:"center", marginBottom:"20px"}} className="row">
	        <div className="col-xs-2">
	        	<h3><i className="glyphicon glyphicon-chevron-left"></i></h3>
	        </div>
	        <div className="col-xs-8">
	        	<h1 style={{fontSize:"2em"}}>Store</h1>
	        </div>
	        <div className="col-xs-2">
	        	<h3><i className="glyphicon glyphicon-shopping-cart"></i></h3>
	        </div>
      	</div>
      	<div style={{width:"100%", textAlign:"center", marginBottom:"20px"}} className="row">
      		<div style={{margin:"0 10px", display:"inline-block"}}><h3 style={{fontSize:"1.2em"}}>Men's Outerwear</h3></div>
      		<div style={{margin:"0 10px", display:"inline-block"}}><h3 style={{fontSize:"1.2em"}}>Ladies Outerwear</h3></div>
      		<div style={{margin:"0 10px", display:"inline-block"}}><h3 style={{fontSize:"1.2em"}}>Men's T-Shirts</h3></div>
      		<div style={{margin:"0 10px", display:"inline-block"}}><h3 style={{fontSize:"1.2em"}}>Ladies T-Shirts</h3></div>
      	</div>
      </div>
    );
  }
}

