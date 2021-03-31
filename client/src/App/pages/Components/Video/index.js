import React from 'react';
import './Video.css'

const Video = (props) => {
    return (
        <div className="mediaContainer">
            {props.content.embed
                ? <iframe src={props.link} width="560" height="315"></iframe>
                : <a href={props.content.link}>{props.content.buttontext}</a>
            }
        </div>
    )
}

export default Video