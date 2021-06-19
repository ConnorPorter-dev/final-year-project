import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gfm from 'remark-gfm' 
import CodeComponent from '../CodeComponent';
import ReactMarkdown from 'react-markdown'
import Video from '../Video/NewVideo'
import './Topic.css'
import Icon from '../../../../Assets/Icons/008-compass.svg'
import Icon2 from '../../../../Assets/Icons/017-map.svg'
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
                {/* <div className="topic-title-container">
                    <h1 id="topic-title">{topic.name}</h1>
                </div> */}
                {/* <br/> */}
                <h1 id="topic-title"><img className="title-image"src={Icon}></img>{topic.name}</h1>
                <div className="content">
                    {topic.content.map(content => {
                        switch (content.type) {
                            case "code":
                                return <CodeComponent content={content} />
                            case "video":
                                return <Video content={content} />
                            case "markdown": // Markdown Content
                                return <ReactMarkdown plugins={[gfm]}>{content.data}</ReactMarkdown>
                            default:
                                return <p>Error reading content type: {content.type}</p>
                        }
                    })}
                </div>

                <p><Link to={`/topic/${topic.next}`}><img className="title-image"src={Icon2}></img>Next Topic</Link></p>
            </div>

        </div>)

    } else {
        // Shows loading while page is still obtaining server data
        // TODO: ADD 404 PAGE
        return <h1>Loading...</h1>
    }

}

export default Topic
