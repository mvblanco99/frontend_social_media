import { useDispatch, useSelector } from "react-redux"
import FooterPost from "./FooterPost"
import HeaderPost from "./HeaderPost"
import MainPost from "./MainPost"
import stylesPost from "./Post.module.css"
import { useEffect } from "react"
import { fetchPosts } from "../../Slices/postsSlice"
import { CircularProgress } from "@mui/material"
import { calcularTiempoTranscurrido } from "../../utilities/date"

const Post = () => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts)
  const postStatus = useSelector(state => state.posts.status)
  const isCookies = useSelector(state => state.session.isCookies);

  useEffect(()=>{
    if (postStatus === 'idle' & isCookies) {
      dispatch(fetchPosts())
    }
  },[postStatus])

  let renderedPosts;

  if(postStatus === 'loading'){
    renderedPosts = <div style={{width:'100%', textAlign:'center', marginTop:'30px'}}><CircularProgress/></div>
  }else if(postStatus === 'succeeded'){

    const postsOrdered = JSON.parse(JSON.stringify(posts.posts)).sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date));

    renderedPosts = postsOrdered.map( (post,index) => (
      <li className={stylesPost.post} key={index}>
        <HeaderPost 
          name_user={`${post.name_user} ${post.lastname_user}`} 
          img_user={post.img_user}
          creation_date={calcularTiempoTranscurrido(post.creation_date)}
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