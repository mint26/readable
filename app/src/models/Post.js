class Post {
  constructor(
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  ) {
    this.id = id;
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
