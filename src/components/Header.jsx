import { Link } from 'react-router-dom'
import stylesHeader from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  const userState = useSelector(state => state.users)
  const { img, name, lastname } = userState.user

  return (
    <>
      <div className={stylesHeader.header}>
        
        <div className={stylesHeader.logo}>
          <img src={img} alt={`${name} ${lastname}`} />
        </div>

        <div className={stylesHeader.container_icons}>
          
          <Link to='/home'> 
            <span className={stylesHeader.icon_responsive}>
              <HomeIcon/>
            </span>
            <span className={stylesHeader.text_responsive}>
              Home
            </span>
          </Link>

          <Link to='/profile'>
            <span className={stylesHeader.icon_responsive}>
              <AccountBoxIcon/>
            </span>
            <span className={stylesHeader.text_responsive}>
            Profile
            </span>
          </Link>

          <Link to='#'>
            <span className={stylesHeader.icon_responsive}>
              <NotificationsIcon/>
            </span>
            <span className={stylesHeader.text_responsive}>
            Notifications
            </span>
          </Link>
        
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
          
        </div>

        <div className={stylesHeader.container_button_session}>
          <button 
              type='button'
              className={stylesHeader.button_session}
              >
              <img src={img} alt={`${name} ${lastname}`} />
          </button>
        </div>
        
      </div>
    </>
  )
}

export default Header