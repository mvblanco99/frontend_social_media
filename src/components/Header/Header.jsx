import { Link, useLocation } from 'react-router-dom'
import stylesHeader from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useEffect, useState } from 'react';
import DropDownMenu from './DropDownMenu'
import { Badge, IconButton } from '@mui/material';


const Header = () => {

  const userState = useSelector(state => state.users)
  const [currentUrl, setCurrentUrl] = useState('/home')
  const url = useLocation()
  
  useEffect(() => {
    setCurrentUrl(url.pathname)
  },[url])

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
              <IconButton >
              <Badge  color="secondary">
                <HomeIcon/>
              </Badge>
            </IconButton>
            </span>
            <span className={`${stylesHeader.text_responsive} ${currentUrl === '/home' && stylesHeader.isActive}`}>
              Home
            </span>
          </Link>

          <Link to='/Profile-Pages/TimeLine'>
            <span className={stylesHeader.icon_responsive}>
            <IconButton >
              <Badge  color="secondary">
                <AccountBoxIcon/>
              </Badge>
            </IconButton>
            </span>
            <span className={`${stylesHeader.text_responsive} ${currentUrl === '/profile' && stylesHeader.isActive}`}>
            Profile
            </span>
          </Link>

          <Link to='#'>
            <span className={stylesHeader.icon_responsive}>
            <IconButton aria-label={100}>
              <Badge badgeContent={100} color="secondary">
                <NotificationsIcon/>
              </Badge>
            </IconButton>
              
            </span>
            <span className={stylesHeader.text_responsive}>
            Notifications
            </span>
          </Link>
        
          <form className={stylesHeader.form}> 
            <label htmlFor="Search_Input">
              <input 
                id='Search_Input'
                type="text" 
                placeholder="Search"
                className={stylesHeader.input_text}
              />
              
              <button type='button' className={`${stylesHeader.text_responsive} ${stylesHeader.search_button}`} >
                <SearchIcon/>
              </button>

              <span className={stylesHeader.icon_responsive}>
                <IconButton >
                  <Badge  color="secondary">
                    <SearchIcon/>
                  </Badge>
                </IconButton>
              </span>
            </label>
          </form>
          
        </div>

        <DropDownMenu />
        
      </div>
    </>
  )
  

  
}




export default Header