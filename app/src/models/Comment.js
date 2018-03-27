class Comment {
  constructor(
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  ) {
    this.id = id;
    this.parentId = parentId;
    this.timestamp = timestamp;
    this.body = body;
    this.author = author;
    this.voteScore = voteScore;
    this.deleted = deleted;
    this.parentDeleted = parentDeleted;
  }
}
export default Comment;
