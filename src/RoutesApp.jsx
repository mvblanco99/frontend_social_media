import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'

const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/profile" element={<Profile />}/>
    </Routes>
  )
}

export default RoutesApp