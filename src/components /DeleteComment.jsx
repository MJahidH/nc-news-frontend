import { deleteComment } from "../utils";

const DeleteComment = (props) => {
  const {comment_id} = props
    const handleClick = () => {
deleteComment(comment_id).then((res)=>{
    console.log(res)
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
