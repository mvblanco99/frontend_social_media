import styles_app from "./App.module.css"
import { Route, Routes } from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import RegisterUser from "./pages/RegisterUser";

import HeaderContextProvider from "./context/HeaderContextProvider";
function App() {
  return (
    <>
      <div className={styles_app.container_app}>
          <Routes>
            <Route path="/" element={<Login/>}/>

            <Route path="/home" element={<HeaderContextProvider><Home/></HeaderContextProvider>}/>
    
            <Route path="/register" element={<RegisterUser/>}/>

            <Route path="/Profile/:section" element={<HeaderContextProvider><Profile/></HeaderContextProvider>} />

            {/* <Route path="/Profile-Pages/Friends" element={<HeaderContextProvider><Friends/></HeaderContextProvider>}/>

            <Route path="/Profile-Pages/About" element={<HeaderContextProvider><About/></HeaderContextProvider>}/>

            <Route path="/Profile-Pages/Photos" element={<HeaderContextProvider><Photos/></HeaderContextProvider>}/>

            <Route path="/Profile-Pages/TimeLine" element={<HeaderContextProvider><TimeLine/></HeaderContextProvider>}/> */}
          </Routes>
      </div>
    </>
  )
}

export default App
