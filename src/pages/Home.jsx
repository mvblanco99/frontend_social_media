import stylesHome from "./Home.module.css"
import CreatePost from "../components/CreatePost/CreatePost"
import Post from "../components/Post/Post"
import InfoComponent from "../components/infoComponents/InfoComponent"
import Header from "../components/Header/Header"
import useVerifySesion from "../hooks/useVerifySesion"
import SearchResponsive from "../components/Header/SearchResponsive"
import { useDispatch, useSelector } from "react-redux"
import { toogleDropDownMenu, toogleSearchResponsive } from "../Slices/panelSlice"
import { useRef } from "react"

const Home = () => {

  const searchResponsive  = useSelector(state => state.panel.searchResponsive)
  const dropdownMenu  = useSelector(state => state.panel.dropdownMenu)
  const dispatch = useDispatch();
  const referenceContainer = useRef()
  useVerifySesion();

  const onHandleClick = e => {
    if(referenceContainer.current.contains(e.target)){
      
      if(searchResponsive){
        dispatch(toogleSearchResponsive())
      }

      if(dropdownMenu){
        dispatch(toogleDropDownMenu())
      }
    }
  }

  return (
    <>
        <Header/>
        {
          searchResponsive && <SearchResponsive/>
        }
        
      <div className={stylesHome.container} ref={referenceContainer} onClick={onHandleClick}>
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