import React from "react";
import Link from "next/link";
import Card from "./card";
import Grid from "@mui/material/Grid";

const h3 = {
  color: "#fff",
  fontSize: "20px",
};

const TechStack = () => {
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
        <Grid
          container
          justifyContent="center"
          marginLeft="30px"
          className="content"
          spacing={4}
        >
          <Grid item xs={12}></Grid>

          <Grid
            item
            xs={10}
            sm={5}
            md={4}
            marginBottom="50px"
            className="firstcard"
          >
            <Card
              title="React"
              language="Js"
              type="library"
              link="https://reactjs.org/"
              image="react.jpg"
            />
          </Grid>
          {/* <Grid item sm={2}></Grid> */}
          <Grid item xs={10} sm={5} md={4} marginBottom="50px">
            <Card
              title="Next"
              language="Js"
              type="framework"
              link="https://nextjs.org/"
              image="next.png"
            />
          </Grid>
          {/* <Grid item sm={2}></Grid> */}
          <Grid item xs={10} sm={5} md={4} marginBottom="50px">
            <Card
              title="HTML"
              language="html"
              type="Markup language"
              link="https://html.com/"
              image="html.png"
            />
          </Grid>

          <Grid item xs={10} sm={5} md={4} marginBottom="50px">
            <Card
              title="Css"
              language="css"
              type="bootstrap - css/scss modules"
              link="https://www.w3schools.com/css/"
              image="css.png"
            />
          </Grid>
          {/* <Grid item sm={2}></Grid> */}
          <Grid item xs={10} sm={5} md={4} marginBottom="50px">
            <Card
              title="Component Libraries"
              language="Js"
              type="MUI - CHAKRA UI - MANTINE UI"
              link="https://reactjs.org/"
              image="mui.png"
              check={true}
            />
          </Grid>
          {/* <Grid item sm={2}></Grid> */}
          <Grid item xs={10} sm={5} md={4} marginBottom="30px">
            <Card
              title="State Management"
              language="Js"
              type="Zustand"
              link="https://github.com/pmndrs/zustand"
              image="zustand.avif"
            />
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default TechStack;
