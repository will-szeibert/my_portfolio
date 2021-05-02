import React from 'react'
import Navbar from './Navbar'
import './headingStyle.css'
import { AppProvider } from './headingContext'
import Sidemenu from './Sidemenu'

const MainHeading = () => {
    return (
        <div>
            <AppProvider>
                <Navbar />
                <Sidemenu />
            </AppProvider>
            
        </div>
    )
}

export default MainHeading
