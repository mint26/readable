import React, { Component } from "react";
import { PostType } from "../../constants/constants"; 
import Post from "../../components/Post/Post";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

class PostView extends Component {

  componentDidMount(){
    if (this.props.match && this.props.match.params && this.props.match.params.id){
      //Init existing post; 
      let id = this.props.match.params.id; 
      this.props.getPostById(id); 

    }
  }

  editPostHandler = (id) => {
    this.props.history.replace('/edit/' + id); 
  }

  commentDeleteHandler = (id) => {
    this.props.deleteComment(id); 
  }

  addCommentHandler = (newComment) => {
    this.props.addComment(newComment); 
  }

  render() {
    let post = null; 
    post = this.props.selectedPost ? <Post
                                  key={this.props.selectedPost.id}
                                  post={this.props.selectedPost}
                                  postType={PostType.Detailed}
                                  onEditHandler={this.editPostHandler}
                                  comments={this.props.comments}
                                  onCommentDeleteHandler={this.commentDeleteHandler}
                                  onAddCommentHandler={this.addCommentHandler}
                                /> : 
                                null; 

    return <div className="post-view">
              {post}
          </div>;
  }
}

const mapStateToProps = state => {
  return {
    selectedPost: state.reducer.selectedPost, 
    comments: state.reducer.comments, 
    toMain: state.reducer.toMain
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPostById: (id) => dispatch(actions.getPostById(id)), 
    deleteComment: (id) => dispatch(actions.deleteComment(id)), 
    addComment: (comment) => dispatch(actions.addComment(comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostView);

