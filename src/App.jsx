// React and router boilerplate
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// styling things
//import logo from './logo.svg';
import './App.css';

// Main Layouts
import NavBar from './NavBar'
import ListLayout from './lists/Layout'
import StaticLayout from './static/Layout'

// List components

// Static components
import Project from './project/Project'

class App extends React.Component {

  render(){
    return(
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
              <Route path= "/projects" component={ListLayout} />
              <Route path= "/resume" component={StaticLayout} />
              <Route path= "/about" component={StaticLayout} />
              <Route path= "/contact" component={StaticLayout} />
              <Route path= "/">
                <Redirect to="/projects/experiences" />
              </Route>
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
