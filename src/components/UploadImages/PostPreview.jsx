import { useEffect, useRef, useState } from 'react'
import stylesPostPreview from './PostPreview.module.css'
import { useDispatch } from 'react-redux'
import { closeChooseOptionsImage, toogleChooseOptionsImage } from '../../Slices/panelSlice'

const PostPreview = () => {
    
    const [text, setText] = useState('')
    const [spaceSeparation, setSpaceSeparation] = useState(0)
    const [spaceSeparationOverlay, setSpaceSeparationOverlay] = useState(0)
    const [textAreaHeigth, setTextAreaHeigth] = useState(0)

    const referenceContainer = useRef()
    const referenceContainerImage = useRef()
    const referenceContainerForm = useRef()

    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        setText(event.target.value)
    }

    const adjustTextareaHeight = (event) => {
        //Actualizamos la altura del textarea
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
        const newHeigth = referenceContainerForm.current.scrollHeight
        if(newHeigth != textAreaHeigth) setTextAreaHeigth(newHeigth)   
    }

    useEffect(()=>{
        dispatch(closeChooseOptionsImage())
        //Guardamos la altura actual del container_form
        setTextAreaHeigth(referenceContainerForm.current.scrollHeight)
        //Guardamos espacio que existe entre el container_image_footer y el container_form
        setSpaceSeparation(Number(referenceContainer.current.scrollHeight) - 
        Number( referenceContainerForm.current.scrollHeight) - 360)
        //Guardamos la altura restante del overlay
        setSpaceSeparationOverlay((Number(document.querySelector('#overlay').scrollHeight) - 
        Number(referenceContainer.current.scrollHeight)))
        //activamos el scrollY al componente overlay
        document.querySelector('#overlay').style.overflowY = 'scroll'
    },[])

    useEffect(()=>{
        //Calculamos la nueva altura del container
        const newHeigth = Number(spaceSeparation) + 360 + Number(textAreaHeigth)
        //Asignamos la altura
        referenceContainer.current.style.heigth = newHeigth + 'px'
        //calculamos la nueva altura del componente overlay
        const newOverlayHeigth = ( newHeigth + spaceSeparationOverlay)
        //Asignamos nueva altura al componente overlay
        document.querySelector('#overlay').style.height = newOverlayHeigth + 'px'
    },[textAreaHeigth])
    
    return (
    <>
        <div className={stylesPostPreview.container} ref={referenceContainer}>
            <h3>Elegir foto de perfil</h3>   
            <div className={stylesPostPreview.container_form} ref={referenceContainerForm}>
                
                <form>
                    <label htmlFor="description">descripcion</label>
                    <textarea
                    value={text}
                    onChange={handleInputChange}
                    onInput={adjustTextareaHeight}
                    
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
                    <button type='button' onClick={()=>{dispatch(toogleChooseOptionsImage())}}>Cancel</button>
                    <button type='submit'>Guardar</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default PostPreview
