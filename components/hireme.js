import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import style from "../styles/buttons.module.scss";

const Hireme = () => {
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
        <div className="maincontent">
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <div className={style.hire}>
                <a href="/resume" target="_blank">
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
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </Grid>
                  <li>
                    <a href="https://github.com/yehya-brkt7" target="_blank">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/yehya-barakat-1b1251131/"
                      target="_blank"
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
        </div>
      </div>
    </>
  );
};

export default Hireme;
