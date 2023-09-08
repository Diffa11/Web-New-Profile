import React from 'react'
import { Link } from "react-router-dom";

let i = 0;
const items = [];

function itemsExplore(explore) {
    while (i < 15) {
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

export default function Eksplorasi(props) {
    itemsExplore(props.data)
    return (
    <header class="container hero">
        <span>
            <div class="title text-center">
                <h1>Desain Exploration</h1>
                <h2>Diffa Al Farrisztqi</h2>
            </div>
        </span>
        <div class="row explore-grid portofolio">
            {
                items
            }
        </div>
    </header>
    )
}
