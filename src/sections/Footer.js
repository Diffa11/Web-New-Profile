import React from 'react'
import { Link } from "react-router-dom";

import Ic1 from '../assets/Icon/email.png'
import Ic2 from '../assets/Icon/linkedin.png'
import Ic3 from '../assets/Icon/dribble.png'

export default function Foot(props) {
    return (
    <footer class="main-section hero">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 d-flex align-items-center">
                        <a href="mailto:diffafarriz@gmail.com">
                            <img src={Ic1} alt="home" width="30" height="30" />
                        </a>
                        <a href="https://www.linkedin.com/in/diffa-al-farrisztqi/" target="_blank" rel="noreferrer">
                            <img src={Ic2} alt="home" width="30" height="30" />
                        </a>
                        <a href="https://dribbble.com/Diffa_al11" target="_blank" rel="noreferrer">
                            <img src={Ic3} alt="home" width="30" height="30" />
                        </a>
                    </div>
                    <div class="col-lg-6 text-lg-end text-sm-start">
                        <p>© Diffa Al Farrisztqi 2022</p>
                    </div>
                </div>
            </div>
    
    </footer>
    )
}