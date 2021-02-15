import React from 'react';
import postpic from './assets/profile.jpg';
import './Postdetails.css'
function PostDetails() {
    return (<div class='title'>
        <div class='post'>
            <h2 class='post__title'>Where does it come from?</h2>
            <img clsss='post__img' src={postpic} />
            <p class='post__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>);
}
export default PostDetails;