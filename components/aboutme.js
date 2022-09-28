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
      <input
        id="page-nav-toggle"
        class="main-navigation-toggle"
        type="checkbox"
      />
      <label for="page-nav-toggle">
        <svg class="icon--menu-toggle" viewBox="0 0 60 30">
          <g class="icon-group">
            <g class="icon--menu">
              <path d="M 6 0 L 54 0" />
              <path d="M 6 15 L 54 15" />
              <path d="M 6 30 L 54 30" />
            </g>
            <g class="icon--close">
              <path d="M 15 0 L 45 30" />
              <path d="M 15 30 L 45 0" />
            </g>
          </g>
        </svg>
      </label>

      <nav class="main-navigation">
        <ul>
          <li>
            <a href="#0">Home</a>
          </li>
          <li>
            <a href="#0">About</a>
          </li>
          <li>
            <a href="#0">Contact</a>
          </li>
          <li>
            <a href="#0">Dance</a>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        <div className="aboutmecontent">
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
        </div>
        {/* <div className="mobilecontent">
          <span>
            I am a Front end web developer specializing in React. I am 24, from
            Lebanon and looking htmlFor an opportunity to enter the professional
            world of web development. I have about a year of experience as a
            React developer and 4 months experience as a React developer intern
          </span>
        </div> */}
      </main>
    </>
  );
};

export default AboutMe;
