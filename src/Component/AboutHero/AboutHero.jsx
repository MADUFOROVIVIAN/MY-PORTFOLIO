import React from "react";
import style from "./AboutHero.module.css";
import about from "../../Assests/about.png";

const AboutHero = () => {
  return (
    <div className={style.container}>
      <div className={style.about}>
        <div className={style.aboutImage}>
          <img src={about} alt="AboutImage" />
        </div>
        <div className={style.aboutText}>
          <h2>ABOUT ME</h2>
          <h5>I'm Maduforo Vivian</h5>
          <p>
            I'm a web developer, frontend and backend. I specialize in building
            responsive web applications using latest frameworks.
          </p>
          <br />

          <p>
            Have had the opportunity to learn from talented individuals in these
            field.
          </p>
          <br />

          <p>
            I am always eager to learn more and improve my skills. I am
            constantly striving to improve my skills and make a positive impact
            in my field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
