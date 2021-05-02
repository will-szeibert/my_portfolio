import React, {useState, useContext} from 'react'
import {submenuLinks} from '../data'
import Submenu from './Submenu'

const AppContext = React.createContext()
export const AppProvider = ({children})=>{
    // for opening the Submenu, on hovering over navbar
    const [isOpenSubmenu, setOpenSubmenu] = useState(false)
    const [links, setLinks] = useState({main:'', links:[]})
    const [location, setLocation] = useState({top:0,left:0})

    const openSubmenu = (mai, {top,left})=>{
        const correctLink = submenuLinks.find((main)=>main.main === mai)
        setLinks(correctLink)
        setLocation({top:top, left:left})
        setOpenSubmenu(true)
        
    }
    const closeSubmenu = ()=>{
        setOpenSubmenu(false)
    }

    //for opening and managing sidemenu, when click on burgermenu
    const [isSidemenuOpen, setOpenSidemenu] = useState(false)

    const openSidemenu = ()=>{
        setOpenSidemenu(true)
    }
    const closeSidemenu = ()=>{
        setOpenSidemenu(false)
    }

    return(
        <AppContext.Provider value={{
            isOpenSubmenu, openSubmenu, closeSubmenu, links, location, isSidemenuOpen, openSidemenu, closeSidemenu,
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}