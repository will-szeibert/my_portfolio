import React from 'react'
import {useGlobalContext} from './headingContext'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import Submenu from './Submenu'
import Social from '../extras/Social'

const Navbar = () => {
    const social = 'nav-social'
    const {openSubmenu, closeSubmenu, openSidemenu} = useGlobalContext()

    const handleOver = (e)=>{
        let main = e.target.textContent
        let BTN = e.target.getBoundingClientRect()
        let top = BTN.top + 41
        let left = BTN.left
        openSubmenu(main, {top,left}) 
    }
    return (
        <div onMouseLeave={closeSubmenu} className='navbar-container'>
            <div ><Link to='/' className='logo'>LOGO</Link></div>
            <nav>
                <button onMouseOver={handleOver}>Programming</button>
                <button onMouseOver={handleOver}>Geology</button>
                <Link to='/shop'><button onMouseOver={handleOver}>Shop</button></Link>
            </nav>
            <button onClick={openSidemenu} className='sidemenu-btn'><GiHamburgerMenu /></button>
            <Submenu />
            <Social compliment={social} />
        </div>
    )
}

export default Navbar
