import stylesProfile from './Profile.module.css'
import Header from '../components/Header'

const Profile = () => {
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