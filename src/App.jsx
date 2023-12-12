import styles_app from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import RegisterUser from './pages/RegisterUser';
import Friends from './pages/Profile-Pages/Friends';
import Photos from './pages/Profile-Pages/Photos';
import About from './pages/Profile-Pages/About';
import TimeLine from './pages/Profile-Pages/TimeLine';
function App() {
  
  return (
    <>
      <div className={styles_app.container_app} >
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<RegisterUser/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile/:section" element={<Profile/>}/>
          <Route path="/Profile-Pages/Friends" element={<Friends/>}/>
          <Route path="/Profile-Pages/About" element={<About/>}/>
          <Route path="/Profile-Pages/Photos" element={<Photos/>}/>
          <Route path="/Profile-Pages/TimeLine" element={<TimeLine/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
