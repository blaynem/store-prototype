import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

  render() {
    const titleDivStyle = {
      margin:"0 10px",
      display:"inline-block",
      color:"black"
    }
    const titleStyle = {
      fontSize:"1.2em"
    }
    const titles = [["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"], ["mens_outerwear", "ladies_outerwear", "mens_tshirts", "ladies_tshirts"]]
    // oh my god it worked im a genius
    const titlesList = titles[0].map(
      (title, i) => (
        <Link to={`/list/${titles[1][i]}`} key={titles[1][i] + i}>
          <div style={titleDivStyle}>
            <h3 style={titleStyle}>{titles[0][i]}</h3>
          </div>
        </Link>
      )
    )


    return(
      <div style={{ width:"100%", background:"rgba(0,0,0,0.0"}} className="container">
      	<div style={{textAlign:"center", marginBottom:"20px"}} className="row">
	        <div className="col-xs-2">
	        	<h3><i className="glyphicon glyphicon-chevron-left"></i></h3>
	        </div>
	        <div className="col-xs-8">
	        	<Link to="/" style={{color:"black"}}><h1 style={{fontSize:"2em"}}>Store</h1></Link>
	        </div>
	        <div className="col-xs-2">
	        	<h3><i className="glyphicon glyphicon-shopping-cart"></i></h3>
	        </div>
      	</div>
      	<div style={{width:"100%", textAlign:"center", marginBottom:"20px"}} className="row">
          {titlesList}
        </div>
      </div>
    );
  }
}

      		// <Link to="/list/mens_outerwear">
            // <div style={titleDivStyle}>
              // <h3 style={titleStyle}>Men's Outerwear</h3>
            // </div>
          // </Link>
      		// <Link to="/list/ladies_outerwear">
            // <div style={titleDivStyle}>
              // <h3 style={titleStyle}>Ladies Outerwear</h3>
            // </div>
          // </Link>
      		// <Link to="/list/mens_tshirts">
            // <div style={titleDivStyle}>
              // <h3 style={titleStyle}>Men's T-Shirts</h3>
            // </div>
          // </Link>
      		// <Link to="/list/ladies_tshirts">
            // <div style={titleDivStyle}>
              // <h3 style={titleStyle}>Ladies T-Shirts</h3>
            // </div>
          // </Link>
