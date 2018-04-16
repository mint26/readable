import UtilService from '../services/UtilService'; 

class Post {
  constructor(
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  ) {
    this.id = UtilService.createUUID();
    this.timestamp = timestamp;
    this.title = title;
    this.body = body;
    this.author = author;
    this.category = category;
    this.voteScore = voteScore;
    this.deleted = deleted;
  }
}

export default Post;
