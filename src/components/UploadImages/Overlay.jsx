import { useEffect } from 'react';
import stylesOverlay from './Overlay.module.css'

const Overlay = () => {

  useEffect(() => {
    document.body.style.overflow = 'hidden'; 
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  return (
    <div className={stylesOverlay.overlay}></div>
  )
}

export default Overlay