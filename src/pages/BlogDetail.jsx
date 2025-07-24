import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import CommentBox from '../components/CommentBox';
import CommentList from '../components/CommentList';
import './BlogDetail.css';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');

  const currentUserId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
      setBlog(res.data);
    } catch {
      setError('Failed to load blog.');
    }
  };

  const fetchComments = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/comments/${id}`);
      setComments(res.data);
    } catch {
      console.error('Failed to load comments.');
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this blog?');
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Blog deleted successfully.');
      navigate('/');
    } catch {
      alert('Failed to delete blog.');
    }
  };

  useEffect(() => {
    fetchBlog();
    fetchComments();
  }, [id]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-detail-container">
      <h1 className="blog-detail-title">{blog.title}</h1>
      <p className="blog-detail-meta">
        ✍️ By {blog.author?.username || 'Unknown'}<br />
        📅 {new Date(blog.createdAt).toLocaleString()}
      </p>

      <div className="blog-detail-content">
        {blog.content}
      </div>

      {String(blog.author?._id || blog.author) === String(currentUserId) && (
        <div className="blog-detail-buttons">
          <Link to={`/blogs/${id}/edit`}>
            <button className="edit-btn">✏️ Edit</button>
          </Link>
          <button onClick={handleDelete} className="delete-btn">🗑️ Delete</button>
        </div>
      )}

      <CommentList comments={comments} />
      <CommentBox blogId={id} onCommentAdded={fetchComments} />
    </div>
  );
};

export default BlogDetails;





