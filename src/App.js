import { Routes, Route } from 'react-router-dom';
import Landing from './components/pages/main/Landing';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/register" element={<Register />} />
        <Route path="/home/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
