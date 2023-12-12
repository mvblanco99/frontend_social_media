import styles_reaction from './Footer.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FooterPost = () => {
  return (
    <div className={styles_reaction.container_reactions}>
      <button><FavoriteIcon/></button>
      <p>You and 201 people like this</p>
    </div>
  );
};

export default FooterPost;