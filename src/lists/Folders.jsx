import React, { useState, useEffect } from 'react';
import ProjectPreview from '../project/Preview'

import './Folders.css'

const API_URL = "http://localhost:3000"

export default function Folders(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [folders, setFolders] = useState([]);


    
    useEffect(() => {
        console.log(`${API_URL}/folders`)
        fetch(`${API_URL}/folders`)
        .then(response => response.json())
        .then(
            (result) => {
              setIsLoaded(true);
              setFolders(result);
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
            <div className="main-content-list">
                {folders.map(folder => <FolderContainer folder={folder} key={folder.id}/>)}
            </div>
        );
    }
}

function FolderContainer(props) {

    const folder = props.folder

    return(
        <>
            <div className="row">
                <div className="col">
                    <div className="folder-title">{folder.name}</div>
                    <p>{folder.description}</p>
                </div>
                <div className="col">
                    {folder.project_previews.map(project=> <ProjectPreview project={project} key={project.id}/>)}
                </div>
            </div>
            <hr/>
        </>
    )
}