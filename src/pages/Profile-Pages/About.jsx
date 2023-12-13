/* eslint-disable react/prop-types */
import stylesAbout from './About.module.css';
import Photos from './Photos';
import Friends from './Friends';
import SectionSeparator from '../../components/Profile/SectionSeparator';
import { useState } from 'react';
import { object } from 'prop-types';

const About = () =>{

  const [data, setData] = useState({
    'About me': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!',
  });

  const info = {
    'About me': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!',

    'Work':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!',
    
    'Education': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!',

    'Family': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!',

    'contact': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!'
  };

  const handleClick = (item) =>{
    return (setData({ [item]: info[item] }));
  };

  const getEntries = () =>{
    
    let keys = Object.keys(data);
    console.log(keys);

    let values = Object.values(data);
    console.log(values);

    return [keys, values];
  };
  const [key,val] = getEntries();

  return(
    <>
      <section className={stylesAbout.aboutSection_container}>
        <nav className={stylesAbout.menuOption}>
          <ul>
            <li onClick={()=>handleClick('About me')}>Something About Me</li>
            <li onClick={()=>handleClick('Work')}>Working Zone</li>
            <li onClick={()=>handleClick('Education')}>Educational Qualification</li>
            
            <li onClick={()=>handleClick('Family')}>Friends & Family</li>
            <li onClick={()=>handleClick('contact')}>Contact Details</li>
          </ul>
        </nav>
        <article className={stylesAbout.infoAbout}>
          
          <h3>{key.map(key => key)}</h3>
          <p>{val.map(val=>val)}</p>
                    
        </article>
      </section>

      <SectionSeparator section="Photos"/>
      <Photos/>

      <SectionSeparator section="Friends"/>
      <Friends/>

        
    </>
  );
};

export default About;