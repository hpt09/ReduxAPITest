import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AlbumList from './AlbumList';
import Display from './Display';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Route exact path = "/" component = {AlbumList} />
    <Route path = "/display/:topic" component = {Display} />
</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
