import stylesChooseOptionsImage from './ChooseOptionsImage.module.css'
import InputFileUpload from './InputFileUpload';
import ListImage from '../ListImage'

const ChooseOptionsImage = () => {
  return (
    <>
        <div className={stylesChooseOptionsImage.container}>

            <div className={stylesChooseOptionsImage.container_form}>
              <h3>Elegir foto de perfil</h3>
              
              <form >
                  <InputFileUpload/>
              </form>
            </div>

            <div className={stylesChooseOptionsImage.galeria}>
                <h3>Galeria de Imagenes</h3>
                <ListImage cols={3}/>
            </div>

        </div>
    </>
  )
}

export default ChooseOptionsImage
