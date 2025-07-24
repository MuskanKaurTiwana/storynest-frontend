import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BlogDetail from './pages/BlogDetail';
import CreateBlog from './pages/CreateBlog';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import EditBlog from './pages/EditBlog';
import React from "react";
import BlogCard from "./components/BlogCard";
import FallingLeaves from './components/FallingLeaves';
import UserProfile from './pages/UserProfile';


const dummyBlogs = [
  {
    id: 1,
    title: "A Cozy Autumn Evening",
    content: "Today I sat by the window with a cup of chai and watched the leaves fall. 🍂 It felt peaceful and still.",
    mood: "😊",
    date: "July 23, 2025"
  },
  {
    id: 2,
    title: "Warm Morning Walk",
    content: "Took a walk in the park. The grass smelled of dew, and sunlight filtered softly through the trees. ☀️",
    mood: "🌞",
    date: "July 22, 2025"
  }
];
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/blogs/:id" element={<BlogDetail />} />
//         <Route path="/create" element={
//           <ProtectedRoute>
//             <CreateBlog />
//           </ProtectedRoute>
//         }/>
//         <Route path="/blogs/:id/edit" element={
//           <ProtectedRoute>
//             <EditBlog />
//           </ProtectedRoute>
//         }/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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

// function App() {
//   return (
//     <div>
//       <Navbar />
//       {dummyBlogs.map((blog) => (
//         <BlogCard
//           key={blog.id}
//           title={blog.title}
//           content={blog.content}
//           mood={blog.mood}
//           date={blog.date}
//         />
//       ))}
//     </div>
//   );
// }



