import React from 'react'
import Reel from './Reel'
import './homeStyle.css'
import MainExplainer from './MainExplainer'
const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-hero'>
                <MainExplainer />
                <Reel />
            </div>
            
        </div>
    )
}

export default Home
