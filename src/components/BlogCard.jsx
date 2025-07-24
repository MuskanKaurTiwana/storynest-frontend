import React from 'react';
import './BlogCard.css';
import bgTexture from '../assets/paper-texture.jpg';

const BlogCard = ({ blog }) => {
  if (!blog) return null;
  const { title, content, mood, date } = blog;
  
  return (
    <div className="blog-card" style={{ backgroundImage: `url(${bgTexture})` }}>
      <div className="blog-header">
        <span className="mood">{mood}</span>
        <span className="date">{date}</span>
      </div>
      <h2 className="blog-title">{title}</h2>
      <p className="blog-content">{content}</p>
    </div>
  );
};


export default BlogCard;



