import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
function Navigation() {
    return (<div>
        <div class='navigationbar'>
            <Link to='/' class='linkcls'>
                <p class='_navigationbar'>Home</p></Link>
            <Link to='/contactme' class='linkcls'>
                <p class='_navigationbar'>Contact me</p></Link>

        </div>
    </div>)
}
export default Navigation;