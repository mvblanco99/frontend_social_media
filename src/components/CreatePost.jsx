import { useState } from "react";
import stylesCreatePost from "./CreatePost.module.css"
// import { addNewPost } from "../Slices/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../Slices/postsSlice";

const CreatePost = () => {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.users.user.id);

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
                    <img src="https://scontent.fmrd1-1.fna.fbcdn.net/v/t1.6435-9/121486890_3499566146791612_7447384720159423732_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=DL7Vwgw-ak0AX_b3sKf&_nc_ht=scontent.fmrd1-1.fna&oh=00_AfCcwHG5xkBvAjildKeyk0EVIid8YiaS4IDauY7w2e7Cpw&oe=65802E13" alt="img-profile" />
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