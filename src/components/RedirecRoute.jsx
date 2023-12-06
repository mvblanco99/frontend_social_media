import Home from "../pages/Home"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import RegisterUser from "../pages/RegisterUser"
import About from "./Profile/ProfilePages/About"



const RedirecRoute = ({currentUrl}) => {
    const components = {
        '/' : <Login/>,
        '/register' : <RegisterUser/>,
        '/home' : <Home/>,
        '/profile' : <Profile/>
        
    }
    
    return components[currentUrl]
}

export default RedirecRoute