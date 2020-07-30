import React, { useState, useEffect } from 'react';
import ProjectPreview from '../project/Preview';
import { Route, NavLink, useParams } from 'react-router-dom'

const API_URL = "http://localhost:3000"

export default function Tags(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        console.log(`${API_URL}/tags`)
        fetch(`${API_URL}/tags`)
        .then(response => response.json())
        .then(
            (result) => {
              setIsLoaded(true);
              setTags(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <div className="tag-list">
                    {tags.map(tag =>
                        <NavLink
                            to={`/projects/tags/${tag.id}`}
                            className="tag"
                            activeClassName="active"
                            key={tag.id}
                        >
                            {`#${tag.name}`}
                        </NavLink>
                    )}
                </div>
                <div className="row main-content-list">
                    <Route path="/projects/tags/:id" component={Tag} />
                </div>
            </div>
        );
    }    
}

function Tag(props){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tag, setTag] = useState({});

    let { id } = useParams();

    useEffect(() => {
        console.log(`${API_URL}/tags/${id}`)
        fetch(`${API_URL}/tags/${id}`)
        .then(response => response.json())
        .then(
            (result) => {
                setTag(result);
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
        return (
            tag.project_previews.map(project =>
                <div className="col-6" key={project.id}>
                    <ProjectPreview project={project} key={project.id}/>
                </div>
            )
        );
    }
}