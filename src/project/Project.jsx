import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import './Project.css';

const API_URL = "http://localhost:3000"

export default function Project(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [project, setProject] = useState({});

    let { id } = useParams()

    useEffect(() => {
        console.log(`${API_URL}/projects/${id}`)
        fetch(`${API_URL}/projects/${id}`)
        .then(response => response.json())
        .then(
            (result) => {
                setProject(result);
              setIsLoaded(true);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
        )
    }, [id])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        console.log(project)
        return (
            <div>
                <div className=""></div>
                <div className="container-flex project-banner" style={{backgroundImage: `url('${project.thumbnail_url}')`}}>
                    <div className="project-title-box">
                        <h1 className="project-title">{project.title}</h1>
                    </div>
                </div>
                <h3>Description:</h3>
                <p>{project.description}</p>
                <h3>Tagged:</h3>
                <div className="tag-list">
                    {project.tags.map(tag =>
                        <Link to={`/projects/tags/${tag.id}`} className="tag" key={tag.id}>{`#${tag.name}`}</Link>
                    )}
                </div>
            </div>
        )
    }
}