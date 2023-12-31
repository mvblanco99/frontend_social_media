import stylesDropDownMenu from './DropDownMenu.module.css';

import PersonIcon from '@mui/icons-material/Person';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../Slices/sessionSlice';
import { Link } from 'react-router-dom';
import { closeSearchResponsive, toogleDropDownMenu } from '../../Slices/panelSlice';


// eslint-disable-next-line react/prop-types
const DropDownMenu = () =>{

  const dispatch = useDispatch();
  const userState = useSelector(state => state.users);
  const dropdownMenu  = useSelector(state => state.panel.dropdownMenu);
    
  const { img, name, lastname, username } = userState.user;
    
  const onHandleClick = () => {
    dispatch(toogleDropDownMenu());
    dispatch(closeSearchResponsive());
  };

  const handleCloseSession = (e)=>{
    e.preventDefault();
    dispatch(logout({username}));
  };

  // const menuClassNames = ['Dropdown_menu', open?'active':'inactive'].map(c => stylesDropDownMenu[c]).join(' ');
  // console.log(menuClassNames)

  return(
    <div className={stylesDropDownMenu.container_button_session} >
      <div className={stylesDropDownMenu.button_session} onClick={onHandleClick}>
        <img src={img} alt={`${name} ${lastname}`}/>
      </div>
        
      <div className={ dropdownMenu ? `${stylesDropDownMenu.Dropdown_menu} ${stylesDropDownMenu.active}`: 
        `${stylesDropDownMenu.Dropdown_menu} ${stylesDropDownMenu.inactive}`}>
        <h3 className={stylesDropDownMenu.name}>{name} {lastname}</h3>
        <hr />
        <ul>
          <li className= {stylesDropDownMenu.dropdownItem}>
            <Link to='/profile'>
              <PersonIcon/>
              Profile
            </Link>
          </li>
          <li className= {stylesDropDownMenu.dropdownItem}>
            <Link to='#'>
              <ManageSearchIcon />
              Activity
            </Link>
          </li>
          <hr />
          <li className= {stylesDropDownMenu.dropdownItem}>
            <Link to='#'>
              <SettingsIcon />
              Settings
            </Link>
          </li>
          <li className= {stylesDropDownMenu.dropdownItem} onClick={handleCloseSession}>
            <Link to='#'>
              <LogoutIcon />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;