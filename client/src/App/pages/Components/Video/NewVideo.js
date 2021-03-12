import React from 'react';
import './Video.css'

const Video = (props) => {
    return (
        <div className="mediaContainer" dangerouslySetInnerHTML={{__html: props.content.fullembed}}>
            {/* {props.content.fullembed} */}
        </div>
    )
}

export default Video