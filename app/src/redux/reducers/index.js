import { combineReducers } from "redux";
import * as actiontypes from "../actiontypes";
import StateService from "../../services/StateService";
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
        posts: action.posts
      });
    case actiontypes.SORT_BY_VOTES:
    case actiontypes.SORT_BY_TIMESTAMP:
      return Object.assign({}, state, {
        posts: [...action.posts]
      });
    case actiontypes.GET_POSTS_BY_CATEGORY: 
      return Object.assign({}, state, {posts: [...action.posts]});
    case actiontypes.GET_POST_BY_ID: 
      console.log('reducer d', action,action.comments); 
      let newState = {
        selectedPost: action.selectedPost ? {...action.selectedPost}: null, 
        comments: (action.comments.length > 0) ? UtilService.clone(action.comments) : []
      };
      console.log('new state', newState, UtilService.clone(action.comments)); 
      return Object.assign({}, state, newState);
    case actiontypes.ADD_POST: 
      return Object.assign({}, state, {toMain: action.toMain});
    default:
      return state;
  }
};

export default combineReducers({
  reducer
});
