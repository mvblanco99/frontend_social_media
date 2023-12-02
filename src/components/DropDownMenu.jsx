import stylesDropDownMenu from './DropDownMenu.module.css';

import PersonIcon from '@mui/icons-material/Person';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { logout } from '../Slices/sessionSlice';

// eslint-disable-next-line react/prop-types
const DropDownMenu = () =>{

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const userState = useSelector(state => state.users)
    const { img, name, lastname, username } = userState.user
    
    const handleCloseSession = (e)=>{
        e.preventDefault();
        dispatch(logout({username}))
    }

    const menuClassNames = ['Dropdown_menu', open?'active':'inactive'].map(c => stylesDropDownMenu[c]).join(' ');

    return(
        <div className={stylesDropDownMenu.container_button_session}>
            <div className={stylesDropDownMenu.button_session} onClick={()=>{setOpen(!open)}}>
                <img src={img} alt={`${name} ${lastname}`}/>
            </div>
        
            <div className={menuClassNames} >
                <h3>{name} {lastname}</h3>
                <ul>
                    <li className= {stylesDropDownMenu.dropdownItem}>
                        <PersonIcon />
                        <a href="">Profile</a>
                    </li>
                    <li className= {stylesDropDownMenu.dropdownItem}>
                        <ManageSearchIcon />
                        <a href="">Activity</a>
                    </li>
                    
                </ul>
                <ul>
                    <li className= {stylesDropDownMenu.dropdownItem}>
                        <SettingsIcon />
                        <a href="">Settings</a>
                    </li>
                    <li className= {stylesDropDownMenu.dropdownItem} onClick={handleCloseSession}>
                        <LogoutIcon />
                        <a>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DropDownMenu