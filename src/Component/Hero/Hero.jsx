import React from "react";
import style from "./Hero.module.css";
import about from "../../Assests/about.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.About}>
        <div className={style.aboutImage}>
          <img src={about} alt="AboutImage" />
        </div>
        <div className={style.aboutText}>
          <h2>ABOUT ME</h2>
          <h5>I'm Maduforo Vivian</h5>
          <p>
            I'm a web developer and I specialize in building responsive web
            applications using latest frameworks.
          </p>
          <Link to ='/about'>
              <h6>Learn more &#8594;</h6>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
