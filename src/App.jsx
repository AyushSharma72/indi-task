import React from "react";
import "./App.css";
import Avatar from "@mui/material/Avatar";
import { AiOutlineLike } from "react-icons/ai";

const Comment = ({ text, replies, name }) => {
  return (
    <div className="comment-wrapper">
      {/* comment  */}
      <div className="comment">
        {/* avatar  */}
        <Avatar alt="Remy Sharp" src="/Ayush2.jpg" />
        <div className="content">
          {/* name and time  */}

          <div className="name-and-time">
            <strong>{name}</strong> <p>2 hr ago</p>
          </div>

          {/* comment text  */}
          <p>{text}</p>

          {/* like and reply div  */}
          <div className="like-and-reply">
            <div style={{ display: "flex", alignItems: "center" }}>
              <AiOutlineLike /> 10
            </div>
            <button className="reply-btn">Reply</button>
          </div>
        </div>
      </div>

      {replies && (
        <div className="replies">
          {replies.map((reply, index) => (
            <Comment
              key={index}
              text={reply.text}
              replies={reply.replies}
              name={reply.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function ThreadedComment() {
  const comments = [
    {
      name: "Ayush Sharma",
      text: "This is comment number 1",
      replies: [
        {
          name: "rajveer",
          text: "Reply 1 - to the comment",
          replies: [
            { name: "Ayush Sharma", text: "Nested Reply - to reply one" },
          ],
        },
        {
          name: "rajveer",
          text: "Reply 2 - to the comment",
        },
      ],
    },
    {
      name: "arnab",
      text: "this is comment number 2",
      replies: [{ name: "Ayush Sharma", text: "Another reply" }],
    },
  ];

  return (
    <div className="comment-thread">
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          text={comment.text}
          replies={comment.replies}
          name={comment.name}
        />
      ))}
    </div>
  );
}
