import React from 'react'
import { Link } from "react-router-dom";

import Logo from '../assets/Icon/logoku.png'

export default function Navbar(props){
    return(
        <nav class="navbar navbar-expand-lg bg-light nav">
            <div class="container-fluid container my-0">
                <a class="navbar-brand" href={`/`}>
                    <img src={Logo} alt="home" width="60" height="60"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href={`/`}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={`/#myportofolio`}>Portofolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={`/#skill`}>Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://drive.google.com/file/d/1sQVhBuY4ckBg2Agal3GwlmtA6pbzlzfr/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="mailto:diffafarriz@gmail.com" target="_blank" rel="noreferrer">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
