import React, { useState, useEffect } from 'react';
import ProjectPreview from '../project/Preview';
import { Route, Switch, NavLink, useParams } from 'react-router-dom'

const API_URL = "http://localhost:3000"

export default function Categories(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        console.log(`${API_URL}/categories`)
        fetch(`${API_URL}/categories`)
        .then(response => response.json())
        .then(
            (result) => {
              setIsLoaded(true);
              setCategories(result);
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
                <div className="category-list">
                    {categories.map(category =>
                        <NavLink
                            to={`/projects/categories/${category.id}`} 
                            className="category" 
                            activeClassName="active"
                            key={category.id}
                        >
                            {category.name}
                        </NavLink>
                    )}
                </div>
                <div className="row main-content-list">
                <Switch>
                    <Route path="/projects/categories/:id" component={Category} />
                </Switch>
                </div>
            </div>
        );
    } 
}

function Category(props){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [category, setCategory] = useState({});

    let { id } = useParams();

    useEffect(() => {
        console.log(`${API_URL}/categories/${id}`)
        fetch(`${API_URL}/categories/${id}`)
        .then(response => response.json())
        .then(
            (result) => {
                setCategory(result);
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
            category.project_previews.map(project =>
                <div className="col-6" key={project.id}>
                    <ProjectPreview project={project} key={project.id}/>
                </div>
            )
        );
    }
}