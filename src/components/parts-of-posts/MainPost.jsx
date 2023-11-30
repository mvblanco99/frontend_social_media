/* eslint-disable react/prop-types */
import stylesMainPost from './MainPost.module.css'

const MainPost = ({content, img_post}) => {
  return (
    <div className={stylesMainPost.main_post}>
        <div className={stylesMainPost.text_post}>
            <p>{content}</p>
        </div>
        {
          img_post &&
          <div className={stylesMainPost.container_img_post}>
              <img 
                src={img_post} 
                alt={content}
                className={stylesMainPost.img_post} 
              />
          </div>
        }
    </div>
  )
}

export default MainPost