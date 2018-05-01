import React, { Component } from "react";
import CustomForm from "../../components/Form/Form";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import Post from "../../models/Post";
import DateService from "../../services/DateService";
import { DefaultString } from "../../constants/constants";

class EditPostView extends Component {
  componentDidMount() {
    //Init existing post;
    let id = this.props.match.params.id;
    this.props.getPostById(id);
  }

  onCancel = () => {
    this.props.history.goBack();
  };

  onSubmit = (title, body, category) => {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let updatedPost = { ...this.props.selectedPost };
      updatedPost.title = title;
      updatedPost.body = body;
      if (category) {
        updatedPost.category = category;
      }
      this.props.updatePost(updatedPost);
    } else {
      let categoryValue = category !== DefaultString ? category : "react";
      let newPost = new Post(
        DateService.getCurrentDateTimestamp(),
        title,
        body,
        "Min",
        categoryValue,
        0,
        false
      );
      if (newPost) {
        this.props.addNewPost(newPost);
      }
    }
    this.props.history.goBack();
  };

  render() {
    let isEdit =
      this.props.match && this.props.match.params && this.props.match.params.id;
    return (
      <div className="edit-post-view">
        <div className="edit-post-title">
          {isEdit ? "Edit Post" : "New Post"}
        </div>
        <div className="edit-post">
          <CustomForm
            category={
              this.props.selectedPost ? this.props.selectedPost.category : null
            }
            categories={this.props.categories}
            onSubmitHandler={this.onSubmit}
            onCancelHandler={this.onCancel}
            bodyText={
              this.props.selectedPost ? this.props.selectedPost.body : null
            }
            title={
              this.props.selectedPost ? this.props.selectedPost.title : null
            }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ reducer }) => {
  return {
    selectedPost: reducer.selectedPost,
    comments: reducer.comments,
    toMain: reducer.toMain,
    categories: reducer.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPostById: id => dispatch(actions.getPostById(id)),
    addNewPost: post => dispatch(actions.addNewPost(post)),
    updatePost: post => dispatch(actions.updatePost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPostView);
