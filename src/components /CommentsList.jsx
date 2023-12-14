import { useEffect, useState } from "react";
import { getCommentsById } from "../utils";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsById(id).then((comment) => {
      setComments(comment);
      setIsLoading(!isLoading);
    });
  }, []);
  console.log(comments);

  if (isLoading === true) {
    return (
      <>
        <h1>Is Loading</h1>
      </>
    );
  } else if (comments.length === 0) {
    return (
      <>
        <h1>No comments found </h1>
      </>
    );
  } else {
    return (
      <>
        <h1>comments list </h1>
        <AddComment/>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </>
    );
  }
};

export default CommentsList;
