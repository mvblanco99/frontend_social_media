/* eslint-disable react/prop-types */
import stylesAbout from './About.module.css'
import Photos from './Photos'
import Friends from "./Friends"
import SectionSeparator from '../../components/Profile/SectionSeparator'
import { useState } from 'react'

const About = () =>{

    const [data, setData] = useState({"":""})

    const info = {
        "About me": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!",

        
    }

    const handleClick = (item) =>{
        return (setData(info[item]))
    }

    

    return(
        <>
            <section className={stylesAbout.aboutSection_container}>
                <nav className={stylesAbout.menuOption}>
                    <ul>
                        <li onClick={()=>handleClick("About me")}>Something About Me</li>
                        <li>Working Zone</li>
                        <li>Educational Qualification</li>
                        <li>Work & Education</li>
                        <li>Friends & Family</li>
                        <li>Contact Details</li>
                    </ul>
                </nav>
                <article className={stylesAbout.infoAbout}>
                    <h3>{data}</h3>
                    <p>{data}</p>
                    
                </article>
            </section>

            <SectionSeparator section={"Photos"}/>
            <Photos/>

            <SectionSeparator section={"Friends"}/>
            <Friends/>

        
        </>
    )
}

export default About