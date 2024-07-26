import React, {useState} from 'react'
import style from "./Header.module.css"
import myPic from "../../Assests/myPic.png"
import { PiHandWavingFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import {IoMdClose } from "react-icons/io";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleNavLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <div className={style.container}>
      <div className={style.topContainer}>
       <header>
       <a href="/">
       <h1>MV</h1>
       </a>
        <nav className={style.navMenu}>
            <ul>
                <li><a href="/" onClick={handleNavLinkClick}>Home</a></li>
                <li><a href="/about" onClick={handleNavLinkClick}>About</a></li>
                <li><a href="/contact" onClick={handleNavLinkClick}>Contact</a></li>
                <li><a href="/projects" onClick={handleNavLinkClick}>Projects</a></li>
            </ul>
        </nav>
        <div className={style.hamburger} onClick={handleNavToggle}>
          {!navOpen ? (
            <IoMdMenu className={style.Icons} />
          ) : (
            <IoMdClose className={style.Icons} />
            
          )}
        </div>

        <div className={navOpen ? style.active : style.mobileMenu}>
        <nav className={style.mobileNav}>
                <ul>
                <li><a href="/" onClick={handleNavLinkClick}>Home</a></li>
                <li><a href="/about" onClick={handleNavLinkClick}>About</a></li>
                <li><a href="/contact" onClick={handleNavLinkClick}>Contact</a></li>
                <li><a href="/projects" onClick={handleNavLinkClick}>Projects</a></li>
                </ul>
            </nav>
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
          </div>
        </header>
        <div className={style.innerContainer}>
<div className={style.headerText}>
  <div className={style.greeting}>
  <h2>Hello</h2>
  <PiHandWavingFill className={style.handIcon}/>
  </div>
<h3> I'm Maduforo Vivian</h3>
<p>I'm a Web Developer.</p>
<Link to ='/contact'>
<button>Contact me</button>
</Link>
</div>
<div className={style.headerImage}>
<img src={myPic} alt="MV"/>
</div>
</div>
</div>
    </div>
  )
}

export default Header