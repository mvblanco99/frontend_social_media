import { Link } from 'react-router-dom'
import stylesHeader from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';



const Header = () => {

  const userState = useSelector(state => state.users)
  const { img, name, lastname } = userState.user

  const [open, setOpen] = useState(false);

  const menuClassNames = ['Dropdown_menu', open?'active':'inactive'].map(c => stylesHeader[c]).join(' ');

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
              <button type='button' className={stylesHeader.search_button} ><SearchIcon/></button>
            </label>
          </form>
          
        </div>

        <div className={stylesHeader.container_button_session}>
          <div className={stylesHeader.button_session} onClick={()=>{setOpen(!open)}}>
          <img src={img} alt={`${name} ${lastname}`}/>

          </div>
          <div className={menuClassNames} >
            <h3>{name} {lastname}</h3>
            <ul>
              <DropdownItem img = {PersonIcon} text = "My Profile"/>
            </ul>
          </div>
          
          
        </div>
        
      </div>
    </>
  )
  

  
}
function DropdownItem(props){
  return(
    <li className= {stylesHeader.dropdownItem}>
      <img src={props.img} alt="" />
      <a href="">{props.text}</a>
    </li>
  )
}



export default Header