import React from "react";
import style from "./ContactHero.module.css";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <h2>Have any project in mind?</h2>
        <Link to="/contact">
          <button>Contact me</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactHero;
