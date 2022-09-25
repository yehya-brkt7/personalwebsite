import React from "react";
import Link from "next/link";
import style from "../styles/text.module.css";
import { Grid } from "@mui/material";

const h3 = {
  color: "#fff",
  fontSize: "20px",
};

const AboutMe = () => {
  return (
    <>
      <div>
        <input type="checkbox" id="active"></input>
        <label htmlfor="active" className="menu-btn">
          <span></span>
        </label>
        <label htmlfor="active" className="close"></label>
        <div className="wrapper">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutme">AboutMe</Link>
            </li>
            <li>
              <Link href="/techstack">TechStack</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/hireme">Hireme</Link>
            </li>
          </ul>
        </div>
        <div className="aboutmecontent">
          <div id={style.divs} className={style.firstword}>
            I am <br></br> I am <br></br> <br></br> I have
            <br></br> and
          </div>
          <div id={style.divs} className={style.division}>
            <span className={style.sentence}>
              a Front end web developer specializing in React. <br></br>
              24, from Lebanon and looking htmlfor an opportunity <br></br> to
              enter the professional world of web development <br></br> about a
              year of experience as a React developer
              <br></br> 4 months experience as a React developer intern
            </span>
          </div>
        </div>
        <div className="mobilecontent">
          <span>
            I am a Front end web developer specializing in React. I am 24, from
            Lebanon and looking htmlfor an opportunity to enter the professional
            world of web development. I have about a year of experience as a
            React developer and 4 months experience as a React developer intern
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
