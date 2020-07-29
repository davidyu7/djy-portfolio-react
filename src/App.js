// React and router boilerplate
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// styling things
import logo from './logo.svg';
import './App.css';

// List components
import ListLayout from './lists/Layout'
import Folders from './lists/Folders'
import Categories from './lists/Categories'
import Tags from './lists/Tags'

// Static components
import StaticLayout from './static/Layout'
import Project from './project/Project'
import Resume from './static/Resume'
import Contact from './static/Contact'

class App extends React.Component {

  render(){
    return(
      <Router history={browserHistory}>

        <Route component={ListLayout}>
          <Route path="/" component={Folders} />
          <Route path="experiences" component={Folders} />
          <Route path="categories" component={Categories} />
          <Route path="skills" component={Tags} />
        </Route>

        <Route component={StaticLayout}>
          <Route path="projects/:id" component={Project} />
          <Route path="resume" component={Resume} />
          <Route path="contact" component={Contact} />
        </Route>

      </Router>

    )
  }
}

export default App;
