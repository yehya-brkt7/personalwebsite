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
        <form className={style.form}>
          <input
            className={style.input}
            type="radio"
            name="fancy"
            autoFocus
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

          <div className={style.container}>
            <Grid container justifyContent="center">
              <Grid
                container
                item
                xs={10}
                justifyContent="center"
                marginBottom="60px"
              >
                <div className={style.card}>
                  <div className={style.image}>
                    <img href="#" src="lwah.png"></img>
                  </div>
                  <div className={style.content}>
                    <h3>internship</h3>
                    <p>
                      4 months internship at a local company. I alongside a
                      backend developer and a web designer developed a full
                      stack crud operations web app where doctors can login and
                      manager their patients
                    </p>
                    <a href="" target="_blank" rel="noreferrer">
                      <button className={style.button} disabled={true}>
                        Link
                      </button>
                    </a>
                    {"\u00A0"}
                    {"\u00A0"}
                    <a href="" target="_blank" rel="noreferrer">
                      <button className={style.button} disabled={true}>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid container item xs={10} justifyContent="center">
                <div className={style.card}>
                  <div className={style.image}>
                    <img href="#" src="footballapp.png"></img>
                  </div>
                  <div className={style.content}>
                    <h3>Football App</h3>
                    <p>
                      football app where any user can randomly pick their
                      starting 11 + 1 sub with buttons and display some stats.
                      containes search and filter options
                    </p>

                    <a
                      href="https://football-11.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className={style.button}>Link</button>
                    </a>

                    {"\u00A0"}
                    {"\u00A0"}
                    <a
                      href="https://github.com/yehya-brkt7/footballapp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className={style.button}>Code</button>
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid container item xs={10} justifyContent="center">
                <div className={style.card}>
                  <div className={style.image}>
                    <img href="#" src="quiz.png"></img>
                  </div>
                  <div className={style.content}>
                    <h3>Sports Quiz App</h3>
                    <p>
                      Sports quiz and trivia app about the nba and
                      football(soccer). Score is calculated at the end.
                    </p>

                    <a
                      href="https://sportsquiz.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className={style.button}>Link</button>
                    </a>

                    {"\u00A0"}
                    {"\u00A0"}
                    <a
                      href="https://github.com/yehya-brkt7/sportsquiz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className={style.button}>Code</button>
                    </a>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className="keys">Use left and right keys to navigate</div>
        </form>
      </main>
    </>
  );
};

export default Projects;
