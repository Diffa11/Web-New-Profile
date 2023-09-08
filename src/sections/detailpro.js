import React from 'react'
import { useParams } from "react-router-dom";

export default function Detailproj(props) {
    const {id}= useParams();

    const project = props.data.find((project) => project._id == id);

    return (
        <section class="container hero portofolio descporto" id="mydetailportofolio">
            <div class="title text-center">
                <h1>Portofolio</h1>
                <h2>{project.tittleName}</h2>
            </div>
            
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={project.Image1} class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src={project.Image2} class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src={project.Image3} class="d-block w-100" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="mt-5">
                <h2 class="Diffa">Description</h2>
                <h5>{project.Descrip}</h5>
            </div>

            <div class="mt-5">
                <h2 class="Diffa">Problem</h2>
                <h5>{project.Descrip1}</h5>
            </div>

            <div class="mt-5">
                <h2 class="Diffa">Solution</h2>
                <h5>{project.Descrip2}</h5>
            </div>

            <div class="mt-5">
                <h2 class="Diffa">Conclusion</h2>
                <h5>{project.Descrip3}</h5>
            </div>

            <div class="mt-5">
                <h2 class="Diffa">Document</h2>
                <h5>You can see in<a href={project.Link} target="_blank" rel="noreferrer">Here</a></h5>
            </div>

        </section>
    )
}