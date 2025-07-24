import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';   
import './CreateBlog.css'; 

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const token = localStorage.getItem('token');
    console.log('Token being sent:', token);

    if (!token) {
      setError('Please login to create a blog.');
      setLoading(false);
      return;
    }

    try {
      await API.post(
        '/blogs',
        { title, content },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setSuccess('Blog created successfully!');
      setTitle('');
      setContent('');
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      console.error('Failed to create blog:', error.response?.data || error.message);
      setError('Failed to create blog. Make sure you are logged in.');
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="create-blog-container">
    <h2>Create a New Blog</h2>

    {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
    {success && <div style={{ color: 'green', marginBottom: '1rem' }}>{success}</div>}

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows="8"
      ></textarea>
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Blog'}
      </button>
    </form>
  </div>
);

}

export default CreateBlog;



