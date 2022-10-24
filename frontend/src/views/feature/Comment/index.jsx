import React from "react";
import CommentForm from "../CommentForm";

const Comment = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit();
    console.log("Submit :" + values);
  };
  return (
    <div>
      <CommentForm onSubmit={(date) => handleSubmit(date)} />
    </div>
  );
};

export default Comment;
