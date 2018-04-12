import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import Categories from "../../components/Categories/Categories";
import Post from "../../components/Post/Post";
import Controls from "../../components/Controls/Controls";
import { PostType } from "../../constants/constants"; 

class DefaultView extends Component {

  constructor(){
    super(); 
    this.state = {
      ascVoteOrder : true, 
      ascTimeOrder : true
    }
  }

  componentDidMount() {
    this.props.init();
  }
  
  sortByVoteHandler = () => {
    this.props.sortByVote(this.props.posts, this.state.ascVoteOrder); 
    this.setState(prevState => {
      return {ascVoteOrder: !prevState.ascVoteOrder}
    }); 
  }

  sortByTimeHandler = () => {
    this.props.sortByTimestamp(this.props.posts, this.state.ascTimeOrder); 
    this.setState(prevState => {
      return {ascTimeOrder: !prevState.ascTimeOrder}
    });
  }
  
  getPostByCategory = (category) => {
    this.props.getPostByCategory(category); 
  }

  addPostHandler = () => {
    this.props.history.push('/edit')
  }

  editPostHandler = (id) => {
    this.props.history.push('/edit/' + id); 
  }

  selectedPostHandler = (id) => {
    this.props.history.push('/post/' + id); 
  }

  deleteHandler = (id) => {
    this.props.deletePost(id); 
  }

  render() {
    let posts = null;
    if (this.props.posts.length > 0){
      posts = this.props.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            author={post.author}
            timestamp={post.timestamp}
            PostType={PostType.Summary}
            voteScore={post.voteScore}
            id={post.id}
            onEditHandler={this.editPostHandler}
            selectedPostHandler={this.selectedPostHandler}
            onDeleteHandler = {this.deleteHandler}
          />
        );
      });
    }
    
    return (
      <div className="default-view">
        <Controls sortByVoteHandler={this.sortByVoteHandler} sortByTimeHandler={this.sortByTimeHandler} addHandler={this.addPostHandler} numericAsc={this.state.ascVoteOrder}/>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <Categories items={this.props.categories} onCategorySelected={this.getPostByCategory}/>
          </div>
          <div className="col-12 col-md-8 col-lg-8">
            {posts}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state); 
  return {
    categories: state.reducer.categories,
    posts: state.reducer.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(actions.init()), 
    sortByTimestamp : (posts, order) => dispatch(actions.sortByTimestamp(posts,order)), 
    sortByVote: (posts,order) => dispatch(actions.sortByVotes(posts,order)), 
    getPostByCategory: (category) => dispatch(actions.getPostByCategory(category)), 
    deletePost : (id) => dispatch(actions.deletePost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultView);