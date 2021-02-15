import React from 'react';
import profilepic from './assets/profile.jpg'
import './Header.css'
function Header() {
    return (<div>

        <div class='background-img'>
            <div class='header'>
                <img src={profilepic} class='profilepic-details' />
                <p class='profilepic-title'>Dipankar Debnath</p>
                <p class='profilepic-stitle'>Welcome to my blog</p>
            </div>
        </div>

    </div>);
}
export default Header;