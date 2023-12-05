import Header from '../../components/Header/Header'
import ProfileBanner from "../../components/Profile/ProfileBanner"  
import stylesProfile from '../Profile.module.css'

const Photos = () =>{
    return(
        <>
        <Header/>
        
        <div className={stylesProfile.container}>
        <ProfileBanner />

        
            <h3>Photos</h3>        
        
        </div>
        </>
    )
}

export default Photos