import React from 'react'
import {FaGithub, FaInstagramSquare} from 'react-icons/fa'
const instagram = 'https://instagram.com/william_does3d/'
const github = 'https://github.com/will-szeibert'

const Social = ({compliment}) => {
    return (
        <div className={`socials ${compliment}`}>
            <a href={instagram}><FaInstagramSquare /></a>
            <a href={github}><FaGithub /></a>
        </div>
    )
}

export default Social
