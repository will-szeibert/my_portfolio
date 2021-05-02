import React, {useEffect, useRef} from 'react'
import {useGlobalContext} from './headingContext'
import {Link} from 'react-router-dom'
const Submenu = () => {
    const {links:{links}, location:{top, left}, isOpenSubmenu} = useGlobalContext()
    const container = useRef(null)

    useEffect(()=>{
        let cont = container.current.style
        cont.top = `${top}px`;
        cont.left = `${left}px`;
        
    },[left]) 


    return (
        <div className={`${isOpenSubmenu ? 'submenu-container show' : 'submenu-container'}`} ref={container}>
            {links.map((link, index)=>{
                const {label, url} = link
                return(
                        <Link className='submenu-cont' to={url} key={index}>
                            <div className='submenu-link'>{label}</div>
                        </Link>
                )
            })}
        </div>
    )
}

export default Submenu
