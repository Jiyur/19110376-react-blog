import React from "react";
import CommentItem from "../CommentItem";
import "./style.scss";

function CommentList({ commentList }) {
  return (
    <div>
      <ul className="comment-list">
        {commentList.map((comment) => (
          <li key={comment.id}>
            <CommentItem comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
