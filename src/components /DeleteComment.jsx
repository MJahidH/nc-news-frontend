import { deleteComment } from "../utils";

const DeleteComment = (props) => {
  const {comment_id,comments,setComments} = props
    const handleClick = () => {
deleteComment(comment_id).then((res)=>{
     const remainingComments = comments.filter((comment)=>{
       return comment.comment_id !== comment_id
     })
     setComments(remainingComments)
}).catch((err)=>{
    console.log(err,"error")
})

  };
    
  return (
    <>
      <button onClick={handleClick}>Delete Comment</button>
    </>
  );
};

export default DeleteComment;
