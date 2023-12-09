import { useEffect, useRef, useState } from 'react'
import stylesPostPreview from './PostPreview.module.css'
import { useDispatch } from 'react-redux'
import { closeChooseOptionsImage } from '../../Slices/panelSlice'

const PostPreview = () => {
    
    const [text, setText] = useState('')
    const [spaceSeparation, setSpaceSeparation] = useState(0)
    const [textAreaHeigth, setTextAreaHeigth] = useState(0)

    const referenceContainer = useRef()
    const referenceContainerImage = useRef()
    const referenceContainerForm = useRef()

    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        setText(event.target.value)
    }

    const adjustTextareaHeight = (event) => {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
        const newHeigth = referenceContainerForm.current.scrollHeight
        if(newHeigth != textAreaHeigth) setTextAreaHeigth(newHeigth)
        
    }

    useEffect(()=>{
        dispatch(closeChooseOptionsImage())
        setTextAreaHeigth(referenceContainerForm.current.scrollHeight)    
        setSpaceSeparation(Number(referenceContainer.current.scrollHeight) - 
        Number( referenceContainerForm.current.scrollHeight) - 360)
        // document.querySelector('#overlay').style.overflowY = 'scroll'
    },[])

    useEffect(()=>{
        const newHeigth = Number(spaceSeparation) + 360 + Number(textAreaHeigth)
        referenceContainer.current.style.heigth = newHeigth + 'px'
    },[textAreaHeigth])
    
    return (
    <>
        <div className={stylesPostPreview.container} ref={referenceContainer}>
            
            <div className={stylesPostPreview.container_form} ref={referenceContainerForm}>
                <h3>Elegir foto de perfil</h3>
                <form>
                    <label htmlFor="description">descripcion
                        <textarea
                            value={text}
                            onChange={handleInputChange}
                            onInput={adjustTextareaHeight}
                            style={{ overflow: 'hidden' }}
                            name='description'
                            id='description'
                        />
                    </label>
                    
                </form>
            </div>

            <div className={stylesPostPreview.container_image_footer}>
                <div className={stylesPostPreview.container_image} ref={referenceContainerImage}>
                    <img src="https://laverdadnoticias.com/__export/1577315932071/sites/laverdad/img/2019/12/25/goku.jpg_1902800913.jpg" alt="Yoenestosmomentos" />
                </div>
                <div className={stylesPostPreview.footer}>
                    <button type='button'>Cancel</button>
                    <button type='submit'>Guardar</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default PostPreview
