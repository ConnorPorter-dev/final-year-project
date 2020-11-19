import React, { Component } from 'react';

class Test extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getData();
  }

  // Retrieves the list of items from the Express app
  getData = () => {
    fetch('/api/getData')
    .then(res => res.json())
    .then(data => this.setState({ data }))
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <h1>Test Page</h1>
        {/* Check to see if any items are found*/}
        {data.length ? (
          <div>
            {/* Render the list of items */}
            {data.map((item) => {
              return(
                <div>
                    <h1>{item.name}</h1>
                    {item.description}
                    <div>
                        {item.video.embed 
                            ? <iframe src={item.video.link}></iframe>
                            : <a href={item.video.link}>Youtube Link</a>
                        }
                    </div>
                    <p>Dependencies: 
                        {
                            data.filter((node) => item.dependencies.includes(node.id)).map(x => <div>{x.name}</div>)
                        }
                        </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default Test;