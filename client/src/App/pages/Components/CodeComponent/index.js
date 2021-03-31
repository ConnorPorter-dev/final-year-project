import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeComponent.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// CodeComponent will display the code on the page along with the option to show an analysis of each line of code, selected by a drop down menu
const CodeComponent = (props) => {
    const [selectedLine, setLine] = useState(null) // Selected line is currently displayed analysed line

    return (
        <div className="code-component">
            <SyntaxHighlighter language="java" style={dracula} showLineNumbers={true} wrapLongLines={true}>
                {props.content.data}
            </SyntaxHighlighter>
            <div className="analysis-container">
                <h2 className="analysis-title">Line Analysis</h2>
                <select onChange={e => setLine(props.content.lines.find(line => e.target.value == line.linenumber))}>
                    <option value={null} selected></option>
                    {props.content.lines.map(line => <option key={line.linenumber} value={line.linenumber}>Line {line.linenumber + 1}</option>)}
                </select>
                {/* {
                (selectedLine != null) 
                ? selectedLine.links.map(topic => <Link to={`/topic/${topic.id}`}>{topic.name}</Link>)
                : <></>
            } */}
                <div>
                    {
                        (selectedLine != null)
                            ? selectedLine.links.map(topic => <Link key={topic.id} to={`/topic/${topic.id}`}><button className="topic-button">{topic.name}</button></Link>)
                            : <></>
                    }
                </div>

            </div>
        </div>

    )
}

export default CodeComponent