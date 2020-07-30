import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Folders from './Folders'
import Categories from './Categories'
import Tags from './Tags'

export default function ListLayout(props) {
    return (
        <div>
            <div>
                <h1>Hello!</h1>
                <br/>
                <h2>My name is David Yu.</h2>
                <p>But you can call me Dave. I'm a Junior at Yale in the Computing and the Arts joint program, studying Architecture and Computer Science.</p>
            </div>

            <br/>

            <div>
                <h2>Browse my work...</h2>
                <span>
                    <NavLink to="/projects/experiences" activeClassName="active">By experience</NavLink>
                    <NavLink to="/projects/categories" activeClassName="active">By category</NavLink>
                    <NavLink to="/projects/tags" activeClassName="active">By tags</NavLink>
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