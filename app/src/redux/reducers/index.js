import { combineReducers } from "redux";
import * as actiontypes from "../actiontypes";
import StateService from "../../services/StateService";

const initialState = {
  categories: [],
  posts: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.INIT:
      return Object.assign({}, state, {
        categories: action.categories,
        posts: action.posts
      });
    case actiontypes.GET_POST_COMMENTS:
      return StateService.addArrayItem(
        state,
        "posts",
        action.postId,
        action.comments
      );
    default:
      return state;
  }
};

export default combineReducers({
  reducer
});
