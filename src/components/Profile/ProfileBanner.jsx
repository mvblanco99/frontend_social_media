/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import stylesProfileBanner from './ProfileBanner.module.css';

import { useSelector } from 'react-redux';
import useVerifySesion from '../../hooks/useVerifySesion';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const ProfileBanner = () =>{
  const userState = useSelector(state => state.users);
  const { img, name, lastname } = userState.user;

  useVerifySesion();

  /* const handleClick = (data) =>{
        pageSelected(data)
        
    } */
    
  return(
    <>
      <div className = {stylesProfileBanner.profile_banner}>

        <div className = {stylesProfileBanner.profile_banner_coverPhoto}>
          <img src="https://live.staticflickr.com/2857/10509570106_5a0699853b_c.jpg" alt="cover Photo" className={stylesProfileBanner.Profile_coverPhoto}/>
        </div>

                
        <img src={img} alt="Profile Photo" className={stylesProfileBanner.Profile_photo} />

        <div className={stylesProfileBanner.profile_banner_whiteSection}>

          <div className={stylesProfileBanner.whiteSection_content}>
            <button className= {stylesProfileBanner.AggFriends_buttons}>
              <PersonAddIcon/>
              Add
            </button>
            <ul>
              <li >
                <Link to='/Profile/TimeLine'>
                  Timeline
                </Link>
              </li>
                            
              <li >
                <Link to='/Profile/About'>
                  About
                </Link>
              </li>

              <li >
                <Link to='/Profile/Photos'>
                  Photos
                </Link>
              </li>

              <li >
                <Link to='/Profile/Friends'>
                  Friends
                </Link>
              </li>  
            </ul>
          </div>    
        </div>
      </div>
    </>
  );
};

export default ProfileBanner;