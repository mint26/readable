import React from "react";

const categories = props => {
  let navList = null;
  if (props.items && props.items.length > 0) {
    navList = props.items.map((item, index) => {
      return <li key={`li-${index}`}>{item.name}</li>;
    });
  }

  return (
    <div className="row">
      <div className="nav-bar col-12">{navList}</div>
    </div>
  );
};

export default categories;
