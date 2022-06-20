import React from 'react';
import Projectcard from '../components/Projectcard';
import ProjectOne from "../assets/mach2258.github.io_Weather-music_no playlists.png"
import ProjectTwo from "../assets/UfoTracker.JPG"
import ProjectThree from "../assets/Codle.JPG"
import ProjectFour from "../assets/dj_sona_wallpaper__ethereal__kinetic__concussive__by_rjgtav_d946zy2-pre.png"

import "../styles/Project.css"

function Projects() {
    return <div className='projects'>
        <h1> My Projects</h1>
        <div className='projectList'>
            <Projectcard name="SkyNotes" image={ProjectOne}/>
            <Projectcard name="UfoTracker" image={ProjectTwo}/>
            <Projectcard name="Codle" image={ProjectThree}/>
            <Projectcard name="DJ Sona Discord Bot" image={ProjectFour}/>
        </div>
    </div>
    
}

export default Projects;