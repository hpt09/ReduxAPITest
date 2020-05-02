import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AlbumList from './AlbumList';
import Display from './Display';
import './App.scss';

class App extends React.Component {
  render(){

    return (
      <Router>
      <Route exact path = "/" component = {AlbumList} />
      <Route path = "/display/:topic" component = {Display} />
  </Router>
    )

  }
  
}

export default App;
