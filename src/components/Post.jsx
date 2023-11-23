import { useDispatch, useSelector } from "react-redux"
import FooterPost from "./parts-of-posts/FooterPost"
import HeaderPost from "./parts-of-posts/HeaderPost"
import MainPost from "./parts-of-posts/MainPost"
import stylesPost from "./Post.module.css"
import { useEffect } from "react"
import { fetchPosts } from "../Slices/postsSlice"
import Loader from "./Loader"

const Post = () => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts)
  const postStatus = useSelector(state => state.posts.status)

  useEffect(()=>{
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  },[postStatus])

  let renderedPosts;

  if(postStatus === 'loading'){
    renderedPosts = <Loader/>
  }else if(postStatus === 'succeeded'){
    renderedPosts = posts.posts.map( post => (
      <li className={stylesPost.post} key={post.id}>
        <HeaderPost 
          name_user={`${post.name_user} ${post.lastname_user}`} 
          img_user={post.img_user}
          creation_date={post.creation_date}
          modification_date={post.modification_date}
        />
        <MainPost
          content={post.content}
          img_post={post.img_post}
        />
        <FooterPost/>
      </li>
    ))
  }

  return (
    <ul style={{listStyle:'none'}}>
      {renderedPosts}
    </ul>
  )
}

export default Post