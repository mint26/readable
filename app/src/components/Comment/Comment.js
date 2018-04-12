import React from "react";

const comment = props => {
  return (
    <div className="col-12 comment">
      <div className="col-12 comment-content">
        {props.content}
      </div>
      <div className="col-12 comment-footer">
        Comment from {props.author} on {props.commentedDate} 
        <span className="delete-icon" onClick={ e => {props.onDeleteHandler(props.id)}}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </div>
    </div>
  );
};

export default comment;
