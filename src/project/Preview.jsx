import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectPreview(props) {

    const project = props.project

    return(
        <Link to={`/projects/${project.id}`}>
            <div className="row" style={{backgroundImage: `url('${project.thumbnail_url}')`}}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </Link>
    )

}