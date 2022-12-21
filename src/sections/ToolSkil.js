import React from 'react'
import { Link } from "react-router-dom";

import SK1 from '../assets/Images/Skill 1.png'
import SK2 from '../assets/Images/Skill 2.png'
import SK3 from '../assets/Images/Skill 3.png'
import SK4 from '../assets/Images/Skill 4.png'
import SK5 from '../assets/Images/Skill 5.png'
import SK6 from '../assets/Images/Skill 6.png'
import SK7 from '../assets/Images/Skill 7.png'

export default function ToolSkill(props) {
    return (
        <section class="container hero1 portofolio" id="skill">
            <span>
                <h2>Tools & Skills</h2>
            </span>
            <div class="row product-grid" data-aos="fade-up">
                <div class="col">
                    <img src={SK1} class="card-img-top" />
                </div>
                <div class="col">
                    <img src={SK2} class="card-img-top" />
                </div>
                <div class="col">
                    <img src={SK3} class="card-img-top" />
                </div>
                <div class="col">
                    <img src={SK4} class="card-img-top" />
                </div>
                <div class="col">
                    <img src={SK5} class="card-img-top" />
                </div>
                <div class="col">
                    <img src={SK6} class="card-img-top" />
                </div>
                <div class="col">
                    <img src={SK7} class="card-img-top" />
                </div>
            </div>
        </section>
    )
}