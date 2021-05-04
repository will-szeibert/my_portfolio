import React from 'react'
import Reel from './Reel'
import './homeStyle.css'
import MainExplainer from './MainExplainer'
import Social from '../extras/Social'
import SecondMain from './SecondMain'
const Home = () => {
    const social = 'sticky-social'
    return (
        <div className='home-container'>
            <div className='home-hero'>
                <MainExplainer />
                <Reel />
            </div>
            <SecondMain />
            <Social compliment={social} />
        </div>
    )
}

export default Home
