import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../utils/api';
import './EditBlog.css';

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      try {
        const res = await API.get(`/blogs/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blog.');
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setError('Please login to edit blog.');
      return;
    }

    try {
      await API.put(
        `/blogs/${id}`,
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Blog updated successfully!');
      setError('');
      setTimeout(() => navigate(`/blogs/${id}`), 1500);
    } catch (err) {
      setError('Failed to update blog.');
    }
  };

  if (loading) return <p className="edit-blog-loading">Loading blog...</p>;

  return (
    <div className="edit-blog-form">
      <h2 className="edit-blog-title">🖊️ Edit Your Story</h2>

      {message && <p className="edit-blog-success">{message}</p>}
      {error && <p className="edit-blog-error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="edit-blog-input"
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows="8"
          className="edit-blog-textarea"
        ></textarea>
        <button type="submit" className="edit-blog-button">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditBlog;


