import UtilService from "../services/UtilService";

class Comment {
  constructor(
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  ) {
    this.id = UtilService.createUUID();
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
