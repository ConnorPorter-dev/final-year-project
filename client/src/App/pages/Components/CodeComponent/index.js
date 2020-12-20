import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// CodeComponent will display the code on the page along with the option to show an analysis of each line of code, selected by a drop down menu
const CodeComponent = (props) => {
    const [selectedLine, setLine] = useState(null) // Selected line is currently displayed analysed line

    return (
        <div>
            <SyntaxHighlighter language="java" style={dracula} showLineNumbers={true} wrapLongLines={true}>
                {props.content.fullcode}
            </SyntaxHighlighter>
            <select onChange={e => setLine(props.content.lines.find(line => e.target.value == line.linenumber))}>
                <option value={null} selected></option>
                {props.content.lines.map(line => <option key={line.linenumber} value={line.linenumber}>Line {line.linenumber}</option>)}
            </select>
            {
                (selectedLine != null) 
                ? selectedLine.links.map(topic => <Link to={`/topic/${topic.id}`}>{topic.name}</Link>)
                : <></>
            }
        </div>

    )
}

export default CodeComponent