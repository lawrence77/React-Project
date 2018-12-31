import React, { Component } from 'react';
import world from './world.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={world} className="App-logo" alt="logo" />
          <h1>
            Hello World!
          </h1>
          <br />
          <p>
            This is a sample website using React. To learn React, click
            <a className="App-link" href="https://reactjs.org"> here.</a>
          </p>

          <div>
            <p className="small-text">
            Icons made by &nbsp;
              <a className="App-link" href="https://www.flaticon.com/authors/prettycons" title="prettycons">prettycons</a>
            &nbsp; from &nbsp;
              <a className="App-link" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            &nbsp; is licensed by &nbsp;
              <a className="App-link" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY </a>
            </p>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
