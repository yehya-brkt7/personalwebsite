import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import style from "../styles/buttons.module.scss";

const Hireme = () => {
  return (
    <>
      <div>
        <input type="checkbox" id="active"></input>
        <label for="active" class="menu-btn">
          <span></span>
        </label>
        <label for="active" class="close"></label>
        <div class="wrapper">
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
        <div class="maincontent">
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <div class={style.hire}>
                <a href="/projects">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Resume
                </a>
              </div>
            </Grid>
            <Grid item xs={12} marginTop="50px">
              <div class={style["social-container"]}>
                <ul class={style["social-icons"]}>
                  <Grid item xs={12}>
                    <li>
                      <a
                        href="https://www.instagram.com/yehya_brkt/"
                        target="_blank"
                      >
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </Grid>
                  <li>
                    <a href="https://github.com/yehya-brkt7" target="_blank">
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  {/* <li>
                <a href="#">
                  <i class={style["fa fa-codepen"]}></i>
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
