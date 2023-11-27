import FavoriteIcon from '@mui/icons-material/Favorite';
import stylesPosteos from './Posteos.module.css'
import { useSelector } from 'react-redux';

const Posteos = ({ title, text, url, buttonEnabled}) => {

  const userState = useSelector(state => state.users)
  const { img, name, lastname } = userState.user

  return (
    <>
        <li className={ buttonEnabled ? stylesPosteos.container : stylesPosteos.container2}>
              <a className={stylesPosteos.container_img} href='#'>
                <img src={img} alt={`${name} ${lastname}`} />
              </a>          
              <div className={stylesPosteos.container_text}>
                  <a href='#'><strong>{title}</strong></a>
                  <p>{text}</p>
              </div>
              {buttonEnabled &&
                <button>
                    <FavoriteIcon/>
                </button>
              }
          </li>
    </>
  )
}

export default Posteos