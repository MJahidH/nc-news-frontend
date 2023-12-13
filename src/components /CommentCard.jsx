const CommentCard = ({ comment }) => {
  return (
    <div className="comment_card">
      <h1>{comment.author} </h1>
      <p>{comment.body}</p>
      <p> Upvotes: {comment.votes}</p>
    </div>
  );
};

export default CommentCard;
