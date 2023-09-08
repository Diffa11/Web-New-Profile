import React from 'react'
import { Link } from "react-router-dom";

import DE1 from '../assets/Images/DE 1.webp'
import DE2 from '../assets/Images/DE 2.webp'
import DE3 from '../assets/Images/DE 3.webp'
import DE4 from '../assets/Images/DE 4.webp'
import DE5 from '../assets/Images/DE 5.webp'
import DE6 from '../assets/Images/DE 6.webp'

let i = 0;
const items = [];

function itemsExplore(explore) {
    while (i < 6) {
        items.push(
            <div key={explore[i]._id} className='col-lg-4 exp' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="600" data-aos-offset="0" data-aos-anchor-placement="center-bottom">
                <a href={`/explore/${explore[i]._id}`} target='_blank' rel='noreferrer'>
                    <img src={explore[i].Image} alt={explore[i].tittlename} className='img-fluid img-explore'></img>
                </a>
            </div>
        )
        i++
    }
}

export default function Project2(props) {

    itemsExplore(props.data)

    return (
        <section class="container hero1 portofolio" id="myportofolio">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6">
                    <span>
                        <h2>Desain Exploration</h2>
                    </span>
                </div>
                <div class="col-lg-6 text-end more">
                    <a href={`/explore`}>See More</a>
                </div>
            </div>
            <div class="row explore-grid" data-aos="fade-up">
            {
                items
            }
            </div>
        </section>
    )
}