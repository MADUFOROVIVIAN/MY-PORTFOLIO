import React from "react";
import style from "./Footer.module.css";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className={style.container}>
      <footer>
        <div className={style.footSide}>
          <div className={style.footText}>
            <h2>GET IN TOUCH</h2>
            <div className={style.mail}>
          <IoMailOutline className={style.mailIcon} />
            <p>vivianmaduforo@gmail.com</p>
            </div>
          </div>

          <div className={style.footFlex}>
            <button>Contact me</button>
          </div>

          <div className={style.logoSide}>
            <div className={style.logos}>
            <a href="https://wa.me/qr/K62V3OTIYAFSP1">
              <FaWhatsappSquare className={style.whatsappIcon} />
            </a>
            <FaLinkedin className={style.linkedinIcon} />
            <FaTwitterSquare className={style.twitterIcon} />
            </div>
            <div className={style.logoText}>
            <p>Copyright @2024 MV</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
