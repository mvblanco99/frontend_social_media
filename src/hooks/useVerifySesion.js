import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Slices/usersSlice";

const useVerifySesion = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    useEffect(()=>{

        //Extraigo cookie con datos de la session
        const token = Cookies.get('cookie_api_social_media_session');
    
        //Verificar que la sesion este activa
        if( token === undefined){
          //si no lo esta, se redirige al login
          navigate('/')
          return
        }
    
        //decodifico el token
        const encoded = jwtDecode(token);
        console.log(encoded.data_user)
        //si lo esta : Carga los datos en la store
        dispatch(addUser(encoded.data_user))
        
    },[])
}

export default useVerifySesion