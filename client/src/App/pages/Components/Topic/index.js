import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CodeComponent from '../CodeComponent';
import { MDBJumbotron, MDBContainer } from 'mdbreact';
import Video from '../Video'
import './Topic.css'

// Component to display a topic information on the page based on the url
// Requires a call to server to obtain the topic
function Topic({ match }) {

    const [loading, setLoading] = useState(true)
    const [topic, setTopic] = useState({})

    useEffect(() => {
        getTopic();
    }, []);

    const getTopic = () => {
        fetch(`/api/topic/${match.params.topicID}`)
            .then(res => res.json())
            .then(topic => setTopic(topic))
            .then(x => setLoading(false))
    }
    // Will load the page depending on the array data types. This will allow for more flexibility within the pages
    // This also allows for future expandability for new data types
    if (!loading) {
        return (<div className="outer-container">
            <div className="inner-container">
                <div className="topic-title-container">
                    <h1 id="topic-title">{topic.name}</h1>
                </div>
                <h1 id="topic-title">{topic.name}</h1>

                {topic.content.map(content => {
                    switch (content.type) {
                        case "code":
                            return <CodeComponent content={content} />
                        case "video":
                            return <Video content={content} />
                        case "html": // PLACEHOLDER FOR HTML
                            return <p>{content.data}</p>
                        default:
                            return <p>Error reading content type: {content.type}</p>
                    }
                })}
                <p><Link to={`/topic/${topic.next}`}>Next Topic</Link></p>
            </div>

        </div>)

    } else {
        // Shows loading while page is still obtaining server data
        // TODO: ADD 404 PAGE
        return <h1>Loading...</h1>
    }

}

export default Topic
