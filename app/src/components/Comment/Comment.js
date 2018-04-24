import React from "react";

const comment = props => {
  return (
    <div className="col-12 comment">
      <div className="col-12 comment-header">
          <i className="far fa-thumbs-up" onClick={ e => {props.onUpVoteComment(props.comment.id)}}/>
          <i className="far fa-thumbs-down" onClick={ e => {props.onDownVoteComment(props.comment.id)}}/>
          {props.comment.voteScore}
      </div> 
      <div className="col-12 comment-content">
        {props.comment.body}
      </div>
      <div className="col-12 comment-footer">
        Comment from {props.comment.author} on {props.comment.commentedDate} 
        <span className="delete-icon" onClick={ e => {props.onDeleteHandler(props.comment.id)}}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </div>
    </div>
  );
};

export default comment;
