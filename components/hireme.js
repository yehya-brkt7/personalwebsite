import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import style from "../styles/buttons.module.scss";

const Hireme = () => {
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
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <div className={style.hire}>
              <a href="/resume" target="_blank" rel="noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Resume
              </a>
            </div>
          </Grid>
          <Grid item xs={12} marginTop="50px">
            <div className={style["social-container"]}>
              <ul className={style["social-icons"]}>
                <Grid item xs={12}>
                  <li>
                    <a
                      href="https://www.instagram.com/yehya_brkt/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </Grid>
                <li>
                  <a
                    href="https://github.com/yehya-brkt7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/yehya-barakat-1b1251131/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                {/* <li>
                <a href="#">
                  <i className={style["fa fa-codepen"]}></i>
                </a>
              </li> */}
              </ul>
            </div>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Hireme;
