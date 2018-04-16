import React, { Component }from "react";
import Comment from "../Comment/Comment";
import CommentModel from "../../models/Comment";
import DateService from "../../services/DateService";
import { PostType } from "../../constants/constants"; 
import { Button, Input, Form, FormGroup } from "reactstrap";
const createCssClassByType = (type) => {
  switch(type){
    case PostType.Detailed: 
      return {
        postMain: "col-12 col-md-7 col-sm-12",
        postInfo : "col-12 col-md-5 col-sm-12"
      }; 
    default: 
      return {
        postMain: "col-12 col-md-12 col-sm-12",
        postInfo : "hidden"
      }
  }
}

class Post extends Component {

  state = {
    showInput: false, 
    commentAuthor: '', 
    comment: ''
  }

  showInputBox = () => {
    this.setState({showInput: true});
  }

  onCancelAdd = () => {
    this.setState({showInput: false}); 
  }

  onAddHandler = () => {
    let newComment = new CommentModel(this.props.post.id, 
                                DateService.getCurrentDateTimestamp(), this.state.comment, 
                                this.state.commentAuthor, 0, false, false); 
    this.props.onAddCommentHandler(newComment); 
  }

  onCommentAuthorChanged = (e) => {
    let val = e.currentTarget ? e.currentTarget.value : ''; 
    this.setState({commentAuthor: val}); 
  }

  onCommentChanged = (e) => {
    let val = e.currentTarget ? e.currentTarget.value : ''; 
    this.setState({comment: val}); 
  }

  renderInputBox = () => {
    if (this.state.showInput) {
      return (
        <div className="input-comment-panel">
          <h3>Leave a note</h3>
          <Form>
              <FormGroup>
                  <Input id="author" placeholder="Name here" value={this.state.commentAuthor} onChange={this.onCommentAuthorChanged}></Input>
              </FormGroup>
              <FormGroup>
                  <Input type="textarea" onChange={this.onCommentChanged} value={this.state.comment}></Input>
              </FormGroup>
              <div className="input-comment-btn-panel">
                <Button onClick={this.onCancelAdd} className="input-comment-btn">Cancel</Button>
                <Button className="input-comment-btn" onClick={this.onAddHandler}>Add</Button>
              </div>
          </Form>
        </div>
      )
    } 

    return null; 
  }

  render(){
    let formattedDate = DateService.formatDate(this.props.timestamp);
    let comments = this.props.comments ? this.props.comments.map((comment) => {
    let commentedDate = DateService.formatDate(comment.timestamp);
    return <Comment key={comment.id} id={comment.id} content={comment.body} author={comment.author} commentedDate={commentedDate} onDeleteHandler={this.props.onCommentDeleteHandler}/>
  }) : null; 

    let showAddComment = !this.state.showInput? (          
                                                <div className="comment-reply-panel">
                                                  <Button onClick={this.showInputBox}>Add New Comment</Button>
                                                </div>
                                                ) : null; 
                                          

  return (
    <div className="col-12 post">
      <div className="col-12 post-header">
        <span className="col-8 header-title" onClick={e => {
            if (this.props.selectedPostHandler)
            this.props.selectedPostHandler(this.props.post.id)
          }
        }>{this.props.post.title}</span>
        <span className="col-4 header-vote">{this.props.post.voteScore}</span>
      </div>
      <div className="col-12 post-entry">
        <div className={`${createCssClassByType(this.props.postType).postMain} post-main`}>
          {this.props.post.body}
          <div className="col-12 post-footer">
            Written by
            <span className="author"> {this.props.post.author} </span>
            on {formattedDate}
            <span className="edit-icon" onClick={ e => {this.props.onEditHandler(this.props.post.id)}}>
              <i className="fas fa-edit"></i>
            </span>
            <span className="delete-icon" onClick={ e => {this.props.onDeleteHandler(this.props.post.id)}}>
              <i className="fas fa-trash-alt"></i>
            </span>
          </div>
        </div>

        <div className={`${createCssClassByType(this.props.postType).postInfo} post-comments`}>
          {comments}
          {showAddComment}
        </div>
      </div>
      {this.renderInputBox()}
    </div>
    );
  }
  
};

export default Post;
