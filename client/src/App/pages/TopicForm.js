import React, { Component } from 'react';
import CodeComponent from './Components/CodeComponent';
import CustomCode from './Components/CustomCode';

const TopicForm = () => {
    const getData = () => {
        const content = []
        const dataBody = {
            name: document.getElementById("name").value,
            regex: document.getElementById("regex").value,
            next: document.getElementById("next").value,
            
        }
        fetch('/api/addtopic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataBody),
        })
            .then(res => res.json())
    }
    return (
        <div>
            <h1>Topic Form WIP</h1>
            <p>Static Props: regex=[a-zA-Z]*println[a-zA-Z]* and Topic = Print Line</p>
            <p>Name<input id="name"></input></p>
            <p>regex<input id="regex"></input></p>
            <p>next(Change to dropdown eventually)<input id="next"></input></p>
            <h2>Content TODO: OPTIMISE UI</h2>
            <p>Type<input id="type1"></input></p>
            <textarea id="value1"></textarea>
            <h3>Content Item</h3>
            <p>Type<input id="type2"></input></p>
            <textarea id="value2"></textarea>
            <h3>Content Item</h3>
            <p>Type<input id="type3"></input></p>
            <textarea id="value3"></textarea>
            <h3>Content Item</h3>
            <p>Type<input id="type4"></input></p>
            <textarea id="value4"></textarea>
            <h3>Content Item</h3>
            <p>Type<input id="type5"></input></p>
            <textarea id="value5"></textarea>
            <h3>Content Item</h3>
            <p>Type<input id="type6"></input></p>
            <textarea id="value6"></textarea>
            <button onClick={getData}>BUTTON</button>
        </div>
    )

}

export default TopicForm;