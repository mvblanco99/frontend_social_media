import { useState } from 'react';
import { ImageContext } from './ImageContext';

const ImageContextProvider = ({children}) => {
    
  const [imageSelected, setImageSelected] = useState({
    data : undefined
  });

  const onSelectedImage = (item) => {setImageSelected({...imageSelected, data : item});};

  const onHandleChange = (e) => {
        
    if(e.target.files[0]){ 

      const file = e.target.files[0];

      //Verificando si el archivo es una imagen
      if (file.type !== 'image/jpeg' && file.type !== 'image/jpg') {
        alert('El archivo debe ser una imagen JPEG.');
        return;
      }
        
      if (file.size > 1024 * 1024) {
        alert('El archivo no debe superar 1 MB.');
        return;
      }

      setImageSelected({...imageSelected, data : e.target.files[0]});
        
    }
  };

  return (
    <ImageContext.Provider value={{
      imageSelected,
      onSelectedImage,
      onHandleChange
    }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;