import { useState } from "react";

const AddComment = () => {
  const [newComment, setNewComment] = useState({
    username: "butter_bridge",
    body: "",
  });

  const handlesubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewComment({
      ...newComment,
      body: event.target.value,
    });
  };

  return (
    <form className="add_comment_form" onScroll={handlesubmit}>
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
