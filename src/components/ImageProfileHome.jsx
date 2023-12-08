import stylesImageProfileHome from './ImageProfileHome.module.css'
import { useSelector } from 'react-redux'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import { Badge, IconButton } from '@mui/material';


const ImageProfileHome = () => {

  const userState = useSelector(state => state.users)
    const { img, name, lastname } = userState.user

  return (
    <div className={stylesImageProfileHome.container}>
      
      <div className={stylesImageProfileHome.cover_image}>
        <img src="https://criticalhits.com.br/wp-content/uploads/2021/11/rengoku-1.jpg" alt="MiamorRengoku" />
      </div>

      <div className={stylesImageProfileHome.container_profile_img}>
        <img src={img} alt={`${name} ${lastname}`} />
      </div>

      <div className={stylesImageProfileHome.icon_edit_image_profile}>
        <IconButton >
          <Badge  color="primary">
            <CameraAltIcon/>
          </Badge>
        </IconButton> 
      </div>

      <div className={stylesImageProfileHome.container_description}>
        
        <div className={stylesImageProfileHome.sub_container_description}>
          <h1>{name} {lastname}</h1>
          <p>Hola mi nombre es Manuel Blanco, soy Ingeniero en informatica, 
          me gusta la programacion, el boxeo y el cafe.</p>
        </div>

        <div className={stylesImageProfileHome.icon_edit_description}>
          <div>
            <IconButton >
              <Badge  color="primary">
                <EditIcon/>
              </Badge>
            </IconButton>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ImageProfileHome