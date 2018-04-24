// const API_URL = process.env.REACT_APP_API_URL;

const API_URL = "http://localhost:3001";

const API_END_POINTS = {
  categories: "/categories",
  posts: "/posts",
  comments: "/comments"
};

const interpolateURL = (url, param) => {
  let regExp = new RegExp("{.*}");
  let newURL = url.replace(regExp, param);
  return newURL;
};

class HttpService {
  getAllCategories = () => {
    let url = API_URL + API_END_POINTS.categories;
    return fetch(url, {
      method: "GET",
      headers: { Authorization: "whatever-you-want" }
    }).then(response => response.json());
  };

  getAllPosts = () => {
    let url = API_URL + API_END_POINTS.posts;
    return fetch(url, {
      method: "GET",
      headers: { Authorization: "whatever-you-want" }
    }).then(response => response.json());
  };

  getPostsByCategories = (category) => {
    let url = API_URL + "/{category}" + API_END_POINTS.posts;
    url = interpolateURL(url, category);

    return fetch(url, {
      method:"GET", 
      headers: { Authorization: "whatever-you-want"}
    }).then(response => response.json()); 
  }

  getPostById = (id) => {
    let url = API_URL + API_END_POINTS.posts + '/' + id;

    return fetch(url, {
      method:"GET", 
      headers: { Authorization: "whatever-you-want"}
    }).then(response => response.json()); 
  }

  getCommentsByPostId = (id) => {
    let url = API_URL + API_END_POINTS.posts + '/' + id + API_END_POINTS.comments;

    return fetch(url, {
      method:"GET", 
      headers: { Authorization: "whatever-you-want"}
    }).then(response => response.json()); 
  }

  addNewPost = (post) => {
    let url = API_URL + API_END_POINTS.posts;  
    return fetch(url, {
      method:"POST", 
      body: JSON.stringify(post), 
      headers: { 
        Authorization: 'test',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }); 
  }

  updatePost = (post) => {
    let url = API_URL + API_END_POINTS.posts + '/' + post.id;  
    let updatedContent = {
      title: post.title, 
      body: post.body
    }
    return fetch(url, {
      method:"PUT", 
      body: JSON.stringify(post), 
      headers: { 
        Authorization: 'test',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log('update post http', response);
      return response.json()
    }); 
  }

  deletePost = (id) => {
    let url = API_URL + API_END_POINTS.posts + '/' + id; 
    return fetch(url, {
      method:"DELETE", 
      headers: { 
        Authorization: 'test',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }); 
  }

  deleteComment = (id) => {
    let url = API_URL + API_END_POINTS.comments + '/' + id; 
    return fetch(url, {
      method:"DELETE", 
      headers: { 
        Authorization: 'test',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }); 
  }

  addComment = (comment) => {
    let url = API_URL + API_END_POINTS.comments;  
    return fetch(url, {
      method:"POST", 
      body: JSON.stringify(comment), 
      headers: { 
        Authorization: 'test',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }); 
  }

  updatePostVote = (type, id) => {
    let url = API_URL + API_END_POINTS.posts + '/' + id; 
    let payload = {
      option: type
    };

    return fetch(url, {
      method:"POST", 
      body: JSON.stringify(payload),
      headers: { 
        Authorization: 'test',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }); 
  }

  updateCommentVote = (type, id) => {
    let url = API_URL + API_END_POINTS.comments + '/' + id; 
    let payload = {
      option: type
    };
    
    return fetch(url, {
      method:"POST", 
      body: JSON.stringify(payload),
      headers: { 
        Authorization: 'test',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }); 
  }
}

export default new HttpService();
