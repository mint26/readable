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
        return HttpService.getAllCategories().then(categories => {
            return HttpService.getAllPosts().then(posts => {
                if (categories){
                    let allCategory = new Category('all', 'all'); 
                    categories.unshift(allCategory); 
                }
                return Promise.resolve({
                            categories: categories, 
                            posts: posts
                        });
            });
        });
    }

    getPostWithCommentsById = (id) => {
        return HttpService.getPostById(id). then(post => {
            if (post){
                return HttpService.getCommentsByPostId(id).then(comments => {
                    return Promise.resolve({
                        selectedPost : post, 
                        comments: comments? comments: []
                    })
                })
            }
            else{
                return Promise.resolve({
                    selectedPost : {}, 
                    comments: []
                })
            }
        })
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
}

export default new AppService();
