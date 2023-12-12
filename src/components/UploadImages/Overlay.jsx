import { useRef } from 'react';
import stylesOverlay from './Overlay.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toogleChooseOptionsImage, tooglePostPreview } from '../../Slices/panelSlice';

const Overlay = ({children}) => {

  const statePanel = useSelector(state => state.panel);

  const {
    chooseOptionsImage, 
    postPreview
  } = statePanel;

  const referenceOverlay = useRef();
  const referenceContainerChildren = useRef();

  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    if(referenceOverlay.current.contains(e.target)){
      
      if(!referenceContainerChildren.current.contains(e.target)){
        
        if(chooseOptionsImage){
          dispatch(toogleChooseOptionsImage());
        }
  
        if(postPreview){
          dispatch(tooglePostPreview());
        }
      }
    }
  };

  return (
    <div className={stylesOverlay.overlay} id="overlay" ref={referenceOverlay} onClick={handleClick}>
      <div className={stylesOverlay.containerChildren} ref={referenceContainerChildren} >
        {children}
      </div>
    </div>
  );
};

export default Overlay;