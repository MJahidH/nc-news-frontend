import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils";

const AddComment = () => {
  const [newComment, setNewComment] = useState({
    username: "jessjelly",
    body: "",
  });
  const [ghostComment, setGhostComment] = useState(null);
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Set the ghost comment
    setGhostComment({ ...newComment });

    // Make the actual API request using .then()
    postComment(newComment, id)
      .then(() => {
        // Update the UI based on the server response (in this case, clear the form)
        setNewComment({
          username: "jessjelly",
          body: "",
        });

        // Reset the ghost comment
        setGhostComment(null);
      })
      .catch((error) => {
        console.error("Error posting comment:", error);

        // Reset the ghost comment if there's an error
        setGhostComment(null);
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
        type="text"
        name="new_comment"
        placeholder="Input Comment Here"
        value={newComment.body}
        onChange={handleChange}
      />
      <button id="submit" type="submit">
        add comment
      </button>

      {/* Display the ghost comment if available */}
      {ghostComment && (
        <div className="ghost-comment">
          {ghostComment.username}: {ghostComment.body}
        </div>
      )}
    </form>
  );
};

export default AddComment;