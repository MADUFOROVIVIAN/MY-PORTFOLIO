import React from 'react'
import style from "./Header.module.css"
import myPic from "../../Assests/myPic.png"
const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.topContainer}>
       <header>
       <h1>MV</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </nav>
        </header>
        <div className={style.innerContainer}>
<div className={style.headerText}>
<h2>MADUFORO VIVIAN</h2>
<p>WEB DEVELOPER.</p>
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