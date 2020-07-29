import React from 'react';

export default function NavBar(props) {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">

                <a class="navbar-brand" href="#" id="navlink-home">DAVID J. YU</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <span class="navbar-text">
                    Browse projects by:
                </span>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="navlink-folders">Folders</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="navlink-categories">Categories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="navlink-tags">Tags</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}