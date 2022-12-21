import React from 'react'
import Navbar from '../sections/Navbar';
import Eksplor from '../sections/Eksplorasi';
import Project2 from '../sections/Project2';
import DataProject2 from '../Json/previewproject2.json'
import Foot from '../sections/Footer';

export default function Eksplorpage() {
    return (
        <>
            <Navbar></Navbar>
            <Eksplor data={DataProject2.selected}></Eksplor>
            <Foot></Foot>
        </>
    )
}