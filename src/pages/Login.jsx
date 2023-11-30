import { Link, useNavigate } from 'react-router-dom'
import stylesLogin from './Login.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { login } from '../Slices/usersSlice'
import useVerifySesion from '../hooks/useVerifySesion'
import { setIsCookie } from '../Slices/sessionSlice'

const initialState = {
    username : '',
    password : ''
}

const Login = () => {

    const [dataUser, setDataUser] = useState(initialState)
    const session = useSelector(state => state.session.isCookies)
    const dataStateUsers = useSelector(state => state.users)
    const { status , user } = dataStateUsers

    const dispacth = useDispatch()
    const navigate = useNavigate()

    useVerifySesion();

    const { username, password } = dataUser

    const onHandleChange = e => setDataUser({...dataUser,[e.target.name] : e.target.value})

    const onHandleSubmit = e => {
        e.preventDefault();
        dispacth(login({dataUser}))
    }

    useEffect(()=>{
        if(session) navigate('/home')
    },[session])

    useEffect(()=>{
        if(status == 'succeeded' & Object.keys(user).length > 0) dispacth(setIsCookie(true))
    }, [status])

    

  return (
     <>
        <div className={stylesLogin.container}>
            <div className={stylesLogin.container_form_register_new_user}>
                <h1>Login</h1>
                <form className={stylesLogin.form_register_new_user} onSubmit={onHandleSubmit}>
                    <label 
                        htmlFor="username"
                        className={stylesLogin.label}>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder='Username'
                            className={stylesLogin.input}
                            value={username}
                            onChange={onHandleChange}
                        />
                    </label>
                    <label 
                        htmlFor="password"
                        className={stylesLogin.label}>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder='Password'
                            className={stylesLogin.input}
                            value={password}
                            onChange={onHandleChange}
                        />
                    </label>
                    <input 
                        type="submit" 
                        value="Save"
                        className={stylesLogin.submit} 
                    />
                </form>
            </div>
            
            <div className={stylesLogin.container_link}><Link to='/register'>Registar nuevo usuario</Link></div>
        </div>
        
     </>
  )
}

export default Login