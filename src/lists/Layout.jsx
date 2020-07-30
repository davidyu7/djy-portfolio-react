import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Folders from './Folders'
import Categories from './Categories'
import Tags from './Tags'

import './Layout.css'

export default function ListLayout(props) {
    return (
        <div>
            <div className="row" id="intro-header">
                <div className="col-3" id="intro-header-headshot">
                    <img id="headshot" src="https://newmedia.ufm.edu/wp-content/uploads/2019/11/djm-2.jpg"></img>
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
                <span>
                    <NavLink to="/projects/experiences" className="nav-3" activeClassName="active">experience</NavLink>
                    <NavLink to="/projects/categories" className="nav-3" activeClassName="active">category</NavLink>
                    <NavLink to="/projects/tags" className="nav-3" activeClassName="active">tags</NavLink>
                </span>
            </div>

            <Switch>
                <Route path="/projects/experiences" component={Folders} />
                <Route path="/projects/categories" component={Categories} />
                <Route path="/projects/tags" component={Tags}/>
            </Switch>

        </div>
    )
}