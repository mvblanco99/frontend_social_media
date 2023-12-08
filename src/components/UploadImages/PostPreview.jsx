import React, { useRef, useState } from 'react'
import stylesPostPreview from './PostPreview.module.css'

const PostPreview = () => {
    
    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const adjustTextareaHeight = (event) => {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
    };
    
    return (
    <>
        <div className={stylesPostPreview.container}>
            <div className={stylesPostPreview.container_form}>
                <form>
                    <textarea
                        value={text}
                        onChange={handleInputChange}
                        onInput={adjustTextareaHeight}
                        style={{ overflow: 'hidden' }}
                    />
                </form>
            </div>
            <div className={stylesPostPreview.container_image}>
                <img src="" alt="" />
            </div>
        </div>
    </>
  )
}

export default PostPreview
