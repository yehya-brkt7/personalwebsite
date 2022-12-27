import React from "react";
import Link from "next/link";
import style from "../styles/text.module.css";
import { Grid } from "@mui/material";
import Background from "./background";

const h3 = {
  color: "#fff",
  fontSize: "20px",
};

const AboutMe = () => {
  return (
    <>
      <Background />
      <input
        id="page-nav-toggle"
        className="main-navigation-toggle"
        type="checkbox"
      />
      <label htmlFor="page-nav-toggle">
        <svg className="icon--menu-toggle" viewBox="0 0 60 30">
          <g className="icon-group">
            <g className="icon--menu">
              <path d="M 6 0 L 54 0" />
              <path d="M 6 15 L 54 15" />
              <path d="M 6 30 L 54 30" />
            </g>
            <g className="icon--close">
              <path d="M 15 0 L 45 30" />
              <path d="M 15 30 L 45 0" />
            </g>
          </g>
        </svg>
      </label>

      <nav className="main-navigation">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutme">About Me</Link>
          </li>
          <li>
            <Link href="/techstack">Tech Stack</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/hireme">Hire me</Link>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        {/* <div className={style.aboutmecontent}>
          <div id={style.divs} className={style.firstword}>
            I am <br></br> I am <br></br> <br></br> I have
            <br></br> and
          </div>
          <div id={style.divs} className={style.division}>
            <span className={style.sentence}>
              a Front end web developer specializing in React. <br></br>
              24, from Lebanon and looking for an opportunity <br></br> to enter
              the professional world of web development <br></br> {"\u00A0"}{" "}
              {"\u00A0"}
              about a year of experience as a React developer
              <br></br> 4 months experience as a React developer intern
            </span>
          </div>
        </div> */}
        <div className={style.content}>
          <img src="pc.png" className={style.pc}></img>
          <div className={style["css-typing"]}>
            <p>I am a React Front end web developer.</p>
            <p>I am 24, from Lebanon and looking For</p>
            <p>an opportunity to enter</p>
            <p> the professional world of web development. </p>
            <p>I have about a year of experience as</p>
            <p> a React developer and 4 months </p>

            <p> experience as a React developer intern</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutMe;
