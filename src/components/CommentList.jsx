import React from 'react';
import './CommentList.css';

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      <h3 className="comment-list-heading">💬 Thoughts:</h3>

      {comments.length === 0 ? (
        <p className="no-comments">No comments yet. Be the first to share a warm thought!</p>
      ) : (
        comments.map((comment) => (
          <div key={comment._id} className="comment-item">
            <p className="comment-content">“{comment.content}”</p>
            <p className="comment-author">
              — {comment.author?.username || 'Anonymous'}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default CommentList;


