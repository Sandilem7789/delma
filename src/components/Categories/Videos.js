import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

const Videos = () => {
    return (
        <div className="video-paper">
            <FontAwesomeIcon icon={faVideo} className="icon" size="3x"/>
            <h4>Videos</h4>
        </div>
    )
}

export default Videos;
