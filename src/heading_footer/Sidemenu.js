import React from 'react'
import {useGlobalContext} from './headingContext'
import {submenuLinks} from '../data'
import {Link} from 'react-router-dom'

const Sidemenu = () => {
    const {isSidemenuOpen, closeSidemenu} = useGlobalContext()

    if(isSidemenuOpen){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'visible'
    }
    
    return (
        <div className={`${isSidemenuOpen ? 'sidemenu-container show' : 'sidemenu-container'}`}>
            <button onClick={closeSidemenu} className='sidemenu-close'>X</button>
            <div className='sidemenu-nav'>
                {submenuLinks.map((items, index)=>{
                    const {main, links} = items;
                    return(
                        <div className='sidemenu-ind' key={index}>
                            {main}
                            {links.map((item, index)=>{
                                const {url, label} = item;
                                return(
                                    <Link onClick={closeSidemenu} className='submenu-cont' to={url} key={index}>
                                        <div className='sidemenu-submenu'>{label}</div>
                                    </Link>
                                )
                            })}
                        </div>
                    )
                })}
                
            </div>
           
        </div>
    )
}

export default Sidemenu
