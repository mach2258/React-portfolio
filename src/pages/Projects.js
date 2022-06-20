import React from 'react';
import Projectcard from '../components/Projectcard';
import ProjectOne from "../assets/mach2258.github.io_Weather-music_no playlists.png"
import ProjectTwo from "../assets/UfoTracker.JPG"

function Projects() {
    return <div className='projects'>
        <h1> My Projects</h1>
        <div className='projectList'>
            <Projectcard name="SkyNotes" image={ProjectOne}/>
            <Projectcard name="SkyNotes" image={ProjectTwo}/>
        </div>
    </div>
    
}

export default Projects;