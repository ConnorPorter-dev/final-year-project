import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import M from 'materialize-css'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [meta, setMeta] = useState({})

    useEffect(() => {
        getMeta();
    }, []);

    const getMeta = () => {
        fetch(`/api/getMeta`)
            .then(res => res.json())
            .then(topics => setMeta(topics))
            .then(x => setLoading(false))
    }
    if (!loading) {
        return (<div className="App container">
        <div className="card-panel teal z-depth-5 ">

            <h1 className="text-white">Code Port</h1>
        </div>

        <div className="row">
            {
                meta.map(item => {
                    return (<div className="col s12 m6">
                        <div className="card teal lighten-2 z-depth-3">
                            <div className="card-content white-text">
                                <span className="card-title">{item.name}</span>
                                <p>{item.description}</p>
                            </div>
                            <div className="card-action">
                                <a href={`/topic/${item.id}`}>Go to page</a>
                            </div>
                        </div>
                    </div>)
                })
            }
            {/* <div className="col s12 m6">
        <div className="card blue-grey darken-1 z-depth-3">
          <div className="card-content white-text">
            <span className="card-title">First Steps!</span>
            <p>Click the link below to start your Java Journey</p>
          </div>
          <div className="card-action">
            <a href="#">Start your voyage</a>
          </div>
        </div>
      </div> */}
        </div>

    </div>)
    } else{
        return <h1>Loading...</h1>
    }
    
}

export default Home;
