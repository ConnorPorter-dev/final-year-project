import React, { useState, useEffect } from 'react';
import './CustomCode.css'
const CustomCode = (props) => {

    return (
        <div>
            { props.lines.map(line => <p className="line">{line}</p>) }
        </div>
    )
}
// Need to have an onclick on every line
// Could do this with a new component- pass onclick info to this for every line


export default CustomCode