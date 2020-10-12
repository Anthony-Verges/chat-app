import React from 'react';

const Avatar = ({image, name, isConnect})=> (
    <div className='Contact'>
        <img className='avatar' src = {image} />
        
        <div className="status">
        <h4 className='name'>{name}</h4>
            <p className='status'>{isConnect ? "onLine" : "offLine"}</p>
            <p className="status-online"></p>
        </div>
    </div>
)

export default Avatar;
