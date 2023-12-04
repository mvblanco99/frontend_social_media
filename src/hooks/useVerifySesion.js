import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addUser, clearData as clearDataUsers } from "../Slices/usersSlice";
import { clearDataPosts } from "../Slices/postsSlice";
import { setIsCookie } from "../Slices/sessionSlice";

const useVerifySesion = () => {

    const [searchCookie, setSearchCookie] = useState(false)
    const isCookies = useSelector(state => state.session.isCookies);
    const location  = useLocation()
    const cookie = new Cookies()

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
      //Extraigo cookie
        setSearchCookie(true)
        const token = cookie.get('cookie_api_social_media_session');
        //Verificar que exista una cookie
        if( token === undefined){
          //si no existe, se redirige al login
          dispatch(setIsCookie(false))
          if(location.pathname === '/home' || location.pathname === '/profile'){
            navigate('/')
            return
          }else{
            return
          }
        }

        try {
          const decoded = jwtDecode(token);
          //Cargamos los datos del usuario
          dispatch(addUser(decoded.data_user));
          //Indicamos que existe una cookie
          dispatch(setIsCookie(true))
        } catch (error) {
          console.log('Invalid token:', error.message);
          navigate('/');
        }
    },[])

    useEffect(()=>{
      //Verificar que la sesion este activa
      if( isCookies === false && searchCookie){
        dispatch(clearDataUsers())
        dispatch(clearDataPosts())
        //si no lo esta, se redirige al login
        navigate('/')
      }
    },[isCookies])
}

export default useVerifySesion