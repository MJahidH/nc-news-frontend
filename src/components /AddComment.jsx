import { useState } from "react";

import { useParams } from "react-router-dom";
import { postComment } from "../utils";

const AddComment = (prop) => {
  const { allComments, setComments } = prop;

  const [newComment, setNewComment] = useState({
    username: "jessjelly",
    body: "",
  });

  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    

    postComment(newComment, id).then((res) => {
      setComments([res,...allComments]);
      console.log([res,...allComments], "handle submit");
      setNewComment({
        username: "jessjelly",
        body: "",
      });
    });
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
        className="add_comment_text_field"
        type="text"
        name="new_comment"
        placeholder="Input Comment Here"
        value={newComment.body}
        onChange={handleChange}
      />
      <button className="submit_button" id="submit" type="submit">
        Add comment
      </button>
    </form>
  );
};

export default AddComment;
