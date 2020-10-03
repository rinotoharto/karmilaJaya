import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage, AboutPage, GalleryPage } from './pages'
import Navbar from './component/navigation'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar/>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/gallery" component={GalleryPage}></Route>

        </Switch>
      </Router>
  );
}

export default App;
