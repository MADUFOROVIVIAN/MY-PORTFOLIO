import React from "react";
import style from "./Footer.module.css";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={style.container}>
      <footer>
        <div className={style.footSide}>
          <div className={style.footText}>
            <h2>GET IN TOUCH</h2>
            <div className={style.mail}>
              <a href="ifunanyachi792@gmail.com">
                <IoMailOutline className={style.mailIcon} />
              </a>
              <p>Email</p>
            </div>
          </div>

          <div className={style.footFlex}>
            <Link to="/contact">
              <button>Contact me</button>
            </Link>
          </div>

          <div className={style.logoSide}>
            <div className={style.logos}>
              <a href="https://wa.me/qr/K62V3OTIYAFSP1">
                <FaWhatsappSquare className={style.whatsappIcon} />
              </a>
              <a href="https://www.linkedin.com/in/maduforo-vivian-aa202431a">
                <FaLinkedin className={style.linkedinIcon} />
              </a>
              <a href="https://x.com/MaduforoVi22339">
                <FaSquareXTwitter className={style.twitterIcon} />
              </a>
            </div>
            <div className={style.logoText}>
              <p>Copyright @2024 MV</p>
            </div>
          </div>

          <div
            className={style.scrollUp}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <BsFillArrowUpCircleFill className={style.iconscroll} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
