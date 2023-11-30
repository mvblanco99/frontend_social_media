import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addUser } from "../Slices/usersSlice";
import { setIsCookie } from "../Slices/sessionSlice";

const useVerifySesion = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isCookies = useSelector(state => state.session.isCookies);
    const location  = useLocation()

    useEffect(()=>{

        const token = Cookies.get('cookie_api_social_media_session');
        //Extraigo cookie con datos de la session
        
        //Verificar que la sesion este activa
        if( token === undefined){
          //si no lo esta, se redirige al login
          if(location.pathname === '/home' || location.pathname === '/profile'){
            navigate('/')
            return
          }else{
            return
          }
         
        }
        // Verifica si el token es válido y decódelo
        try {

          const decoded = jwtDecode(token);
          // Si el token es válido, carga los datos del usuario en el almacén
          dispatch(addUser(decoded.data_user));
          dispatch(setIsCookie(true))

        } catch (error) {
          // Si el token no es válido, redirige a la página de inicio de sesión
          console.log('Invalid token:', error.message);
          navigate('/');
        }

    },[])

    useEffect(()=>{
      //Verificar que la sesion este activa
      if( isCookies === false){
        //si no lo esta, se redirige al login
        navigate('/')
      }
    },[isCookies])
}

export default useVerifySesion