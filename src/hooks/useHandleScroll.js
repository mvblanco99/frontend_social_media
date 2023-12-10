import { useEffect } from "react"
import { useSelector } from "react-redux"

const useHandleScroll = () => {
  
    const statePanel = useSelector(state => state.panel)

    const { 
        chooseOptionsImage, 
        postPreview
    } = statePanel

    useEffect(() => {

        if(postPreview){
            document.querySelector('#overlay').style.overflowY = 'scroll'
        }

        if(chooseOptionsImage || postPreview){
            document.body.style.overflow = 'hidden'
        }

        if(!chooseOptionsImage && !postPreview){
            document.body.style.overflow = 'scroll'
        }
        
    },[chooseOptionsImage,postPreview])
}

export default useHandleScroll