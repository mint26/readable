import React from "react";
import Comment from "../Comment/Comment";
import DateService from "../../services/DateService";
import { PostType } from "../../constants/constants"; 
const createCssClassByType = (type) => {
  switch(type){
    case PostType.Detailed: 
      return {
        postMain: "col-12 col-md-8 col-sm-12",
        postInfo : "col-12 col-md-4 col-sm-12"
      }; 
    default: 
      return {
        postMain: "col-12 col-md-12 col-sm-12",
        postInfo : "hidden"
      }
  }
}

const post = props => {
  let formattedDate = DateService.formatDate(props.timestamp);
  let comments = props.comments ? props.comments.map((comment) => {
    let commentedDate = DateService.formatDate(comment.timestamp);
    return <Comment key={comment.id} content={comment.body} author={comment.author} commentedDate={commentedDate}/>
  }) : null; 

  console.log('post', props.postType); 
  return (
    <div className="col-12 post">
      <div className="col-12 post-header">
        <span className="col-8 header-title" onClick={e => {props.selectedPostHandler(props.id)}}>{props.title}</span>
        <span className="col-4 header-vote">{props.voteScore}</span>
      </div>
      <div className="col-12 post-entry">
        <div className={`${createCssClassByType(props.postType).postMain} post-main`}>
          {props.body}
          <div className="col-12 post-footer">
            Written by
            <span className="author"> {props.author} </span>
            on {formattedDate}
            <span className="edit-icon" onClick={ e => {props.onEditHandler(props.id)}}>
              <img src="./assets/edit.png" alt="edit"/>
            </span>
            <span className="delete-icon" onClick={ e => {props.onEditHandler(props.id)}}>
            <i class="fa fa-delete"></i>
            </span>
          </div>
        </div>

        <div className={`${createCssClassByType(props.postType).postInfo} post-comments`}>
          {comments}
        </div>
      </div>
    </div>
  );
};

export default post;
