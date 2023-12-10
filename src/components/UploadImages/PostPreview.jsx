import { useEffect, useRef, useState } from 'react'
import stylesPostPreview from './PostPreview.module.css'
import { useDispatch } from 'react-redux'
import { closePostPreview, toogleChooseOptionsImage } from '../../Slices/panelSlice'
import Overlay from './Overlay'
import useHandleScroll from '../../hooks/useHandleScroll'

const PostPreview = () => {
    
    const [text, setText] = useState('')
    const [spaceSeparation, setSpaceSeparation] = useState(0)
    const [textAreaHeigth, setTextAreaHeigth] = useState(0)

    const referenceContainer = useRef()
    const referenceContainerImage = useRef()
    const referenceContainerForm = useRef()

    const dispatch = useDispatch()

    useHandleScroll()

    const handleInputChange = (event) => {
        setText(event.target.value)
    }

    const adjustTextareaHeight = (event) => {
        //Actualizamos la altura del textarea
        event.target.style.height = 'auto'
        event.target.style.height = event.target.scrollHeight + 'px'
        const newHeigth = referenceContainerForm.current.scrollHeight
        if(newHeigth != textAreaHeigth) setTextAreaHeigth(newHeigth)   
    }

    const goToPreviousPanel = () => {
        dispatch(toogleChooseOptionsImage())
        dispatch(closePostPreview())
    }

    useEffect(()=>{
        //Guardamos la altura actual del container_form
        setTextAreaHeigth(referenceContainerForm.current.scrollHeight)
        //Guardamos espacio que existe entre el container_image_footer y el container_form
        setSpaceSeparation(Number(referenceContainer.current.scrollHeight) - 
        Number( referenceContainerForm.current.scrollHeight) - 360)
    },[])

    useEffect(()=>{
        //Calculamos la nueva altura del container
        const newHeigth = Number(spaceSeparation) + 360 + Number(textAreaHeigth)
        //Asignamos la altura
        referenceContainer.current.style.heigth = newHeigth + 'px'
    },[textAreaHeigth])
    
    return (
        <>  
            <Overlay>
                <div className={stylesPostPreview.container} ref={referenceContainer}>
                    <h3>Elegir foto de perfil</h3>   
                    <div className={stylesPostPreview.container_form} ref={referenceContainerForm}>
                        
                        <form>
                            <label htmlFor="description">descripcion</label>
                            <textarea
                                value={text}
                                onChange={handleInputChange}
                                onInput={adjustTextareaHeight}
                                style={{overflow:'hidden'}}
                                name='description'
                                id='description'
                            />
                        </form>
                    </div>

                    <div className={stylesPostPreview.container_image_footer}>
                        <div className={stylesPostPreview.container_image} ref={referenceContainerImage}>
                            <img src="https://laverdadnoticias.com/__export/1577315932071/sites/laverdad/img/2019/12/25/goku.jpg_1902800913.jpg" alt="Yoenestosmomentos" />
                        </div>
                        <div className={stylesPostPreview.footer}>
                            <button type='button' onClick={goToPreviousPanel}>Cancel</button>
                            <button type='submit'>Guardar</button>
                        </div>
                    </div>
                </div>
            </Overlay>
        </>
  )
}

export default PostPreview
