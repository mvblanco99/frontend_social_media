import Header from '../../components/Header/Header'
import ProfileBanner from "../../components/Profile/ProfileBanner"  
import stylesProfile from '../Profile.module.css'

const Friends = () =>{
    return(
        <>
            <Header/>
        
            <div className={stylesProfile.container}>
            <ProfileBanner />

            
                <h3>Friends</h3>        
            
            </div>
        
        </>
    )
}

export default Friends