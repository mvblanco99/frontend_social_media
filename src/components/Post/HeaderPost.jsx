import stylesHeaderPost from './HeaderPost.module.css';

const HeaderPost = ({name_user, img_user, creation_date, modification_date}) => {

  const {fecha_result} = creation_date;

  return (
    <div className={stylesHeaderPost.header_post}>  
      <a href="#" className={stylesHeaderPost.container_img}>
        <img
          className={stylesHeaderPost.img} 
          src={img_user} alt={name_user} />
      </a>  
      <div className={stylesHeaderPost.time_title}>
        <a className='name-user' href='#'><strong>{name_user}</strong></a>
        <p className='time-ago'>{fecha_result}</p>
      </div>
    </div>
  );
};

export default HeaderPost;