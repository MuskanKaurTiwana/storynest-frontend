import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import './Home.css'; 
import API from '../utils/api';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/blogs')
      .then((res) => setBlogs(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4">
      <h1 className="page-title">☕ Cozy Reads </h1>
      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p>No blogs yet.</p>
      ) : (
        blogs.map((blog) => (
          <Link key={blog._id} to={`/blogs/${blog._id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}>
            <BlogCard blog={blog} />
          </Link>
        ))
      )}
    </div>
  );
}

export default Home;



