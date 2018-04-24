import { combineReducers } from "redux";
import * as actiontypes from "../actiontypes";
import UtilService from '../../services/UtilService';

const initialState = {
  categories: [],
  posts: [], 
  selectedPost: null, 
  comments: [], 
  toMain: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.INIT:
      return Object.assign({}, state, {
        categories: action.categories,
        posts: action.posts, 
        toMain: false
      });

    case actiontypes.SORT_BY_VOTES:
    case actiontypes.SORT_BY_TIMESTAMP:
      return Object.assign({}, state, {
        posts: [...action.posts]
      });

    case actiontypes.GET_POSTS_BY_CATEGORY: 
      return Object.assign({}, state, {posts: [...action.posts]});

    case actiontypes.GET_POST_BY_ID: 
      let newState = {
        selectedPost: action.selectedPost ? {...action.selectedPost}: null, 
        comments: (action.comments.length > 0) ? UtilService.clone(action.comments) : []
      };
      return Object.assign({}, state, newState);

    case actiontypes.ADD_POST: 
      return Object.assign({}, state, {toMain: action.toMain});

    case actiontypes.UPDATE_POST: 

      let posts = [...state.posts]; 
      let post = posts.find(item => { return item.id === action.updatedPost.id}); 
      if (post) {
        post = action.updatedPost; 
      }
      return Object.assign({}, state, {posts: posts, toMain: action.toMain}); 

    case actiontypes.DELETE_POST: 
      let updatedPosts = [...state.posts]; 
      updatedPosts = updatedPosts.filter(post => {
        return post.id !== action.id;
      }); 
      return Object.assign({}, state, {posts: updatedPosts});

    case actiontypes.DELETE_COMMENT: 
      let updatedComments = [...state.comments]; 
      updatedComments = updatedComments.filter(comment => {
        return comment.id !== action.id;
      }); 
      return Object.assign({}, state, {comments: updatedComments});

    case actiontypes.ADD_COMMENT: 
      let comments = [...state.comments]; 
      comments.push(action.comment); 
      return Object.assign({}, state, {comments: comments}); 

    case actiontypes.UPDATE_POST_VOTE: 

      let postList = [...state.posts]; 
      let updatedPost = postList.find(post => {
        return post.id === action.post.id; 
      });
      if (updatedPost){
        updatedPost.voteScore = action.post.voteScore; 
      }
      return Object.assign({}, state, {posts: postList});
    case actiontypes.UPDATE_COMMENT_VOTE: 
      let commentList = [...state.comments]; 
      let updatedComment = commentList.find(comment => {
        return comment.id === action.comment.id; 
      });
      if (updatedComment){
        updatedComment.voteScore = action.comment.voteScore; 
      }
      return Object.assign({}, state, {comments: commentList});
    default:
      return state;
  }
};

export default combineReducers({
  reducer
});
