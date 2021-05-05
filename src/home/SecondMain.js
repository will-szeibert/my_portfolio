import React from 'react'
import Button from '../extras/Button'

const SecondMain = () => {
    const button = {button:'second-div-btn', click:'Launch'};

    return (
        <div className='second-main-container'>
            <div className='second-main-description'>
                <h3>The Title man</h3>
                <p>A simple web app built to quickly find jobs in Ireland. Users enter the search term and desired county, and are offered job listings from 3 of the most popular job sites in Ireland</p>
                <h5>A Minor Title</h5>
                <p>A simple web app built to quickly find jobs in Ireland. Users enter the search term and desired county, and are offered job listings from 3 of the most popular job sites in Ireland</p>
            </div>
            <div className='second-main-img'>
                <img src='https://cdn.pixabay.com/photo/2020/04/22/08/06/dolomites-5076492_1280.jpg' />
            </div>
            <Button {...button} />
        </div>
    )
}

export default SecondMain
