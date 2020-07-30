import React from 'react';
import { Modal } from 'reactstrap';
import { useHistory } from 'react-router-dom'

const API_URL = "http://localhost:3000"

export default function ImageForm(props) {

    const project = props.project

    const history = useHistory()

    function handleImage(event){
        event.preventDefault()

        const newImage = {
            project_id: project.id,
            src_url: event.target[0].value,
            description: event.target[1].value
        }
        fetch(`${API_URL}/images`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newImage)
        })
        .then(props.setImages([...project.images, newImage]))
        .then(() => history.goBack())

    }

    return(
        <Modal className="project-form-modal" isOpen={true}>
            <h1>Add an image to {project.title}</h1>
            <form id="image-form" onSubmit={handleImage}>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputURL">Image URL:</label>
                        <input type="text" className="form-control" id="inputURL" placeholder="http://example.com/image.jpg"></input>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputDescription">Description:</label>
                        <textarea className="form-control" id="inputDescription" aria-label="Description" rows="5" placeholder="Describe me..."></textarea>
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