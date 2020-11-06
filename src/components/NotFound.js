import React from 'react';

import ReactBodyMovin from 'react-bodymovin';
import NotFoundAnimation from '../404.json'

const NotFound = (props) => {
    const bodyMovingOptions = {
        loop:true,
        autoplay:true,
        prerender:true,
        animationData: NotFoundAnimation
    }

    return(
        <div>
            <ReactBodyMovin options={bodyMovingOptions}/>
        </div>
    )
}

export default NotFound;