/* eslint-disable react/prop-types */

import stylesProfileBanner from './ProfileBanner.module.css'

import { useSelector } from 'react-redux';

const ProfileBanner = ({pageSelected}) =>{
    const userState = useSelector(state => state.users)
    const { img, name, lastname } = userState.user

    

    const handleClick = (data) =>{
        pageSelected(data)
        
    }

    return(
        <>
            <div className = {stylesProfileBanner.profile_banner}>

                <div className = {stylesProfileBanner.profile_banner_coverPhoto}>
                </div>

                <img src={img} alt="" />

                <div className={stylesProfileBanner.profile_banner_whiteSection}>
                    <ul>
                        <li >
                            <a onClick={()=>handleClick("Timeline")}>Timeline</a>
                        </li>
                        
                        <li >
                            <a onClick={()=>handleClick("About")}>
                            About
                            </a>
                        </li>

                        <li >
                            <a onClick={()=>handleClick("Photos")}>
                            Photos
                            </a>
                        </li>

                        <li >
                            <a onClick={()=>handleClick("Friends")}>
                            Friends
                            </a>
                        </li>
                        
                        <li >
                            <a onClick={()=>handleClick("More")}>
                            More
                            </a>
                        </li>
                        
                       
                    </ul>
                </div>


            </div>
        </>
    )
}

export default ProfileBanner