import React from 'react'
import { Link } from "react-router-dom";

import Porto1 from '../assets/Images/Porto1.png'
import Porto2 from '../assets/Images/Porto2.png'
import Porto3 from '../assets/Images/Porto3.png'
import Porto4 from '../assets/Images/Porto4.png'
import Porto5 from '../assets/Images/Porto5.png'
import Porto6 from '../assets/Images/Porto6.png'

export default function Project1(props) {
    return (
        <section class="container hero1 portofolio " id="myportofolio">
            <span>
                <h2>My Portofolio</h2>
                <p class="descbio1">Here are some User Experience Design Prototypes that I've made</p>
            </span>
            <div class="row product-grid" data-aos="fade-up">
                {
                    props.data.map((item, index) => {
                        return(
                            <div class="col-lg-4 mt-3">
                                <div class="card" key={item._id}>
                                    <img src={item.Image} class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.tittleName}</h5>
                                        <p class="card-text">{item.projectName}</p>
                                        <a href={`/${item._id}`} class="btn color">View details</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}