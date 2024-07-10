import React from 'react'
import style from "./Projects.module.css"
import project from "../../Assests/project.png"
const Projects = () => {
  return (
    <div className={style.container}>
        <div className={style.Projects}>
            <div className={style.projectText}>
<h2>PROJECTS</h2>
<p>What I've built so far</p>
</div>
<div className={style.cards}>
<div className={style.cardImage}>
<img src={project} alt="ProjectImage" />
</div>
<h5>Trafalgar</h5>
</div>
</div>
    </div>
  )
}

export default Projects