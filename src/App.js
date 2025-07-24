import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BlogDetail from './pages/BlogDetail';
import CreateBlog from './pages/CreateBlog';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import EditBlog from './pages/EditBlog';
import React from "react";
import FallingLeaves from './components/FallingLeaves';
import UserProfile from './pages/UserProfile';


function App() {
  return (
    <>
      <FallingLeaves />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<ProtectedRoute><CreateBlog /></ProtectedRoute>} />
        {/* <Route path="/blogs/new" element={<CreateBlog />} /> */}
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/blogs/:id/edit" element={<EditBlog />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;




