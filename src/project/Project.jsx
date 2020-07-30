import React, { useState, useEffect } from 'react';
import { Route, Link, useParams } from 'react-router-dom';

import ProjectForm from './ProjectForm'
import ImageForm from './ImageForm'

import './Project.css';

const API_URL = "http://localhost:3000"

export default function Project(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [project, setProject] = useState({});
    const [comments, setComments] = useState([]);
    const [images, setImages] = useState([]);

    let { id } = useParams()

    useEffect(() => {
        console.log(`${API_URL}/projects/${id}`)
        fetch(`${API_URL}/projects/${id}`)
        .then(response => response.json())
        .then(
            (result) => {
                setProject(result);
                console.log(result);
                setComments(result.comments);
                setImages(result.images);
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
            <div>
                <div className="container-flex project-banner" style={{backgroundImage: `url('${project.thumbnail_url}')`}}>
                    <div className="project-title-box">
                        <h1 className="project-title">{project.title}</h1>
                    </div>
                </div>

                <div className="project-details">
                    <h4>{project.description}</h4>

                    <span className="tag-list">
                        <h2 style={{display: 'inline'}}>Tags: </h2>
                        {project.tags.map(tag =>
                            <Link to={`/projects/tags/${tag.id}`} className="tag" key={tag.id}>{`#${tag.name}`}</Link>
                        )}                       
                    </span>
                </div>

                <div className="row main-content-list">
                    {images.map(image => 
                        <Image image={image} key={image.id} />
                    )}
                </div>

                <div className="project-comments-area">
                    <h3>Comments:</h3>

                    <form id="comment-form" onSubmit={handleComment}>
                        <div className="form-row">
                            <div className="form-group col-md 12">
                                <textarea className="form-control" id="commentText" aria-label="Leave a comment" rows="3" placeholder = "Share your thoughts..."></textarea>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <input type="email" className="form-control" id="inputEmail" aria-label="Email Address" placeholder="email@example.com"></input>
                            </div>
                            <div className="form-group col-md-5">
                                <input type="text" className="form-control" id="inputDisplayName" aria-label="Display Name" placeholder="Display Name"></input>
                            </div>
                            <div className="form-group col-md-2">
                                <button type="submit" className="form-control form-button w-100">Submit</button>
                            </div>
                        </div>
                    </form>

                    <div className="comments-list">
                        {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
                    </div>
                </div>

                <Route path={`/project/${project.id}/edit`} render={(props) => <ProjectForm {...props} project={project} setProject={setProject} />} />
                <Route path={`/project/${project.id}/addimage`} render={(props) => <ImageForm {...props} project={project} setImages={setImages} />} />
            </div>
        )
    }

    function handleComment(event) {
        event.preventDefault()

        const newComment = {
            project_id: project.id,
            email: event.target[1].value,
            display_name: event.target[2].value,
            content: event.target[0].value
        }
        fetch(`${API_URL}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newComment)
        })
        .then(() => setComments([newComment, ...comments]))
    }
}

function Image(props) {
    const { image } = props

    return(
        <div className="col-6 thumbnail-container">
            <div className="row image-thumbnail" style={{backgroundImage: `url('${image.src_url}')`}}>
            </div>
        </div>
    )
}
function Comment(props) {

    const { comment } = props

    return(
        <div>
            <p>On {comment.created_at.slice(0, 10)}, <b>{comment.display_name}</b> said:</p>
            <h5>{comment.content}</h5>
            <hr className="comment-separator" />
        </div>
    )
}