import React from "react";
import Link from "next/link";
import Card from "./card";
import Grid from "@mui/material/Grid";
import Background from "./background";
import TechCard from "./techcard";

const h3 = {
  color: "#fff",
  fontSize: "20px",
};

const TechStack = () => {
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
        <Grid container justifyContent="center" className="content" spacing={4}>
          <Grid item xs={12}></Grid>
          <Grid
            item
            xs={10}
            md={5.5}
            marginBottom="50px"
            container
            justifyContent="center"
          >
            <TechCard
              title="Core Languages"
              source="html.png"
              source2="css.png"
              source3="js.png"
              title1="HTML"
              title2="CSS"
              title3="JAVASCRIPT"
            />
          </Grid>
          <Grid
            item
            xs={10}
            md={5.5}
            marginBottom="50px"
            container
            justifyContent="center"
          >
            <TechCard
              title="Libraries and Frameworks"
              source="react.png"
              source2="next.png"
              title1="REACT"
              title2="NEXT JS"
            />
          </Grid>
          <Grid
            item
            xs={10}
            md={5.5}
            marginBottom="50px"
            container
            justifyContent="center"
          >
            <TechCard
              title="Design / Component / State Management Libraries"
              source="mui.png"
              source2="zustand.png"
              source3="bootstrap.png"
              title1="MUI"
              title2="ZUSTAND"
              title3="BOOTSTRAP"
            />
          </Grid>
          <Grid
            item
            xs={10}
            md={5.5}
            marginBottom="50px"
            container
            justifyContent="center"
          >
            <TechCard
              title="Tools and Apps"
              source="vscode.png"
              source2="git.png"
              title1="VSCODE"
              title2="GIT"
            />
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default TechStack;
