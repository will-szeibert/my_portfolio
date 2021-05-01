import React, {useState, useContext} from 'react'
import {submenuLinks} from '../data'

const AppContext = React.createContext()
export const AppProvider = ({children})=>{
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




    return(
        <AppContext.Provider value={{
            isOpenSubmenu, openSubmenu, closeSubmenu, links, location
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}