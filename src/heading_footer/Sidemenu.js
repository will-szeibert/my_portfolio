import React from 'react'
import {useGlobalContext} from './headingContext'
const Sidemenu = () => {
    const {isSidemenuOpen, closeSidemenu} = useGlobalContext()
    return (
        <div className={`${isSidemenuOpen ? 'sidemenu-container show' : 'sidemenu-container'}`}>
            <button onClick={closeSidemenu} className='sidemenu-close'>X</button>
        </div>
    )
}

export default Sidemenu
