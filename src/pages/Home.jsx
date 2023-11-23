import CreatePost from "../components/CreatePost"
import Post from "../components/Post"
import stylesHome from "./Home.module.css"
import InfoComponent from "../components/InfoComponent"
import Header from "../components/Header"
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
            </div>
    
          </div>
      </div>
    </>
  )
}

export default Home