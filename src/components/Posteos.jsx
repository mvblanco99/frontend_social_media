import FavoriteIcon from '@mui/icons-material/Favorite';
import stylesPosteos from './Posteos.module.css'

const Posteos = ({ title, text, url, buttonEnabled}) => {
  return (
    <>
        <li className={ buttonEnabled ? stylesPosteos.container : stylesPosteos.container2}>
              <a className={stylesPosteos.container_img} href='#'>
                <img src="https://scontent.fmrd1-1.fna.fbcdn.net/v/t1.6435-9/121486890_3499566146791612_7447384720159423732_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=DL7Vwgw-ak0AX_b3sKf&_nc_ht=scontent.fmrd1-1.fna&oh=00_AfCcwHG5xkBvAjildKeyk0EVIid8YiaS4IDauY7w2e7Cpw&oe=65802E13" alt="img-profile" />
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