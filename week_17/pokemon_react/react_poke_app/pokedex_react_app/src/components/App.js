import React, { Component } from 'react';
import PokeIndex from './pokemon/PokeIndex'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">First Generation Pokedex</h1>
        <PokeIndex />
      </div>
    )
  }


}

export default App;
