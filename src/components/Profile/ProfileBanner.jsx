/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import stylesProfileBanner from './ProfileBanner.module.css'

import { useSelector } from 'react-redux';
import useVerifySesion from "../../hooks/useVerifySesion"

const ProfileBanner = () =>{
    const userState = useSelector(state => state.users)
    const { img, name, lastname } = userState.user

    useVerifySesion();


    /* const handleClick = (data) =>{
        pageSelected(data)
        
    } */
    

    return(
        <>
            <div className = {stylesProfileBanner.profile_banner}>

                <div className = {stylesProfileBanner.profile_banner_coverPhoto}>
                </div>

                <img src={img} alt="" />

                <div className={stylesProfileBanner.profile_banner_whiteSection}>
                    <ul>
                        <li >
                            <Link to='/Profile/TimeLine'>
                                Timeline
                            </Link>
                        </li>
                        
                        <li >
                            <Link to='/Profile/About'>
                                About
                            </Link>
                        </li>

                        <li >
                            <Link to='/Profile/Photos'>
                                Photos
                            </Link>
                        </li>

                        <li >
                            <Link to='/Profile/Friends'>
                                Friends
                            </Link>
                        </li>
                        
                        <li >
                            <a >
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