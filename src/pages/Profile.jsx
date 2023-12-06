import stylesProfile from './Profile.module.css'
import useVerifySesion from '../hooks/useVerifySesion'
import Friends from "./Profile-Pages/Friends";
import Photos from "./Profile-Pages/Photos";
import About from "./Profile-Pages/About";
import TimeLine from "./Profile-Pages/TimeLine"


import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import ProfileBanner from '../components/Profile/ProfileBanner';
import MenuSecundary from '../components/Profile/MenuSecundary';

import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { toogleDropDownMenu, toogleSearchResponsive } from '../Slices/panelSlice';
import SearchResponsive from '../components/Header/SearchResponsive';


const Profile = () => {

  const searchResponsive  = useSelector(state => state.panel.searchResponsive)
  const dropdownMenu  = useSelector(state => state.panel.dropdownMenu)
  const dispatch = useDispatch();
  const referenceContainer = useRef()
  useVerifySesion()
  let {section} = useParams();

  useVerifySesion();

  const onHandleClick = e => {
    if(referenceContainer.current.contains(e.target)){
      
      if(searchResponsive){
        dispatch(toogleSearchResponsive())
      }

      if(dropdownMenu){
        dispatch(toogleDropDownMenu())
      }
    }
  }

  return (
    <>
      <Header/>
      {
        searchResponsive && <SearchResponsive/>
      }
        
      <div className={stylesProfile.container} ref={referenceContainer} onClick={onHandleClick}>
          <ProfileBanner />
          <MenuSecundary section={section}/>
          <div>
            {section == "TimeLine" && <TimeLine/> }
            {section == "Friends" && <Friends/> }
            {section == "Photos" && <Photos/> }
            {section == "About" && <About/> }
          </div>        
      </div>
      
    </>
  );
}

export default Profile