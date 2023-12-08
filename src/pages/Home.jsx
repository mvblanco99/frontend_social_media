import stylesHome from "./Home.module.css"
import CreatePost from "../components/CreatePost/CreatePost"
import Post from "../components/Post/Post"
import InfoComponent from "../components/infoComponents/InfoComponent"
import Header from "../components/Header/Header"
import useVerifySesion from "../hooks/useVerifySesion"
import SearchResponsive from "../components/Header/SearchResponsive"
import { useDispatch, useSelector } from "react-redux"
import { toogleChooseOptionsImage, toogleDropDownMenu, tooglePostPreview, toogleSearchResponsive } from "../Slices/panelSlice"
import { useRef } from "react"
import ImageProfileHome from "../components/ImageProfileHome/ImageProfileHome"
import ChooseOptionsImage from "../components/UploadImages/ChooseOptionsImage"
import Overlay from '../components/UploadImages/Overlay'
import PostPreview from "../components/UploadImages/PostPreview"

const Home = () => {

  const statePanel = useSelector(state => state.panel)
  const {
    searchResponsive, 
    dropdownMenu, 
    chooseOptionsImage, 
    postPreview
  } = statePanel
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

      if(chooseOptionsImage){
        dispatch(toogleChooseOptionsImage())
      }

      if(postPreview){
        dispatch(tooglePostPreview())
      }

    }
  }

  return (
    <>
        <Header/>
        
        { searchResponsive && <SearchResponsive/> }
        { chooseOptionsImage && <ChooseOptionsImage/> }
        { postPreview && <PostPreview/> }
        
      <div className={stylesHome.container} ref={referenceContainer} onClick={onHandleClick}>

        { chooseOptionsImage && <Overlay/> }
        
        <div className={stylesHome.home}>
            
            <div className={stylesHome.left_section}>
              <ImageProfileHome/>
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