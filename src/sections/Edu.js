import React from 'react'
import { Link } from "react-router-dom";

import ED1 from '../assets/Images/Edu 1.webp'
import Mgng1 from '../assets/Images/Edu 2.webp'
import Mgng2 from '../assets/Images/Edu 3.webp'
import Mgng3 from '../assets/Images/Edu 4.webp'
import Mgng4 from '../assets/Images/Edu 5.webp'
import Mgng5 from '../assets/Images/Edu 6.webp'

export default function Edu(props) {
    return (
        <section class="container hero1 portofolio" id="myportofolio">
            <span>
                <h2>Education & Courses</h2>
            </span>
            <div class="row product-grid" data-aos="fade-up">
                <div class="col-1">
                    <img src={ED1} class="card-img-top" width="1%" />
                </div>
                <div class="col">
                    <h3>Computer Science
                        <br/> Universitas Pendidikan Indonesia</h3>
                    <p>2019 - 2023</p>
                </div>
                <div class="col-1">
                    <img src={Mgng4} class="card-img-top" width="1%" />
                </div>
                <div class="col">
                    <h3>UI/UX Designer
                        <br /> Bangbeli</h3>
                    <p>September 2022 - Februari 2023</p>
                </div>
            </div>
            <div class="row product-grid" data-aos="fade-up">
                <div class="col-1">
                    <img src={Mgng1} class="card-img-top" width="1%" />
                </div>
                <div class="col">
                    <h3>UI/UX Designer
                        <br/> Intelligo.Id
                    </h3>
                    <p>June 2022 - Desember 2022</p>
                </div>
                <div class="col-1">
                    <img src={Mgng2} class="card-img-top" width="1%" />
                </div>
                <div class="col">
                    <h3>UI/UX Specialis
                        <br/> Quarter Life Project
                    </h3>
                    <p>January 2022 - April 2022</p>
                </div>
            </div>
            <div class="row product-grid" data-aos="fade-up">
                <div class="col-1">
                    <img src={Mgng3} class="card-img-top" width="1%" />
                </div>
                <div class="col">
                    <h3>Project-Based Intern : UI/UX Designer
                        Internship Experience
                        <br/> Niagahoster
                    </h3>
                    <p>September 2022</p>
                </div>
                <div class="col-1">
                    <img src={Mgng5} class="card-img-top" width="1%" />
                </div>
                <div class="col">
                    <h3>Project-Based Intern : UI/UX Designer
                        Internship Experience
                        <br/> QWords
                    </h3>
                    <p>Desember 2022</p>
                </div>
            </div>
        </section>
    )
}