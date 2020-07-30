import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Resume from './Resume'
import Contact from './Contact'
import About from './About'

export default function StaticLayout(props) {
    return(
        <div>
            <h1> This is the static layout</h1>
            <Route path= "/resume" component={Resume} />
            <Route path= "/about" component={About} />
            <Route path= "/contact" component={Contact} />
        </div>
    )
}