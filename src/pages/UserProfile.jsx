import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import API from '../utils/api';
import './UserProfile.css';

function UserProfile() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchUserBlogs = async () => {
      if (!userId) {
        setError('Please log in to view your profile.');
        setLoading(false);
        return;
      }
      try {
        const res = await API.get(`/blogs/user/${userId}`);
        const sortedBlogs = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBlogs(sortedBlogs);
      } catch (err) {
        setError('Failed to fetch your blogs.');
      } finally {
        setLoading(false);
      }
    };
    fetchUserBlogs();
  }, [userId]);

  if (loading) return <p className="profile-loading">Loading your cozy corner...</p>;
  if (error) return <p className="profile-error">{error}</p>;

  return (
    <div className="profile-container">
      <h2 className="profile-heading">👤 Your StoryNest</h2>
      {blogs.length === 0 ? (
        <p className="no-blogs">
          You haven't created any blogs yet. Start writing your cozy stories! ✍️🌸
        </p>
      ) : (
        <div className="user-blogs">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserProfile;

