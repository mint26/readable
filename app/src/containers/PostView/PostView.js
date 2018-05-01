import React, { Component } from "react";
import Post from "../../components/Post/Post";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { PostType, VoteType } from "../../constants/constants";

const POST_DELETED = "This post has been successfully deleted";
const POST_ERROR = "This post is no longer exists";

class PostView extends Component {
  state = {
    isDeleted: false
  };
  componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      //Init existing post;
      let id = this.props.match.params.id;

      this.props.getPostById(id);
    }
  }

  editPostHandler = id => {
    let category = this.props.match.params.category;
    this.props.history.replace(
      `/${category}/edit/${id}`,
      this.props.match.path
    );
  };

  commentDeleteHandler = id => {
    this.props.deleteComment(id);
  };

  addCommentHandler = newComment => {
    this.props.addComment(newComment);
  };

  clickBackHandler = () => {
    this.props.history.goBack();
  };

  onUpVoteComment = id => {
    this.props.updateCommentVote(VoteType.UpVote, id);
  };

  onDownVoteComment = id => {
    this.props.updateCommentVote(VoteType.DownVote, id);
  };

  onUpVoteHandler = id => {
    this.props.updatePostVote(VoteType.UpVote, id);
  };

  onDownVoteHandler = id => {
    this.props.updatePostVote(VoteType.DownVote, id);
  };

  deleteHandler = id => {
    this.props.deleteSelectedPost(id).then(result => {
      this.setState({ isDeleted: true });
    });
  };

  generateDeletedJSX = msg => {
    return (
      <div className="col-12 msg-box-panel">
        <span className="msg">{msg}</span>
      </div>
    );
  };

  render() {
    let post = null;
    post =
      this.props.selectedPost &&
      Object.keys(this.props.selectedPost).length > 0 ? (
        <Post
          key={this.props.selectedPost.id}
          post={this.props.selectedPost}
          postType={PostType.Detailed}
          onDeleteHandler={this.deleteHandler}
          onEditHandler={this.editPostHandler}
          comments={this.props.comments}
          onCommentDeleteHandler={this.commentDeleteHandler}
          onAddCommentHandler={this.addCommentHandler}
          onUpVoteHandler={this.onUpVoteHandler}
          onDownVoteHandler={this.onDownVoteHandler}
          onUpVoteComment={this.onUpVoteComment}
          onDownVoteComment={this.onDownVoteComment}
        />
      ) : this.state.isDeleted ? (
        this.generateDeletedJSX(POST_DELETED)
      ) : (
        this.generateDeletedJSX(POST_ERROR)
      );

    return (
      <div className="post-view">
        {post}
        <div className="post-back-panel" onClick={this.clickBackHandler}>
          <i className="fas fa-chevron-left" /> Back
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ reducer }) => {
  return {
    selectedPost: reducer.selectedPost,
    comments: reducer.comments,
    toMain: reducer.toMain
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPostById: id => dispatch(actions.getPostById(id)),
    deleteComment: id => dispatch(actions.deleteComment(id)),
    addComment: comment => dispatch(actions.addComment(comment)),
    updateCommentVote: (type, id) =>
      dispatch(actions.updateCommentVote(type, id)),
    updatePostVote: (type, id) => dispatch(actions.updatePostVote(type, id)),
    deleteSelectedPost: id => dispatch(actions.deleteSelectedPost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
