import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='logo'>LOGO</div>
            <nav>
                <button>Programming</button>
                <button>Geology</button>
                <button>Extra</button>
            </nav>
            <button className='sidemenu-btn'><GiHamburgerMenu /></button>
        </div>
    )
}

export default Navbar
