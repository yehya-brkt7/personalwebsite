import React from "react";
import Link from "next/link";
// import Image from "next/image";
import Grid from "@mui/material/Grid";
import style from "../styles/carousel.module.scss";
import ProjectCard from "./projectcard";

const h3 = {
  color: "#fff",
  fontSize: "20px",
};

const Projects = () => {
  return (
    <>
      <div className={style.container}>
        <input type="checkbox" id="active" />
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

        <div className="projectscontent">
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
            <input
              type="radio"
              className={style.input}
              name="fancy"
              value="spades"
              id="spades"
            ></input>
            <input
              type="radio"
              name="fancy"
              className={style.input}
              value="diamonds"
              id="diamonds"
            ></input>

            <label className={style.label} htmlfor="clubs">
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

            <label className={style.label} htmlfor="hearts">
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

            {/* <label className={style.label} for="spades">
              <span className={style.span}>
                <ProjectCard />
              </span>
            </label>

            <label className={style.label} for="diamonds">
              <span className={style.span}>
                <ProjectCard />
              </span>
            </label> */}

            {/* <div className="keys">Use left and right keys to navigate</div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Projects;
