// import React from 'react';
import Helmet from "react-helmet"
import React, { useState } from 'react';
import './TopicForm.css'

// Probably the worst code ever made. Please refactor
const TopicForm = () => {
    const [contentCount, setCount] = useState(0)
    const [contentAdded, setAdded] = useState(false)
    const [content, setContent] = useState([])

    const Code = (count) => {
        return (
            <div key={count.count} id={`content${count.count}`} className="contentform">
                <h3 id={`type${count.count}`}>Code Component</h3>
                <textarea id={`data${count.count}`}></textarea>
            </div>
        )
    }

    const Video = (count) => {
        return (
            <div key={count.count} id={`content${count.count}`} className="contentform">
                <h3 id={`type${count.count}`}>Video</h3>
                <p>Link<input id={`link${count.count}`}></input></p>
                <p>Embed?(true or false)<input id={`embed${count.count}`}></input></p>
                <p>Button Text (If not embed)<input id={`buttontext${count.count}`}></input></p>
            </div>
        )
    }

    const Markdown = (count) => {
        return (
            <div key={count.count} id={`content${count.count}`} className="contentform">
                <h3 id={`type${count.count}`}>Markdown</h3>
                <textarea id={`data${count.count}`}></textarea>
            </div>
        )
    }

    const contentHandler = () => {
        let formContent = []
        for (let index = 0; index <= contentCount; index++) {
            if (document.getElementById(`content${index}`) != null) {
                console.log(`Here: type${index} ${document.getElementById(`type${index}`).innerHTML}`);
                switch (document.getElementById(`type${index}`).innerHTML) {
                    case 'Code Component':
                        formContent.push({
                            type: "code",
                            data: document.getElementById(`data${index}`).value
                        })
                        break;
                    case 'Markdown':
                        formContent.push({
                            type: "markdown",
                            data: document.getElementById(`data${index}`).value
                        })
                        break;
                    case 'Video':
                        formContent.push({
                            type: "video",
                            link: document.getElementById(`link${index}`).value,
                            embed: (document.getElementById(`embed${index}`).value == 'true'),
                            buttontext: document.getElementById(`buttontext${index}`).value
                        })
                        break;
                    default:
                        break;
                }
            }
            console.log(formContent);


        }
        return formContent
    }

    const getData = () => {
        const formContent = contentHandler()
        const dataBody = {
            name: document.getElementById("name").value,
            regex: document.getElementById("regex").value,
            next: document.getElementById("next").value,
            content: formContent

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
    const addCode = () => {
        let newContent = [...content]
        newContent.push({ name: 'code', pos: contentCount })
        setCount(contentCount + 1)
        setContent(newContent)
    }
    const addMarkdown = () => {
        let newContent = [...content]
        newContent.push({ name: 'markdown', pos: contentCount })
        setCount(contentCount + 1)
        setContent(newContent)
    }
    const addVideo = () => {
        let newContent = [...content]
        newContent.push({ name: 'video', pos: contentCount })
        setCount(contentCount + 1)
        setContent(newContent)
    }
    return (
        <div>
            <Helmet>
                <script src="https://accounts.google.com/gsi/client"></script>
            </Helmet>
            <h1>Topic Form WIP</h1>
            <div id="g_id_onload"
                data-client_id="88698105674-ee9eec2p78vii14p88ubfg1273p03509.apps.googleusercontent.com">
                {/* data-login_uri="https://localhost:5000"> */}
            </div>
            <p>Name<input id="name"></input></p>
            <p>Regex<input id="regex"></input></p>
            <p>Next<input id="next"></input></p>
            <button onClick={addCode}>Add Code</button>
            <button onClick={addVideo}>Add Video</button>
            <button onClick={addMarkdown}>Add Markdown</button>
            <div className="contentformcontainer">
                {content.map(item => {
                    console.log(item.pos.toString());
                    if (item.name == "code") {
                        return <div key={item.pos.toString()}><Code count={item.pos} /></div>
                    } else if (item.name == "video") {
                        return <div key={item.pos.toString()}><Video count={item.pos} /></div>
                    } else if (item.name == "markdown") {
                        return <div key={item.pos.toString()}><Markdown count={item.pos} /></div>
                    }

                }
                )}
            </div>
            <button onClick={getData}> Submit Topic </button>
        </div>
    )

}

export default TopicForm;