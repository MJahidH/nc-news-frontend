import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils";

const AddComment = () => {
  const [newComment, setNewComment] = useState({
    username: "jessjelly",
    body: "",
  });
  const { id } = useParams();
  console.log(useParams());

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewComment((currComment) => {
      postComment(newComment, id).then(() => {
       
      })
    })
  };

  const handleChange = (event) => {
    setNewComment({
      ...newComment,
      body: event.target.value,
    });
  };

  return (
    <form className="add_comment_form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="new_comment"
        placeholder="Input Comment Here"
        value={newComment.body}
        onChange={handleChange}
      />
      <button id="submit" type="submit">
        add comment
      </button>
    </form>
  );
};

export default AddComment;
