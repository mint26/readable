import React from "react";
import Comment from "../Comment/Comment";
import DateService from "../../services/DateService";

const post = props => {
  let formattedDate = DateService.formatDate(props.timestamp);
  return (
    <div className="col-12 post">
      <div className="col-12 post-header">
        <span className="col-8 header-title">{props.title}</span>
        <span className="col-4 header-vote">{props.voteScore}</span>
      </div>
      <div className="col-12 post-entry">
        <div className="col-12 col-md-8 col-sm-12 post-main">
          {props.body}
          <div className="col-12 post-footer">
            Written by
            <span className="author"> {props.author} </span>
            on {formattedDate}
          </div>
        </div>
        <div className="col-12 col-md-4 col-sm-12 post-comments">
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default post;
