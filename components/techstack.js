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
      <div>
        <input type="checkbox" id="active" />
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
        <div className="content">
          <Grid container justifyContent="center" spacing={8}>
            <Grid item xs={12}></Grid>

            <Grid item xs={12} sm={5} md={4}>
              <Card
                title="React"
                language="Js"
                type="library"
                link="https://reactjs.org/"
                image="react.jpg"
              />
            </Grid>
            {/* <Grid item sm={2}></Grid> */}
            <Grid item xs={12} sm={5} md={4}>
              <Card
                title="Next"
                language="Js"
                type="framework"
                link="https://nextjs.org/"
                image="next.png"
              />
            </Grid>
            {/* <Grid item sm={2}></Grid> */}
            <Grid item xs={12} sm={5} md={4}>
              <Card
                title="HTML"
                language="html"
                type="Markup language"
                link="https://html.com/"
                image="html.png"
              />
            </Grid>

            <Grid item xs={12} sm={5} md={4}>
              <Card
                title="Css"
                language="css"
                type="bootstrap"
                link="https://www.w3schools.com/css/"
                image="css.png"
              />
            </Grid>
            {/* <Grid item sm={2}></Grid> */}
            <Grid item xs={12} sm={5} md={4}>
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
            <Grid item xs={12} sm={5} md={4} marginBottom="30px">
              <Card
                title="State Management"
                language="Js"
                type="Zustand"
                link="https://github.com/pmndrs/zustand"
                image="zustand.avif"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default TechStack;
