import React from "react";
import Link from "next/link";
// import Image from "next/image";
import Grid from "@mui/material/Grid";
import style from "../styles/carousel.module.css";
import ProjectCard from "./projectcard";

const h3 = {
  color: "#fff",
  fontSize: "20px",
};

const Projects = () => {
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutme">About Me</a>
          </li>
          <li>
            <a href="/techstack">Tech Stack</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/hireme">Hire me</a>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        <form className={style.form}>
          <input
            className={style.input}
            type="radio"
            name="fancy"
            autofocus
            value="clubs"
            id="clubs"
          ></input>
          <input
            className={style.input}
            type="radio"
            name="fancy"
            value="hearts"
            id="hearts"
          ></input>
          {/* <input
            className={style.input}
            type="radio"
            name="fancy"
            value="spades"
            id="spades"
          />
          <input
            className={style.input}
            type="radio"
            name="fancy"
            value="diamonds"
            id="diamonds"
          /> */}
          <label className={style.label} htmlFor="clubs">
            <span className={style.span}>
              <ProjectCard
                title="internship"
                image="lwah.png"
                info="4 months internship at a local company."
                info2=" I alongside a backend developer and a web designer"
                info3="developed a full stack crud operations web app"
                info4=" where doctors can login and manager their patients"
                check={true}
              />
            </span>
          </label>

          <label className={style.label} htmlFor="hearts">
            <span className={style.span}>
              <ProjectCard
                title="Football App"
                image="footballapp.png"
                info="football app where any user can randomly"
                info2="pick their starting 11 + 1 sub"
                info3="with buttons and display some stats"
                info4="containes search and filter options"
                check={false}
                codelink="https://github.com/yehya-brkt7/footballapp"
                link="https://football-11.netlify.app/"
              />
            </span>
          </label>

          <div class="keys">Use left and right keys to navigate</div>
        </form>
      </main>
    </>
  );
};

export default Projects;
