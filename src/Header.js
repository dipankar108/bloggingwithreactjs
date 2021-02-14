import React from 'react';
import background from './assets/background.jpg';
import profilepic from './assets/profile.jpg'
import './Header.css'
function Header() {
    return (<div>
        <div class='navigationbar'>
            <p class='_navigationbar'>Home</p>
            <p class='_navigationbar'>Contact me</p>
        </div>
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