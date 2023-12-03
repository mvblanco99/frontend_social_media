import stylesProfile from './Profile.module.css'
import Header from '../components/Header/Header'
import useVerifySesion from '../hooks/useVerifySesion'

const Profile = () => {

  useVerifySesion()
  
  return (
    <>
      <Header/>
      <div className={stylesProfile.container}>
        <div className = {stylesProfile.profile}>Profile</div>
      </div>
    </>
  )
}

export default Profile