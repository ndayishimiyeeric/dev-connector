import { Routes, Route } from 'react-router-dom';
import Landing from './components/pages/main/Landing';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Developers from './components/pages/Developers';
import Posts from './components/pages/main/Posts';
import Profile from './components/pages/Profile';
import ViewPost from './components/pages/ViewPost';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/register" element={<Register />} />
        <Route path="/home/login" element={<Login />} />
        <Route path="/home/developers" element={<Developers />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/posts/post-:username" element={<ViewPost />} />
      </Routes>
    </>
  );
}

export default App;
