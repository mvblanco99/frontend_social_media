import { Link, useNavigate } from 'react-router-dom'
import stylesRegisterUser from './RegisterUser.module.css'
import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const initialState = {
    username: '',
    password: '',
    name: '',
    lastname: ''
}

const URL_API = 'http://localhost/api/?categoria=users&accion=add_user'

const RegisterUser = () => {

    const [dataUser, setDataUser] = useState(initialState)
    const [is_registered, setIsRegistered] = useState(false);
    const navigate = useNavigate()
    
    const { username, password, name, lastname } = dataUser
    const { data, error, loading, fetchApi } = useFetch()
    

    const onHandleChangeDataUser = (e) => {
        setDataUser({
            ...dataUser,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await fetchApi({ 
            endpoint : URL_API,
            dataUser
        });  
    }

    useEffect(()=>{ if(data?.success === 1) setIsRegistered(true) },[data])
    useEffect(()=>{ if(is_registered) navigate('/') },[is_registered, navigate])
    
    return (
        <>
            <div className={stylesRegisterUser.container}>
                <div className={stylesRegisterUser.container_form_register_new_user}>
                    <h1>Register User</h1>
                    <form className={stylesRegisterUser.form_register_new_user} onSubmit={onSubmit}>
                        <label 
                            htmlFor="username"
                            className={stylesRegisterUser.label}>
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder='Username'
                                className={stylesRegisterUser.input}
                                value={username}
                                onChange={onHandleChangeDataUser}
                                />
                        </label>
                        <label 
                            htmlFor="password"
                            className={stylesRegisterUser.label}>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder='Password'
                                className={stylesRegisterUser.input}
                                value={password}
                                onChange={onHandleChangeDataUser}
                            />
                        </label>
                        <label
                            htmlFor="name"
                            className={stylesRegisterUser.label}>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder='Name'
                                className={stylesRegisterUser.input}
                                value={name}
                                onChange={onHandleChangeDataUser}    
                            />
                        </label>
                        <label 
                            htmlFor="lastName"
                            className={stylesRegisterUser.label}>
                            <input 
                                type="text" 
                                name="lastname" 
                                id="lastname" 
                                placeholder='Last Name'
                                className={stylesRegisterUser.input}
                                value={lastname}
                                onChange={onHandleChangeDataUser}    
                            />
                        </label>

                        <input 
                            type="submit" 
                            value="Save"
                            className={stylesRegisterUser.submit} 
                        />
                    </form>
                </div>
                <div className={stylesRegisterUser.container_link}><Link to='/'>Log in</Link></div>

            </div>
            
        </>
    )
}

export default RegisterUser