import stylesHome from "./Home.module.css"
import CreatePost from "../components/CreatePost/CreatePost"
import Post from "../components/Post/Post"
import InfoComponent from "../components/infoComponents/InfoComponent"
import Header from "../components/Header/Header"
import useVerifySesion from "../hooks/useVerifySesion"

const Home = () => {
  
  useVerifySesion();

  return (
    <>
      <Header/>

      <div className={stylesHome.container}>
        <div className={stylesHome.home}>
            
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

export default Home