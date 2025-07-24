// src/components/FallingLeaves.jsx
import React from 'react';
import './FallingLeaves.css';

const FallingLeaves = () => {
  const emojis = ['🍁', '🍂', '🍃', '🌸', '🌿'];

  return (
    <div className="falling-leaf-container">
      {Array.from({ length: 20 }).map((_, i) => {
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        return (
          <span
            key={i}
            className="falling-leaf"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
};

export default FallingLeaves;
