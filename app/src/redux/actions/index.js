import * as actionTypes from "../actiontypes";
import HttpService from "../../services/HttpService";
import AppService from "../../services/AppService";
import { AllCategoriesPath } from '../../constants/constants'; 

export const init = () => {
  return dispatch => { 
    AppService.getAllCategories().then(item => {
        dispatch({
          type: actionTypes.INIT,
          posts: item.posts,
          categories: item.categories
        });
      });
  };
}

export const sortByVotes = (posts, order) => {
  return dispatch => {
    AppService.sortByVotes(posts,order)
            .then(posts => {
              dispatch({
                type: actionTypes.SORT_BY_VOTES,
                posts: posts
              });
            })
  }
};

export const sortByTimestamp = (posts, order) => {
  return dispatch => {
    AppService.sortByTimestamp(posts,order)
            .then(posts => {
              dispatch({
                type: actionTypes.SORT_BY_VOTES,
                posts: posts
              });
            })
  }
};


export const getPostByCategory = (category) => {
  return dispatch => {
    if (category === AllCategoriesPath){
      HttpService.getAllPosts().then (posts => {
        dispatch({
          type: actionTypes.GET_POSTS_BY_CATEGORY, 
          posts: posts
        })
      })
    } else {
      HttpService.getPostsByCategories(category)
      .then(posts => {
        dispatch({
          type: actionTypes.GET_POSTS_BY_CATEGORY, 
          posts: posts
        })
      }); 
    }
  }
}

export const getPostById = (id) => {
  return dispatch => {
      AppService.getPostWithCommentsById(id).then(item => {
        console.log('items', item); 
        dispatch({
          type: actionTypes.GET_POST_BY_ID, 
          selectedPost: item.selectedPost, 
          comments: item.comments
        })
      })
  }
}

export const addNewPost = (post) => {
  return dispatch => {
    AppService.addNewPost(post).then(result => {
      if (result) {
        dispatch ({
          type: actionTypes.ADD_POST, 
          toMain: true
        })
      }
    })
  }
}

export const deletePost = (id) => {
  return dispatch => {
    AppService.deletePost(id).then(result => {
      if (result) {
        dispatch ({
          type: actionTypes.DELETE_POST, 
          id: id
        })
      }
    })
  }
}

export const deleteComment = (id) => {
  return dispatch => {
    AppService.deleteComment(id).then(result => {
      if (result) {
        dispatch ({
          type: actionTypes.DELETE_COMMENT, 
          id: id
        })
      }
    })
  }
}