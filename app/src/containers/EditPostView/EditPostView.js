import React, { Component } from "react";
import CustomForm from '../../components/Form/Form'; 
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'; 
import * as actions from "../../redux/actions";
import Post from '../../models/Post'; 
import DateService from "../../services/DateService";

class EditPostView extends Component {

  constructor(){
    super(); 
    this.state = {
      toMain : false
    }
  }

  componentDidMount(){
    if (this.props.match && this.props.match.params && this.props.match.params.id){
      //Init existing post; 
      let id = this.props.match.params.id; 
      this.props.getPostById(id); 

    }
  }

  componentDidUpdate(){
    // if (this.props.toMain){
    //   this.setState({toMain: true}); 
    // }
  }

  onCancel = () => {
    this.setState({toMain: true}); 
  }

  onSubmit = (title, body) => {
    let newPost = new Post(1, DateService.getCurrentDateTimestamp(), title, body, 'Min', 'Udacity', 0, false); 
    if (newPost) {
      this.props.addNewPost(newPost); 
    }
  }

  render() {
    if (this.state.toMain === true) {
      return <Redirect to='/' />
    }

    let isEdit = this.props.match && this.props.match.params && this.props.match.params.id; 
    return (
            <div className="edit-post-view">
              <div className="edit-post-title">
                {isEdit? "Edit Post" : "New Post"}
              </div>
              <div className="edit-post">
                <CustomForm 
                onSubmitHandler={this.onSubmit}
                onCancelHandler={this.onCancel} 
                bodyText={this.props.selectedPost? this.props.selectedPost.body: null} 
                title={this.props.selectedPost? this.props.selectedPost.title: null}
                />
              </div>
            </div>
          );
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
    addNewPost: (post) => dispatch(actions.addNewPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPostView);
