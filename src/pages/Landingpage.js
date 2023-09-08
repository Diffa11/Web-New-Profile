import React from 'react'
import Navbar from '../sections/Navbar';
import Header from '../sections/Header';
import Project1 from '../sections/Project1';
import Project2 from '../sections/Project2';
import ToolSkill from '../sections/ToolSkil';
import Edu from '../sections/Edu';
import Foot from '../sections/Footer';
import DataProject from '../Json/previewproject.json'
import DataProject2 from '../Json/previewproject2.json'

export default function Landingpage() {
    return (
        <>
        <Navbar></Navbar>
        <Header></Header>
        <Project1 data={DataProject.selected}></Project1>
        <Project2 data={DataProject2.selected}></Project2>
        <ToolSkill></ToolSkill>
        <Edu></Edu>
        <Foot></Foot>
        </>
    )
}