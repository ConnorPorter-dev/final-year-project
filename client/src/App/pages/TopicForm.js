import React from 'react';
import Helmet from "react-helmet"

// Probably the worst code ever made. Please refactor
const TopicForm = () => {

    const contentHandler = () => {
        let content = []
        for (let index = 1; index <= 6; index++) {
            if (document.getElementById(`type${index}`).value.length > 0) {
                content.push({
                    type: document.getElementById(`type${index}`).value,
                    data: document.getElementById(`value${index}`).value
                })
            }

        }
        return content
    }

    const getData = () => {
        const content = contentHandler()
        const dataBody = {
            name: document.getElementById("name").value,
            regex: document.getElementById("regex").value,
            next: document.getElementById("next").value,
            content: content

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
            <Helmet>
                <script src="https://accounts.google.com/gsi/client"></script>

            </Helmet>



            <h1>Topic Form WIP</h1>
            <div id="g_id_onload"
                data-client_id="88698105674-ee9eec2p78vii14p88ubfg1273p03509.apps.googleusercontent.com">
                {/* data-login_uri="https://localhost:5000"> */}
            </div>
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