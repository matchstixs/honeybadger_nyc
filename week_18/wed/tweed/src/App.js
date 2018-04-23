import React, { Component } from 'react';
import NewTweed from './tweed/NewTweed';
import TweedView from './tweed/TweedView';

class App extends Component {


  
  componentWillMount() {    
    // - Will get all the tweeds
    // - Will handle deleting tweeds
    // - Will handle new tweeds
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Tweed</h1>
        </header>
        < NewTweed />
        {/* - Should render the NewTweed component*/}
        < TweedView />
        {/* - Should render all the tweeds */} 
      </div>
    );
  };
}

export default App;
