import React from 'react'

const Button = ({button, click}) => {
    return (
        <div className={`Button-div ${button}`}>
            <button className='Button'>{click}</button>
        </div>
    )
}

export default Button
