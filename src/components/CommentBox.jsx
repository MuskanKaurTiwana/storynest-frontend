import React, { useState } from 'react';
import axios from 'axios';
import './CommentBox.css';

function CommentBox({ blogId, onCommentAdded }) {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!comment.trim()) {
      alert('Comment cannot be empty.');
      return;
    }

    const token = localStorage.getItem('token');

    if (!token) {
      alert('Please login to add a comment.');
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        `http://localhost:5000/api/comments/${blogId}`,
        { content: comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Comment added successfully!');
      setComment('');
      if (onCommentAdded) onCommentAdded();
    } catch (error) {
      console.error('Error adding comment:', error.response?.data || error.message);
      alert('Failed to add comment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comment-box">
      <h3 className="comment-heading">📝 Leave a Cozy Note:</h3>
      <textarea
        className="comment-textarea"
        rows="3"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write something kind and warm..."
      ></textarea>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="comment-submit"
      >
        {loading ? 'Posting...' : 'Post Comment'}
      </button>
    </div>
  );
}

export default CommentBox;

