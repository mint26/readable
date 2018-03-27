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
    let test = API_URL + "/{test}" + API_END_POINTS.categories;
    interpolateURL(test, "abc");
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

  getAllComments = postId => {
    let url =
      API_URL + API_END_POINTS.posts + "/{id}" + API_END_POINTS.comments;
    url = interpolateURL(url, postId);
    return fetch(url, {
      method: "GET",
      headers: { Authorization: "whatever-you-want" }
    }).then(response => response.json());
  };
}

export default new HttpService();
