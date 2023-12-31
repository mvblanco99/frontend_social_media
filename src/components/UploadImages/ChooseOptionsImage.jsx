import stylesChooseOptionsImage from './ChooseOptionsImage.module.css';
import { ImageList, ImageListItem } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeChooseOptionsImage, tooglePostPreview } from '../../Slices/panelSlice';
import Overlay from './Overlay';
import useHandleScroll from '../../hooks/useHandleScroll';
import { ImageContext } from '../../context/ImageContext';

const ChooseOptionsImage = () => {

  const { imageSelected, onSelectedImage , onHandleChange } = useContext(ImageContext);
  const dispatch = useDispatch();

  useHandleScroll();
  
  useEffect(()=>{
    if(imageSelected.data != undefined){
      dispatch(tooglePostPreview());
      dispatch(closeChooseOptionsImage());
    } 
  },[imageSelected]);

  return (
    <>
      <Overlay>
        <div className={stylesChooseOptionsImage.container}>
          <div className={stylesChooseOptionsImage.container_form}>
            <h3>Subir foto</h3>
            <form >
              <input type="file" name='photo' id='photo' onChange={onHandleChange}/>
            </form>
          </div>

          <div className={stylesChooseOptionsImage.container_galeria}>
            <h3>Elegir fotos de la galeria</h3>

            <div className={stylesChooseOptionsImage.galeria}>
              <ImageList sx={{ width: '100%' , height : '100%', }} cols={3} rowHeight={164}>
                {
                  itemData.map((item) => (
                    <ImageListItem 
                      key={item.img} 
                      onClick={(e)=>{onSelectedImage(item);}}>
                      <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        style={{borderRadius: 0, }}/>
                    </ImageListItem>
                  ))
                }
              </ImageList>
            </div>
          </div>
        </div>
      </Overlay>
    </>
  );
};

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  
];

export default ChooseOptionsImage;
