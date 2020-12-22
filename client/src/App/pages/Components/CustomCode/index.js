import React, { useState, useEffect } from 'react';
import './CustomCode.css'
const CustomCode = (props) => {
    const [techLinks, setTechLinks] = useState([])

    return (
        <div>
            <div className="techBox">
                {/* {techLinks.map(link =>  )} */}
            </div>
            { props.lines.map(line => <p className="line">{line}</p>)}
        </div>
    )
}
// Need to have an onclick on every line
// Could do this with a new component- pass onclick info to this for every line

// const codeLine = (props) => {
//     const clicked = () => {
//         // When clicked, state should change in customCode to display links to line analysis
//         // Or - Change input on invisible box using CSS
//         // Eg- Edit text by CSS ID and then make it visible
//         props.changeAnalysis(props.line.refs) // Refs should be an array of objects with name and references
//     }
//     return (
//         <p className="line">{props.line.text}</p>)
//     )
// }

export default CustomCode