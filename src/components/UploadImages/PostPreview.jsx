import stylesPostPreview from './PostPreview.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closePostPreview, toogleChooseOptionsImage } from '../../Slices/panelSlice';
import Overlay from './Overlay';
import useHandleScroll from '../../hooks/useHandleScroll';
import { ImageContext } from '../../context/ImageContext';

const PostPreview = () => {
  const [text, setText] = useState('');
  const [spaceSeparation, setSpaceSeparation] = useState(0);
  const [textAreaHeigth, setTextAreaHeigth] = useState(0);
  const [image, setImage] = useState('');

  const referenceContainer = useRef();
  const referenceContainerImage = useRef();
  const referenceContainerForm = useRef();
    
  const { imageSelected, onSelectedImage } = useContext(ImageContext);
  
  const dispatch = useDispatch();

  useHandleScroll();

  const proccessImage = () => {

    if(imageSelected.data instanceof File){
      const file = imageSelected.data;

      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
    
    }else{
      setImage(imageSelected.data.img);
    }
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const adjustTextareaHeight = (event) => {
    //Actualizamos la altura del textarea
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
    const newHeigth = referenceContainerForm.current.scrollHeight;
    if(newHeigth != textAreaHeigth) setTextAreaHeigth(newHeigth);   
  };

  const goToPreviousPanel = () => {
    onSelectedImage(undefined);
    dispatch(toogleChooseOptionsImage());
    dispatch(closePostPreview());
  };

  useEffect(()=>{
    //Guardamos la altura actual del container_form
    setTextAreaHeigth(referenceContainerForm.current.scrollHeight);
    //Guardamos espacio que existe entre el container_image_footer y el container_form
    setSpaceSeparation(Number(referenceContainer.current.scrollHeight) - 
        Number( referenceContainerForm.current.scrollHeight) - 360);
    proccessImage();
  },[]);

  useEffect(()=>{
    //Calculamos la nueva altura del container
    const newHeigth = Number(spaceSeparation) + 360 + Number(textAreaHeigth);
    //Asignamos la altura
    referenceContainer.current.style.heigth = newHeigth + 'px';
  },[textAreaHeigth]);
    
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
                id='description'/>
            </form>
          </div>

          <div className={stylesPostPreview.container_image_footer}>
            <div className={stylesPostPreview.container_image} ref={referenceContainerImage}>
              <img src={image}  alt={imageSelected.data.title}/>
            </div>
            <div className={stylesPostPreview.footer}>
              <button type='button' onClick={goToPreviousPanel}>Cancel</button>
              <button type='submit'>Guardar</button>
            </div>
          </div>
        </div>
      </Overlay>
    </>
  );
};

export default PostPreview;
