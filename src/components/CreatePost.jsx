import { useState } from "react";
import stylesCreatePost from "./CreatePost.module.css"
// import { addNewPost } from "../Slices/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../Slices/postsSlice";

const PREFIX_IMAGE = "http://localhost/api/src/";

const CreatePost = () => {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.users.user.id);
    const userState = useSelector(state => state.users)
    const { img, name, lastname } = userState.user

    const [content, setContent] = useState('');
    const onHandlechange = e => setContent(e.target.value)

    const onSubmit = e => {
        e.preventDefault();

        const body = {
            user_id : userId,
            content,
            img: ''
        }

        dispatch(addNewPost(body))
    }
 
  return (
    <>
        <div className={stylesCreatePost.create_post}>
            <div className={stylesCreatePost.container}>
                <a className={stylesCreatePost.container_img} href="#">
                    <img src={`${PREFIX_IMAGE}${img} `} alt={`${name} ${lastname}`} />
                </a>
                <div className={stylesCreatePost.container_form}>
                    <form className={stylesCreatePost.form} onSubmit={onSubmit}>
                        <label htmlFor="">
                            <input 
                                type="text" 
                                placeholder="Say Something"
                                className={stylesCreatePost.input_text}
                                value={content}
                                onChange={onHandlechange}
                            />
                            <button type="submit" className={stylesCreatePost.button}>Share</button>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreatePost