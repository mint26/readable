import * as actionTypes from "../actiontypes";
import HttpService from "../../services/HttpService";
import AppService from "../../services/AppService";
import { AllCategoriesPath } from '../../constants/constants'; 

export const init = (category) => {
  return dispatch => { 
    if (category && category.trim().toLowerCase() !== 'all') {
      AppService.getPostsByCategory(category).then(item => {
        dispatch({
          type: actionTypes.INIT,
          posts: item.posts,
          categories: item.categories
        });
      })
    } else {
      AppService.getAllCategories().then(item => {
        dispatch({
          type: actionTypes.INIT,
          posts: item.posts,
          categories: item.categories
        });
      });
    }
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
        dispatch({
          type: actionTypes.GET_POST_BY_ID, 
          selectedPost: item.selectedPost, 
          comments: item.comments
        })
      })
      .catch(err => {
        return Promise.resolve(err); 
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

export const updatePost = (post) => {
  return dispatch => {
    AppService.updatePost(post).then(updatedPost => {
      if (updatedPost) {
        dispatch({
          type: actionTypes.UPDATE_POST, 
          toMain: true, 
          updatedPost: updatedPost
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

export const deleteSelectedPost = (id) => {
  return dispatch => {
    return AppService.deletePost(id).then(result => {
      if (result) {
        console.log('aciton result', result); 
        dispatch ({
          type: actionTypes.DELETE_SELECTED_POST, 
          id: id
        });
      }
      return null; 
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

export const addComment = (comment) => {

  return dispatch => {
    AppService.addComment(comment).then(result => {
      if (result) {
        dispatch ({
          type: actionTypes.ADD_COMMENT, 
          comment: comment
        })
      }
    })
  }
}

export const updatePostVote = (type, id) => {
  return dispatch => {
    AppService.updatePostVote(type, id).then(post => {
      if (post) {
        return dispatch ({
          type: actionTypes.UPDATE_POST_VOTE,
          post: post
        })
      }
    })
  }
}; 

export const updateCommentVote = (type, id) => {
  return dispatch => {
    AppService.updateCommentVote(type, id).then(comment => {
      if (comment) {
        return dispatch ({
          type: actionTypes.UPDATE_COMMENT_VOTE,
          comment: comment
        })
      }
    })
  }
}; 
