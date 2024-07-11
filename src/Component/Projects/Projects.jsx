import React from 'react'
import style from "./Projects.module.css"
import tImage from "../../Assests/tImage.png"
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
<img src={tImage} alt="Trafalgar" />
</div>
<h5>Trafalgar health care website</h5>
<div className={style.flex}>
    <a href="https://my-first-project-sigma-nine.vercel.app/">
<button>Vercel link</button>
</a>
              </div>
                
</div>
</div>
    </div>
  )
}

export default Projects