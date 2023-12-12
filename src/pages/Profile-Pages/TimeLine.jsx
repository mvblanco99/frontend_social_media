import InfoComponent from '../../components/infoComponents/InfoComponent';
import CreatePost from '../../components/CreatePost/CreatePost';
import Post from '../../components/Post/Post';
import stylesProfile from '../../pages/Profile.module.css';
import stylesHome from '../../pages/Home.module.css';

const Timeline = () =>{
    
  return(
    <>
      <div className={stylesProfile.home}>
        <div className={stylesHome.left_section}>
          <InfoComponent title='Posts You May Like' buttonEnabled/>
          <InfoComponent title='Latest Top News'/>
        </div>

        <div className={stylesHome.center_section}>
          <CreatePost/>
          <Post/>
        </div>

        <div className={stylesHome.rigth_section}>
          <InfoComponent title='Recent Notifications'/>
          <InfoComponent title='Recent Notifications'/>
        </div>
      </div>     
    </>
  );
};

export default Timeline;