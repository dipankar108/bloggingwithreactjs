import React from 'react';
import './Post.css'
import dem from './assets/profile.jpg'
function Post() {
    return (<div class='post'>
        <div class='main_post'>
            <div class='post-img'>
                <img src={dem} />
            </div>
            <div class='post-text'>
                <p>Post Title</p>
                <p>Post Description</p>
            </div>
        </div>
    </div>);
}
export default Post;