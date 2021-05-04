import React from 'react'
import Navbar from './Navbar'
import './headingStyle.css'
import { AppProvider } from './headingContext'
import Sidemenu from './Sidemenu'
import Footer from './Footer'

const MainHeading = () => {
    return (
        <div>
            <AppProvider>
                <Navbar />
                <Sidemenu />
                <Footer />
            </AppProvider>
            
        </div>
    )
}

export default MainHeading
