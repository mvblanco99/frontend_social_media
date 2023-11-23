import { Link } from 'react-router-dom'
import stylesHeader from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <>
        <div className={stylesHeader.header}>
            <div className={stylesHeader.container_links}>
              <Link to='/home'>Home</Link>
              <Link to='/profile'>Profile</Link>
              <a href="#">Notifications</a>
            </div>

            <div className={stylesHeader.container_search_img}>
              <form className={stylesHeader.form}> 
                <label htmlFor="">
                  <input 
                    type="text" 
                    placeholder="Search"
                    className={stylesHeader.input_text}
                  />
                  <button type='button'><SearchIcon/></button>
                </label>
              </form>
              
              <button 
                type='button'
                className={stylesHeader.button}
                >
                <img src="https://scontent.fmrd1-1.fna.fbcdn.net/v/t1.6435-9/121486890_3499566146791612_7447384720159423732_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=DL7Vwgw-ak0AX_b3sKf&_nc_ht=scontent.fmrd1-1.fna&oh=00_AfCcwHG5xkBvAjildKeyk0EVIid8YiaS4IDauY7w2e7Cpw&oe=65802E13" alt="img-profile" />
              </button>

            </div>
        </div>
    </>
  )
}

export default Header