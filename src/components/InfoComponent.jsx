/* eslint-disable react/prop-types */
import Posteos from "./posteos"
import stylesInfoComponent from './InfoComponent.module.css'

const InfoComponent = ({title, buttonEnabled = false}) => {

    const array_of_words = title.split(' ');
    const first_word_of_the_title = array_of_words[0];
    const other_words_in_the_title = array_of_words.slice(1).join(" ");

  return (
    <>
        <div className={stylesInfoComponent.info_component}>
        <h1><span>{first_word_of_the_title}</span> {other_words_in_the_title}</h1>

        <ul className={stylesInfoComponent.container}>
            <Posteos title='Travel The World' text='Adventure' buttonEnabled={buttonEnabled}/>
            <Posteos title='Travel the world' text='Adventure' buttonEnabled={buttonEnabled}/>
            <Posteos title='Travel the world' text='Adventure' buttonEnabled={buttonEnabled}/>
            <Posteos title='Travel the world' text='Adventure' buttonEnabled={buttonEnabled}/>
        </ul>
      </div>  
    </>
  )
}

export default InfoComponent