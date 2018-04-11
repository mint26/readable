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

  render() {
    console.log('props', this.props); 
    let post = null; 
    post = this.props.selectedPost ? <Post
                                  key={this.props.selectedPost.id}
                                  title={this.props.selectedPost.title}
                                  body={this.props.selectedPost.body}
                                  author={this.props.selectedPost.author}
                                  timestamp={this.props.selectedPost.timestamp}
                                  postType={PostType.Detailed}
                                  voteScore={this.props.selectedPost.voteScore}
                                  id={this.props.selectedPost.id}
                                  onEditHandler={this.editPostHandler}
                                  comments={this.props.comments}
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
    getPostById: (id) => dispatch(actions.getPostById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostView);

