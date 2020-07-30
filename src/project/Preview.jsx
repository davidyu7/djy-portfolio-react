import React from 'react'
import { Link } from 'react-router-dom'

import './Preview.css'

export default function ProjectPreview(props) {

    const project = props.project

    return(
        <Link to={`/project/${project.id}`}>
            <div className="row preview-container" style={{backgroundImage: `url('${project.thumbnail_url}')`}}>
                <div className="preview-overlay"></div>
                <div className="container-fluid on-top">
                    <div className="preview-title">{project.title}</div>
                </div>
                <div className="col-10 on-top">
                    <p className="preview-description">{project.description}</p>
                </div>
            </div>
        </Link>
    )

}