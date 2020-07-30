import React, { useState, useEffect } from 'react';
import { Modal } from 'reactstrap';
import { useHistory } from 'react-router-dom'

const API_URL = "http://localhost:3000"

export default function ProjectForm(props) {

    const project = props.project

    const history = useHistory()

    const [categories, setCategories] = useState([]);
    const [folders, setFolders] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch(`${API_URL}/categories`).then(response => response.json()),
            fetch(`${API_URL}/folders`).then(response => response.json()),
            fetch(`${API_URL}/tags`).then(response => response.json())
        ]).then(([categories, folders, tags]) => {
            setCategories(categories);
            setFolders(folders);
            setTags(tags);
        })
    }, [])

    function handleProject(event){
        event.preventDefault()

        const updatedProject = {
            title: event.target[0].value,
            category_id: event.target[1].value,
            folder_id: event.target[2].value,
            description: event.target[3].value,
            thumbnail_url: event.target[4].value,
            banner_url: event.target[5].value,
            github_url: event.target[6].value
        }
        fetch(`${API_URL}/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedProject)
        })
        .then(props.setProject({...project, ...updatedProject}))
        .then(() => history.goBack())

    }

    return(
        <Modal className="project-form-modal" isOpen={true}>
            <h1>Edit Project</h1>
            <form id="project-form" onSubmit={handleProject}>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputTitle">Project Title:</label>
                        <input type="text" className="form-control" id="inputTitle" aria-label="Title" defaultValue={project.title}></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="chooseCategory">Category:</label>
                        <select id="inputCategory" className="form-control">
                            {categories.map((category) => <option key={category.id} value={category.id} selected={category.id === project.category.id}>{category.name}</option>)}
                        </select>                        
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="chooseFolder">Folder:</label>
                        <select id="inputFolder" className="form-control">
                            {folders.map((folder) => <option key={folder.id} value={folder.id} selected={folder.id === project.folder.id}>{folder.name}</option>)}
                        </select>                        
                    </div>
                    
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputDescription">Project Description:</label>
                        <textarea className="form-control" id="inputDescription" aria-label="Description" rows="10" defaultValue={project.description}></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputThumbnail">Thumbnail Image Url:</label>
                        <input type="text" className="form-control" id="inputThumbnail" defaultValue={project.thumbnail_url}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputBanner">Banner Image Url:</label>
                        <input type="text" className="form-control" id="inputBanner" defaultValue={project.banner_url}></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputGithub">Github Link</label>
                        <input type="text" className="form-control" id="inputGithub" defaultValue={project.github_url}></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <button type="submit" className="form-control form-button w-100">Submit</button>
                    </div>
                </div>
            </form>
        </Modal>
    )

}