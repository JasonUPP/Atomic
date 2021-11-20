import React from 'react'

export const ImageRight = ({url = ''}) => {
    return (
        <div>
            <img src= {url} alt='' className="itemTwo" />
        </div>
    )
}
