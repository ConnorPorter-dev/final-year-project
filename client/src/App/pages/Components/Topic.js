import React, { useState } from 'react';
function Topic(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <div>
                {props.video.embed
                    ? <iframe src={props.video.link} width="560" height="315"></iframe>
                    : <a href={props.video.link}>Youtube Link</a>
                }
            </div>
        </div>
    );
}

export default Topic