import Header from '../../components/Header/Header'
import ProfileBanner from "../../components/Profile/ProfileBanner"  
import InfoComponent from "../../components/infoComponents/InfoComponent"
import CreatePost from "../../components/CreatePost/CreatePost"
import Post from "../../components/Post/Post"
import stylesProfile from '../Profile.module.css'
import stylesHome from "../Home.module.css"


const Timeline = () =>{
    
    return(
        <>
        <Header/>
        
        <div className={stylesProfile.container}>
        <ProfileBanner />

        
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

export default Timeline