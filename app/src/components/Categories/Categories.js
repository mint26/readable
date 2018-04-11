import React, { Component } from "react";
import * as $ from 'jquery'; 

class Categories extends Component{

  constructor(){
    super(); 
    this.state = {
      selectedCategory : ""
    }
  }

  onClick = (e) => {
    let elem = e.currentTarget; 
    if (elem){
      let val = $(elem).text(); 
      this.props.onCategorySelected(val); 
    }
  }

  render() {
    let navList = null;
    if (this.props.items && this.props.items.length > 0) {
      navList = this.props.items.map((item, index) => {
        return <li key={`li-${index}`} onClick={this.onClick}>{item.name}</li>;
      });
    }
  
    return (
      <div className="categories">{navList}</div>
    );
  }
};

export default Categories;
