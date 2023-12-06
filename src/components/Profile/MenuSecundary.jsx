import MenuIcon from '@mui/icons-material/Menu';
import { Badge, IconButton } from '@mui/material';
import StyleMenuSecundary from "./MenuSecundary.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const MenuSecundary = () =>{
    return(
        <>
        <div className={StyleMenuSecundary.menu_container}>
            <p>About</p>
            <ul>
                <li>
                    <FacebookIcon/>
                </li>
                <li>
                    <TwitterIcon />
                </li>
                <li>
                    <GoogleIcon />
                </li>
                <li>
                    <PinterestIcon />
                </li>

            </ul>
            <button>
                <MenuIcon/>
            </button>
        </div>
        </>
    )
}

export default MenuSecundary