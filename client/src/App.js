import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';
import Register from './pages/Register';
import Login from './pages/Login';
import {ToastContainer} from 'react-toastify';
import NotFound from './pages/NotFound';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<RequireAuth />}>
        <Route path="/create-post" element={<CreatePost />} />
        </Route>
        <Route path="/post/:id" element={<Post />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
