import React from 'react'
import Navbar from './Navbar'
import './headingStyle.css'
import { AppProvider } from './headingContext'

const MainHeading = () => {
    return (
        <div>
            <AppProvider>
                <Navbar />
                
            </AppProvider>
            
        </div>
    )
}

export default MainHeading
