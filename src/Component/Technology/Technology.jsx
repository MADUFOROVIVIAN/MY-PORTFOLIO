import React from "react";
import style from "./Technology.module.css";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

const Technology = () => {
  return (
    <div className={style.container}>
      <div className={style.iconText}>
        <h2>My Skills</h2>
        <p>Technologies I've been working with recently</p>
        <div className={style.iconImages}>
          <FaHtml5 className={style.htmlIcon} />
          <IoLogoJavascript className={style.jsIcon} />
          <VscVscode className={style.vsIcon} />
          <FaReact className={style.reactIcon} />
          <IoLogoCss3 className={style.cssIcon} />
          <FaGithub className={style.gitIcon} />
          <SiMysql className={style.mysqlIcon}/>
          <FaLaravel className={style.larIcon}/>
          <SiPhp className={style.phpIcon}/>
        </div>
      </div>
    </div>
  );
};

export default Technology;
