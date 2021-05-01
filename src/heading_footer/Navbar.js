import React from 'react'
import {useGlobalContext} from './headingContext'

import {GiHamburgerMenu} from 'react-icons/gi'
import Submenu from './Submenu'

const Navbar = () => {
    const {openSubmenu, closeSubmenu} = useGlobalContext()

    const handleOver = (e)=>{
        let main = e.target.textContent
        let BTN = e.target.getBoundingClientRect()
        let top = BTN.top + 41
        let left = BTN.left
        openSubmenu(main, {top,left})
    }
    return (
        <div onMouseLeave={closeSubmenu} className='navbar-container'>
            <div className='logo'>LOGO</div>
            <nav>
                <button onMouseOver={handleOver}>Programming</button>
                <button onMouseOver={handleOver}>Geology</button>
                <button onMouseOver={handleOver}>Extra</button>
            </nav>
            <button className='sidemenu-btn'><GiHamburgerMenu /></button>
            <Submenu />
        </div>
    )
}

export default Navbar
