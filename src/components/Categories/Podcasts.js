import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Podcasts = () => {
    return (
        <div className="podcast-paper">
           <FontAwesomeIcon icon={faMusic} className="icon" size="3x"/>
           <h4>Podcasts</h4>
        </div>
    )
}

export default Podcasts
