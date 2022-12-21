import React from 'react'
import Navbar from '../sections/Navbar';
import Foot from '../sections/Footer';
import DataProject from '../Json/previewproject2.json'
import Detail from "../sections/detailpro2";

export default function Landingpage() {
    return (
        <>
        <Navbar></Navbar>
        <Detail data={DataProject.selected}></Detail>
        <Foot></Foot>
        </>
    )
}