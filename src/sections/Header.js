import React from 'react'
import { Link } from "react-router-dom";

import Tangan from '../assets/Images/Waving Hand.png'
import Me from '../assets/Images/me.png'
import Typewriter from 'typewriter-effect';

/* new Typewriter('#typewriter', {
    strings: ['Hello', 'World'],
    autoStart: true,
}); */


export default function Header(props) {
    return (
        <header class="container hero">
            <span>
                <div class="row">
                    <div class="col-lg-6">
                        <p class="text-sm-start">Hello Everybody <img src={Tangan} alt="nyapa" width="20" height="20" /> my name is</p>
                        <h1 class="name">
                            <label class="Diffa ">
                                Diffa&nbsp;
                            </label>
                            Al Farrisztqi
                        </h1>
                        <h1 class="ml6">
                            <Typewriter
                                options={{
                                    strings: ['UI/UX Designer', 'Live in Indonesia', 'From Purwakarta'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p class="descbio">I'm a computer science student, have some work experience,
                            <br/>
                                and still passionate about designing user experiences
                        </p>
                    </div>
                    <div class="col-lg-3 ms-auto">
                        <img src={Me} height="280px" />
                    </div>
                </div>
            </span>
        </header>
    )
}