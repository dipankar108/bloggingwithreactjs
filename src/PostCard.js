import React, { useState } from 'react';
import './PostCard.css'
import dem from './assets/profile.jpg';
import { Link } from 'react-router-dom';

function PostCard(props) {
    console.log(props.title);
    console.log(props.desc);
    return (<div class='post'>
        <Link to='/postdetails' class="linkcls" >
            <div class='main_post'>
                <div class='post-img'>
                    <img src={dem} />
                </div>

                <div class='post-text'>
                    <p>{props.title}</p>
                    <p>{props.desc}</p>
                </div>

            </div>
        </Link>
    </div>);
}
export default PostCard;