import * as actionTypes from "../actiontypes";
import HttpService from "../../services/http-services";

export const getCategories = () => {
  return dispatch => {
    HttpService.getAllCategories().then(categories => {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        categories: categories
      });
    });
  };
};

export const getAllPosts = () => {
  return dispatch => {
    HttpService.getAllPosts().then(posts => {
      dispatch({
        type: actionTypes.GET_POSTS,
        posts: posts
      });
    });
  };
};

export const init = () => {
  return dispatch => {
    HttpService.getAllCategories().then(categories => {
      HttpService.getAllPosts().then(posts => {
        let postObj = {};
        posts.forEach(post => {
          postObj[post.id] = post;
        });

        dispatch({
          type: actionTypes.INIT,
          posts: postObj,
          categories: categories
        });
      });
    });
  };
};

export const getPostComments = postId => {
  return dispatch => {
    HttpService.getPostComments(postId).then(postComments => {
      dispatch({
        type: actionTypes.GET_POST_COMMENTS,
        comments: postComments,
        postId: postId
      });
    });
  };
};
