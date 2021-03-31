import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
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
              return (
                  <Link to/> // TODO: ADD PAGE FOR EACH ITEM
              )
            })}
          </div>
        ) : (
          <div>
            <h2>No Data Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default Pagination;