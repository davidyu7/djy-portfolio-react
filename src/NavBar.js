import React from 'react'

export default function NavBar(props){
    return(
        <nav className="navbar navbar-expand-lg" >
            <div className="container">
                <a className="navbar-brand" href="/">Brand</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse align-items-center" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto align-items-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
