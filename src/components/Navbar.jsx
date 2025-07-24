// import { useNavigate } from 'react-router-dom';

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

// return (
//   <nav className="flex justify-between items-center p-4 bg-gray-200">
//     <h1
//       className="font-bold cursor-pointer"
//       onClick={() => navigate('/')}
//     >
//       My Blog
//     </h1>
//     <div className="flex items-center gap-4">
//       {token && (
//         <button
//           onClick={() => navigate('/create')}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Create Blog
//         </button>
//       )}
//       {token ? (
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-4 py-2 rounded"
//         >
//           Logout
//         </button>
//       ) : (
//         <button
//           onClick={() => navigate('/login')}
//           className="bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Login
//         </button>
//       )}
//     </div>
//   </nav>
// );
// }

// export default Navbar;


import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();

  // Update login status when location (route) changes
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">🪵 StoryNest</Link>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/create">Create Blog</Link>}
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {isLoggedIn && <Link to="/profile" className="profile-icon" title="My Blogs">👤</Link>}

      </div>
    </nav>
  );
}

export default Navbar;




