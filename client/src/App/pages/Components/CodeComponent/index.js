import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeComponent.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// CodeComponent will display the code on the page along with the option to show an analysis of each line of code, selected by a drop down menu
const CodeComponent = (props) => {
    const [selectedLine, setLine] = useState(null) // Selected line is currently displayed analysed line

    const LineClicked = () => {
        return (
            <div className="link-box">
                {
                    (selectedLine != null)
                        ? <div className="row">
                            <div className="col s12 m6">
                                <div className="card blue-grey darken-1 z-depth-3">
                                    <div className="card-content white-text">
                                        <span className="card-title">📈Smart Analysis📈</span>
                                        <p>Line {selectedLine.linenumber +1}</p>
                                    </div>
                                    <div className="card-action">
                                        <div>                                        
                                            {selectedLine.links.map(topic => <Link key={topic.id} to={`/topic/${topic.id}`}><button className="topic-button">{topic.name}</button></Link>)}
                                        </div>
                                        <button className="close-button" onClick={e => setLine(null)}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <></>
                }
            </div>

        )
    }


    return (
        <div className="code-component">
            <p className="sa-info">ℹ️ Click on a line number for Smart Analysis!</p>
            <LineClicked />
            <div className="row">
                <div className="col s1 link-container">
                    <ul>
                        {
                            props.content.lines.map(line =>
                                <li className="line-link right-align" key={line.linenumber} value={line.linenumber} onClick={e => setLine(props.content.lines.find(line => e.target.getAttribute("value") == line.linenumber))}>
                                    ❔{line.linenumber + 1}
                                </li>
                            )

                        }
                    </ul>
                </div>
                <div className="code-box col s11">
                    <SyntaxHighlighter language="java" style={dracula} showLineNumbers={false} wrapLongLines={false}>
                        {props.content.data}
                    </SyntaxHighlighter>
                </div>
            </div>

        </div>

    )
}

export default CodeComponent