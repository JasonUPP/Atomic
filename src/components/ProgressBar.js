import React from 'react'

export const ProgressBar = ({percent, img1, img2, img3, img4}) => {
    return (
        <div>
            <div className="flex">
                <img src = { img1 } alt = "" style={{paddingLeft:`18%`}} />
                <img src = { img2 } alt = "" style={{paddingLeft:`18%`}} />
                <img src = { img3 } alt = "" style={{paddingLeft:`18%`}} />
                <img src = { img4 } alt = "" style={{paddingLeft:`18%`}} />
            </div>
            <div className="progress">            
                <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{"width": `${percent}%`, backgroundColor:'#FA4D09'}} 
                    aria-valuenow={percent} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                >                
                </div>
            </div>
        </div>
    )
}