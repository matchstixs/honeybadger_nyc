import React, { Component } from 'react';
import ArticleList from './article/Article_list'

class App extends Component {
  // const App = ({}) => {}
  //  return(

  // )
  
  render() {
    return (
      <div className="App">
        <h1>TODAYS HACKER NEWS</h1>
        < ArticleList        />
      </div>
    );
  }
}

export default App;
