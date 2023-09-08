import React from 'react'
import Navbar from '../sections/Navbar';
import Detailproj from '../sections/detailpro';
import Foot from '../sections/Footer';
import DataProject from '../Json/previewproject.json'

export default function Landingpage() {
    return (
        <>
            <Navbar></Navbar>
            <Detailproj data={DataProject.selected}></Detailproj>
            <Foot></Foot>
        </>
    )
}