import { useState } from 'react';
import stylesCreatePost from './CreatePost.module.css';
// import { addNewPost } from "../Slices/postsSlice";
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from '../../Slices/postsSlice';

const CreatePost = () => {

  const dispatch = useDispatch();
  const userState = useSelector(state => state.users);
  const { img, name, lastname, userId } = userState.user;

  const [content, setContent] = useState('');
  const onHandlechange = e => setContent(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    const body = {
      user_id : userId,
      content,
      img: ''
    };

    dispatch(addNewPost(body));
  };
 
  return (
    <>
      <div className={stylesCreatePost.create_post}>
        <div className={stylesCreatePost.container}>
          <a className={stylesCreatePost.container_img} href="#">
            <img src={img} alt={`${name} ${lastname}`} />
          </a>
          <div className={stylesCreatePost.container_form}>
            <form className={stylesCreatePost.form} onSubmit={onSubmit}>
              <label htmlFor="CreatePostInput">
                <input 
                  id="CreatePostInput"
                  type="text" 
                  placeholder="Say Something"
                  className={stylesCreatePost.input_text}
                  value={content}
                  onChange={onHandlechange}/>
                <button type="submit" className={stylesCreatePost.button}>Share</button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;