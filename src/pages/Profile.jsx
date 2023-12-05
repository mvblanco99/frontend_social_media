import stylesProfile from './Profile.module.css'
import Header from '../components/Header/Header'
import useVerifySesion from '../hooks/useVerifySesion'
import stylesHome from "./Home.module.css"
import CreatePost from "../components/CreatePost/CreatePost"
import Post from "../components/Post/Post"
import InfoComponent from "../components/infoComponents/InfoComponent"
import ProfileBanner from "../components/Profile/ProfileBanner"    
import { useState } from 'react'

const Profile = () => {

  useVerifySesion()

  const[page, setPage] = useState("")

  const pageSelected = (data) =>{
    console.log(data)
    setPage(data)
  }

 
  
  return (
    <>
      <Header/>
      <div className={stylesProfile.container}>
        <ProfileBanner pageSelected={pageSelected}/>

        <div className={stylesProfile.home}>
          <div className={stylesHome.left_section}>
            <InfoComponent title='Posts You May Like' buttonEnabled/>
            <InfoComponent title='Latest Top News'/>
          </div>

          <div className={stylesHome.center_section}>
            <CreatePost/>
            <Post/>
          </div>

          <div className={stylesHome.rigth_section}>
            <InfoComponent title='Recent Notifications'/>
            <InfoComponent title='Recent Notifications'/>
          </div>

        </div>

        
      </div>
    </>
  )
}

export default Profile