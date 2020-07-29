import React from 'react'

export default function ProjectPreview(props) {

    const project = props.project

    return(
        <div className="row" style={{backgroundImage: `url('${project.thumbnail_url}')`}}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    )
}