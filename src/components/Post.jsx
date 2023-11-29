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

  function calcularTiempoTranscurrido(fecha) {
    
    const fechaActual = new Date();
    const fechaPost = new Date(fecha);
    const tiempoTranscurrido = fechaActual - fechaPost;
  
    // Convertir el tiempo transcurrido a días, horas, minutos y segundos
    const segundos = Math.floor(tiempoTranscurrido / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    let fecha_result;

    if(dias > 0){
      fecha_result = `${dias} d`;
    }else if(horas > 0){
      fecha_result = `${horas} h`
    }else if(minutos > 0){
      fecha_result = `${minutos} min`
    }else if(segundos){
      fecha_result = `${segundos} seg`;
    }
  
    return {
      fecha_result
    };
  }
  
  let renderedPosts;

  if(postStatus === 'loading'){
    renderedPosts = <Loader/>
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