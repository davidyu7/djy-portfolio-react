import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Folders from './Folders'
import Categories from './Categories'
import Tags from './Tags'

import './Layout.css'

import ProfilePic from './profile.JPG'

export default function ListLayout(props) {
    return (
        <div>
            <div className="row" id="intro-header">
                <div className="col-3" id="intro-header-headshot">
                    <img id="headshot" src={ProfilePic}></img>
                </div>
                <div className="col-9" id="intro-header-text">
                    <h1 className="big-hello">Hello!</h1>
                    <br/>
                    <h2>My name is David Yu.</h2>
                    <p>But you can call me Dave. I'm a Junior at Yale in the Computing and the Arts joint program, studying Architecture and Computer Science.</p>
                </div>
            </div>

            <br/>

            <div>
                <h2>Browse my work by...</h2>
                <div className="nav-3">
                    <NavLink to="/projects/experiences" className="nav-3-item" activeClassName="active">Experience</NavLink>
                    <NavLink to="/projects/categories" className="nav-3-item" activeClassName="active">Category</NavLink>
                    <NavLink to="/projects/tags" className="nav-3-item" activeClassName="active">Tags</NavLink>
                </div>
            </div>

            <Switch>
                <Route path="/projects/experiences" component={Folders} />
                <Route path="/projects/categories" component={Categories} />
                <Route path="/projects/tags" component={Tags}/>
            </Switch>

        </div>
    )
}