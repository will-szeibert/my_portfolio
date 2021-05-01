import React, {useEffect, useRef} from 'react'
import {useGlobalContext} from './headingContext'
const Submenu = () => {
    const {links:{links}, location:{top, left}, isOpenSubmenu, closeSubmenu} = useGlobalContext()
    const container = useRef(null)

    useEffect(()=>{
        let cont = container.current.style
        cont.top = `${top}px`;
        cont.left = `${left}px`;
        console.log(cont.left)
    },[left])


    return (
        <div className={`${isOpenSubmenu ? 'submenu-container show' : 'submenu-container'}`} ref={container}>
            {links.map((link, index)=>{
                const {label, url} = link
                return(
                    
                    
                    <div className='submenu-link' key={index} >{label}</div>
                    
                    
                )
            })}
        </div>
    )
}

export default Submenu
