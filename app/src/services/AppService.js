import HttpService from './HttpService'; 
import DateService from './DateService'; 
import Category from '../models/Category'; 

class AppService {
    sortByTimestamp = (posts, order) => {
        posts.sort((a,b) => {
            let dateA = DateService.getDate(a.timestamp); 
            let dateB = DateService.getDate(b.timestamp);
            if (dateA > dateB) {
                return order? -1 : 1;
            } else {
                return order? 1 : -1;
            } 
        })
        return Promise.resolve(posts);
    }

    sortByVotes = (posts, order) => {
        posts.sort((a,b) => {
            return order? a.voteScore - b.voteScore : b.voteScore - a.voteScore; 
        });
        return Promise.resolve(posts);
    }

    getAllCategories = () => {
        return HttpService.getAllCategories().then(result => {
            return HttpService.getAllPosts().then(posts => {
                if (result && Array.isArray(result.categories)){
                    let allCategory = new Category('all', 'all'); 
                    result.categories.unshift(allCategory); 
                }
                return Promise.resolve({
                            categories: result.categories, 
                            posts: posts
                        });
            });
        });
    }

    getPostWithCommentsById = (id) => {
        if (id){
            return HttpService.getPostById(id).then(post => {
                if (post){
                    return HttpService.getCommentsByPostId(id).then(comments => {
                        return Promise.resolve({
                            selectedPost : post, 
                            comments: comments? comments: []
                        })
                    })
                }
            });
        } else {
            return Promise.resolve({
                selectedPost : {}, 
                comments: []
            });
        }
    }

    addNewPost = (post) => {
        return HttpService.addNewPost(post).then(post => {
            if (post){
                return Promise.resolve(true); 
            }
            else {
                return Promise.resolve(false); 
            }
        })
    }

    updatePost = (post) => {
        return HttpService.updatePost(post).then(post => {
            if (post){
                return Promise.resolve(post); 
            }
            else {
                return Promise.resolve(false); 
            }
        })
    }

    deletePost = (id) => {
        return HttpService.deletePost(id).then(result => {
            if (result){
                return Promise.resolve(true); 
            }
            else {
                return Promise.resolve(false); 
            }
        })
    }
    deleteComment = (id) => {
        return HttpService.deleteComment(id).then(result => {
            if (result){
                return Promise.resolve(true); 
            }
            else {
                return Promise.resolve(false); 
            }
        })
    }
    addComment = (comment) => {
        return HttpService.addComment(comment).then(result => {
            if (result){
                return Promise.resolve(true); 
            }
            else {
                return Promise.resolve(false); 
            }
        })
    }

    updatePostVote = (type, id) => {
        return HttpService.updatePostVote(type, id).then(result => {
            if (result) {
                return Promise.resolve(result); 
            } else {
                return Promise.resolve(false); 
            }
        })
    }

    updateCommentVote = (type, id) => {
        return HttpService.updateCommentVote(type, id).then(result => {
            if (result) {
                return Promise.resolve(result); 
            } else {
                return Promise.resolve(false); 
            }
        })
    }
}

export default new AppService();
