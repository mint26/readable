const API_URL = process.env.REACT_APP_API_URL;
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

let token = localStorage.token;

if (!token) {
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
}

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token
};

const getRequest = (method, url, body) => {
  let payload = {
    method: method,
    headers: headers
  };
  if (body) {
    payload.body = JSON.stringify(body);
  }
  return fetch(url, payload).then(response => {
    if (response) {
      return response.json();
    }
    return null;
  });
};

const METHOD = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT"
};
class HttpService {
  getAllCategories = () => {
    let url = `${API_URL}${API_END_POINTS.categories}`;
    return getRequest(METHOD.GET, url);
  };

  getAllPosts = () => {
    let url = `${API_URL}${API_END_POINTS.posts}`;
    return getRequest(METHOD.GET, url);
  };

  getPostsByCategories = category => {
    let url = `${API_URL}/{category}${API_END_POINTS.posts}`;
    url = interpolateURL(url, category);
    return getRequest(METHOD.GET, url);
  };

  getPostById = id => {
    let url = `${API_URL}${API_END_POINTS.posts}/${id}`;

    return getRequest(METHOD.GET, url);
  };

  getCommentsByPostId = id => {
    let url = `${API_URL}${API_END_POINTS.posts}/${id}${
      API_END_POINTS.comments
    }`;

    return getRequest(METHOD.GET, url);
  };

  addNewPost = post => {
    let url = `${API_URL}${API_END_POINTS.posts}`;
    return getRequest(METHOD.POST, url, post);
  };

  updatePost = post => {
    let url = `${API_URL}${API_END_POINTS.posts}/${post.id}`;
    let updatedContent = {
      title: post.title,
      body: post.body,
      category: post.category
    };

    return getRequest(METHOD.PUT, url, updatedContent);
  };

  deletePost = id => {
    let url = `${API_URL}${API_END_POINTS.posts}/${id}`;
    return getRequest(METHOD.DELETE, url);
  };

  deleteComment = id => {
    let url = `${API_URL}${API_END_POINTS.comments}/${id}`;
    return getRequest(METHOD.DELETE, url);
  };

  addComment = comment => {
    let url = `${API_URL}${API_END_POINTS.comments}`;
    return getRequest(METHOD.POST, url, comment);
  };

  updatePostVote = (type, id) => {
    let url = `${API_URL}${API_END_POINTS.posts}/${id}`;
    let payload = {
      option: type
    };

    return getRequest(METHOD.POST, url, payload);
  };

  updateCommentVote = (type, id) => {
    let url = `${API_URL}${API_END_POINTS.comments}/${id}`;
    let payload = {
      option: type
    };

    return getRequest(METHOD.POST, url, payload);
  };
}

export default new HttpService();
