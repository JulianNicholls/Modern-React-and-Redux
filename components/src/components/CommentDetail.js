import React from 'react';

const CommentDetail = ({ avatar, author, date, text }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="Avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{text}</div>
        <div className="actions"></div>
      </div>
    </div>
  );
};

export default CommentDetail;
