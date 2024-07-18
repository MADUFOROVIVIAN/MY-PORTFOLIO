import React from "react";
import style from "./Projects.module.css";
import tImage from "../../Assests/tImage.png";
import DExpress from "../../Assests/DExpress.png"
import mayframe from "../../Assests/mayframe.png"
const Projects = () => {
  return (
    <div className={style.container}>
      <div className={style.projectText}>
        <h2>PROJECTS</h2>
        <p>What I've built so far</p>
      </div>
      <div className={style.cards}>
      <div className={style.card}>
        <div className={style.cardImage}>
          <img src={tImage} alt="Trafalgar" />
        </div>
        <h4>Personal Project</h4>
        <h5>Trafalgar healthcare</h5>
        <div className={style.flex}>
          <a href="https://my-first-project-sigma-nine.vercel.app/">
            <button>Vercel link</button>
          </a>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.cardImage}>
          <img src={DExpress} alt="DExpress" />
        </div>
        <h4>Team Project</h4>
        <h5>D-Express Pharmacy</h5>
        <div className={style.flex}>
          <a href="https://frontend-teal-seven-90.vercel.app/">
            <button>Vercel link</button>
          </a>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.cardImage3}>
          <img src={mayframe} alt="MayFrame" />
        </div>
        <h4>Team Project</h4>
        <h5>MayFrame</h5>
        <div className={style.flex}>
          <a href="https://my-first-project-sigma-nine.vercel.app/">
            <button>Vercel link</button>
          </a>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Projects;
