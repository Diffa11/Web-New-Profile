import React from 'react'
import { useParams } from "react-router-dom";

export default function Detailproj(props) {
    const {id}= useParams();

    const project = props.data.find((project) => project._id == id);

    return (
        <section class="container hero portofolio descporto" id="mydetailportofolio">
            <span>
                <div class="title text-center">
                    <h1>Portofolio</h1>
                    <h2>{project.tittleName}</h2>
                </div>
            </span>
            
            <div class="thumbnail text-center">
                <img src={project.Image} class="img-fluid mx-auto" alt/>
            </div>

            <p>{project.Descrip}</p>

            <p>For designs and others, see: <a href={project.Link} target="_blank" rel="noreferrer">Here</a></p>
        </section>
    )
}