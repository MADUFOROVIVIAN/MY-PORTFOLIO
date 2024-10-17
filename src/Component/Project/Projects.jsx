import React from "react";
import style from "./Projects.module.css";
import tImage from "../../Assests/tImage.png";
import DExpress from "../../Assests/DExpress.png";
import mayframe from "../../Assests/mayframe.png";
import project from "../../Assests/project.png";
import { FaGithub } from "react-icons/fa";

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
          <h5>Trafalgar healthcare</h5>
          <div className={style.flex}>
            <a href="https://github.com/MADUFOROVIVIAN/My-First-Project">
              <button>
                <span>
                  <FaGithub className={style.gitIcon} />
                  View Code
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.cardImage}>
            <img src={DExpress} alt="DExpress" />
          </div>
          <h5>D-Express Pharmacy</h5>
          <div className={style.flex}>
            <a href="https://github.com/MADUFOROVIVIAN/FRONTEND">
              <button>
                <span>
                  <FaGithub className={style.gitIcon} />
                  View Code
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.cardImage4}>
            <img src={mayframe} alt="MayFrame" />
          </div>
          <h5>MayFrame Property</h5>
          <div className={style.flex}>
            <a href="https://github.com/MADUFOROVIVIAN/Mayframe">
              <button>
                <span>
                  <FaGithub className={style.gitIcon} />
                  View Code
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className={style.cardB}>
      <div className={style.cardImage2}>
            <img src={project} alt="API" />
          </div>
          <h5>Blog API</h5>
          <div className={style.flex}>
            <a href="https://github.com/MADUFOROVIVIAN/Blog-API">
              <button>
                <span>
                  <FaGithub className={style.gitIcon} />
                  View Code
                </span>
              </button>
            </a>
          </div>
      </div>
    </div>
  );
};

export default Projects;
