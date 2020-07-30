import React from 'react'
import { Route, Switch } from 'react-router-dom'



export default function MainLayout(props){
    return(
        <div class=
        <Switch>
            <Route path= "/list" component={ListLayout} />
            <Route path= "/static" component={StaticLayout} />
        </Switch>
        
            <Route path="/" component={Folders} />
            <Route path="/experiences" component={Folders} />
            <Route path="/categories" component={Categories} />
            <Route path="/tags" component={Tags}>

            // </Route>

          /* <Route component={StaticLayout}>
            <Route path="projects/:id" component={Project} />
            <Route path="resume" component={Resume} />
            <Route path="contact" component={Contact} />
          </Route> */
    )
}