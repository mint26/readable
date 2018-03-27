import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import Categories from "../../components/Categories/Categories";
import Post from "../../components/Post/Post";

class DefaultView extends Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    let posts = null;
    let postKeys = Object.keys(this.props.posts);
    if (postKeys.length > 0) {
      posts = postKeys.map(key => {
        let post = this.props.posts[key];
        return (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            author={post.author}
            timestamp={post.timestamp}
          />
        );
      });
    }
    return (
      <div className="default-view">
        <Categories items={this.props.categories} />
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    categories: state.reducer.categories,
    posts: state.reducer.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(actions.init())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultView);
