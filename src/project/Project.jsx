import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import './Project.css';

const API_URL = "http://localhost:3000"

export default function Project(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [project, setProject] = useState({});
    const [comments, setComments] = useState({});

    let { id } = useParams()

    useEffect(() => {
        console.log(`${API_URL}/projects/${id}`)
        fetch(`${API_URL}/projects/${id}`)
        .then(response => response.json())
        .then(
            (result) => {
                setProject(result);
                setComments(result.comments);
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
                    <h3>Description:</h3>
                    <p>{project.description}</p>
                    <h3>Tagged:</h3>
                    <div className="tag-list">
                        {project.tags.map(tag =>
                            <Link to={`/projects/tags/${tag.id}`} className="tag" key={tag.id}>{`#${tag.name}`}</Link>
                        )}
                    </div>
                </div>
                <div className="project-comments-area">
                    <h3>Comments:</h3>
                    <form id="comment-form" onSubmit={handleComment}>
                        <div className="form-row">
                            <div className="form-group col-md 12">
                                <textarea className="form-control" id="commentText" aria-label="Leave a comment" rows="3" placeholder = "Leave your thoughts..."></textarea>
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
                        {comments.map(comment => <Comment comment={comment} />)}
                    </div>
                </div>    
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

function Comment(props) {

    const { comment } = props

    return(
        <div>
            <h1>{comment.display_name}</h1>
            <p>{comment.content}</p>
        </div>
    )
}
