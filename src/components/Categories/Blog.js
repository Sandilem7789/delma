import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    return (
        <div className="blog-paper">
            <FontAwesomeIcon icon={faNewspaper} className="icon" size="3x"/>
            <h4>Blog</h4>
        </div>
    )
}

export default Blog
