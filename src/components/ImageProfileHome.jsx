import React from 'react'
import stylesImageProfileHome from './ImageProfileHome.module.css'
import { useSelector } from 'react-redux'

const ImageProfileHome = () => {

  const userState = useSelector(state => state.users)
    const { img, name, lastname, userId } = userState.user

  return (
    <div className={stylesImageProfileHome.container}>
      <div className={stylesImageProfileHome.cover_image}>
        <img src="https://criticalhits.com.br/wp-content/uploads/2021/11/rengoku-1.jpg" alt="MiamorRengoku" />
      </div>
      <div className={stylesImageProfileHome.container_profile_img}>
        <img src={img} alt={`${name} ${lastname}`} />
      </div>
      <div className={stylesImageProfileHome.container_description}>
        <div>
          <h1>{name} {lastname}</h1>
          <p>Hola mi nombre es Manuel Blanco y soy Ingeniero en informatica, 
          me gusta la programacion, el boxeo y el cafe</p>
        </div>
      </div>
    </div>
  )
}

export default ImageProfileHome