import Header from '../../components/Header/Header'
import ProfileBanner from "../../components/Profile/ProfileBanner"  
import stylesProfile from '../Profile.module.css'
import MenuSecundary from '../../components/Profile/MenuSecundary'

const About = () =>{
    return(
        <>
        <Header/>
        
        <div className={stylesProfile.container}>
        <ProfileBanner />

        <MenuSecundary/>
        <h3>About</h3>        
        
        </div>
        
        </>
    )
}

export default About