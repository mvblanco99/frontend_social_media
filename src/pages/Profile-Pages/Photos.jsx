import Header from '../../components/Header/Header'
import ProfileBanner from "../../components/Profile/ProfileBanner"  
import stylesProfile from '../Profile.module.css'
import MenuSecundary from '../../components/Profile/MenuSecundary'

const Photos = ({section}) =>{
    return(
        <>
        <Header/>
        
        <div className={stylesProfile.container}>
        <ProfileBanner />
        <MenuSecundary section={section}/>

        
            <h3>Photos</h3>        
        
        </div>
        </>
    )
}

export default Photos