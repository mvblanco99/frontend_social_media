import styles_app from "./App.module.css"
import { useLocation } from 'react-router-dom'
import RedirecRoute from './components/RedirecRoute'
import { useEffect, useState } from "react";
function App() {

  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState(location.pathname)
  const [componentRendered, setComponentRendered] = useState('')
  
  useEffect(()=>{
    setCurrentUrl(location.pathname)
  },[location])

  useEffect(()=>{
    setComponentRendered( (componentRendered) => {
      componentRendered = RedirecRoute({currentUrl})
      return componentRendered
    })
  },[currentUrl])

  return (
    <>
      <div className={styles_app.container_app}>
          {componentRendered}
      </div>
    </>
  )
}

export default App
