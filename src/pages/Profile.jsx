
import { useEffect } from 'react';
import useVerifySesion from '../hooks/useVerifySesion'
import Friends from "./Profile-Pages/Friends";
import Photos from "./Profile-Pages/Photos";
import About from "./Profile-Pages/About";
import TimeLine from "./Profile-Pages/TimeLine"


import { Routes, Route, useParams } from 'react-router-dom';


const Profile = () => {

  useVerifySesion()

  let {section} = useParams();


 
  
  return (
    <>
      {section == "TimeLine" && <TimeLine/> }
      {section == "Friends" && <Friends section={section}/> }
      {section == "Photos" && <Photos section={section}/> }
      {section == "About" && <About section={section}/> }
    </>
  );
}

export default Profile