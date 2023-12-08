/* eslint-disable react/prop-types */
import stylesAbout from './About.module.css'
import Photos from './Photos'

const About = () =>{
    return(
        <>
            <section className={stylesAbout.aboutSection_container}>
                <nav className={stylesAbout.menuOption}>
                    <ul>
                        <li>Something About Me</li>
                        <li>Working Zone</li>
                        <li>Educational Qualification</li>
                        <li>Work & Education</li>
                        <li>Friends & Family</li>
                        <li>Contact Details</li>
                    </ul>
                </nav>
                <article className={stylesAbout.infoAbout}>
                    <h3>Info</h3>
                    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed debitis eveniet amet aliquid corrupti deserunt qui ad est laborum quis voluptatem eaque, eos sapiente, distinctio nihil numquam accusamus sint veniam?
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae in iusto sed neque, obcaecati eum odio rem ipsum facere quis beatae magni quibusdam nam, eius nemo unde distinctio? Assumenda, sint. 

                    </p>
                </article>
            </section>
            <Photos/>
        </>
    )
}

export default About