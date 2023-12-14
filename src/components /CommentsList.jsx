import { useEffect, useState } from "react";
import { getCommentsById } from "../utils";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCommentsById(id).then((comment) => {
      setComments(comment);
    });
  }, []);


  return (
    <>
      <h1>comments list </h1>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </>
  );
};

export default CommentsList;
