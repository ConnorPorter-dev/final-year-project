import React, { useState, useEffect } from 'react';
import './Topic.css'

// Component to display a topic information on the page based on the url
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

    if (!loading) {
        return (
            <div>
                <h1>{topic.name}</h1>
                <p className="topicDescription">{topic.description}</p>
                <div>
                    {topic.video.embed
                        ? <iframe src={topic.video.link} width="560" height="315"></iframe>
                        : <a href={topic.video.link}>Video Link</a>
                    }
                </div>
            </div>
        )
    } else {
        return <h1>Loading...</h1>
    }

}

export default Topic