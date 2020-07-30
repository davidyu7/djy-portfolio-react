import React from 'react'
import { Route, useHistory } from 'react-router-dom'

import Resume from './Resume'
import Contact from './Contact'
import About from './About'

import Project from '../project/Project'

import './Layout.css'

export default function StaticLayout(props) {

    const history = useHistory()

    return(
        <div className="px-0 mx-0">
            <div className="px-0 mx-0 static-nav">
                <a onClick={()=>history.goBack()} href="#">
                    <svg width="3em" height="2em" viewBox="4 0 16 16" className="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fillRule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
                        <path fillRule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
                    </svg>
                    Back
                </a>
            </div>
            <Route path= "/resume" component={Resume} />
            <Route path= "/about" component={About} />
            <Route path= "/contact" component={Contact} />
            <Route path= "/project/:id" component={Project} />
        </div>
    )
}