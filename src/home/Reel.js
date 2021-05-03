import React, {useState, useEffect} from 'react'
import {ReelItems} from '../data'
import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from 'react-icons/io'
const Reel = () => {
    const [reelId, setReelId] = useState(1);
    if(reelId > ReelItems.length){
        setReelId(1)
    }
    if(reelId < 1){
        setReelId(ReelItems.length)
        
    }

    // useEffect(()=>{
    //    const slider = setInterval(()=>{
    //        setReelId(reelId - 1)
    //    },10000)
    //    return()=>clearInterval(slider)
    // })

    return (
        <div className='reel-container'>
           
            {ReelItems.map((item)=>{
                const {id, descriptionTitle, image, description} = item;
                
                let reelPosition = 'reel-prev';
                if(reelId === id){
                    reelPosition = 'reel-active'
                }
                if(reelId < id || (reelId === ReelItems.length && id === 1)){
                    reelPosition = 'reel-next'
                }
                if(reelId === 1 && id === ReelItems.length){
                    reelPosition = 'reel-prev'
                }
                return(
                    <div className={`reel-item ${reelPosition}`} key={id}>
                        <div className='reel-description'>
                            <h3>{descriptionTitle}</h3>
                            <p>{description}</p>
                        </div>
                        <div className='reel-img-container'>
                            <img src={image} />
                            <button className='reel-btn' onClick={()=>setReelId(reelId - 1)}><IoMdArrowDropleftCircle /></button>
                            <button className='reel-btn reel-btn-right' onClick={()=>setReelId(reelId + 1)}><IoMdArrowDroprightCircle /></button>
                        </div>
                        
                    </div>
                )
            })}
            
        </div>
    )
}

export default Reel