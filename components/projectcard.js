import React from "react";
import style from "../styles/projectcard.module.css";
import { Grid } from "@mui/material";

const ProjectCard = (props) => {
  return (
    <>
      <figure className={style.figure}>
        <Grid container justifyContent="center" direction="row">
          <Grid item xs={2}>
            <h1 className={style.h1}>{props.title}</h1>
          </Grid>
          <Grid item xs={10}></Grid>
          <Grid item xs={11}>
            <img className={style.img} src={props.image} alt="" />
          </Grid>
          <div className={style.figcaptioncontainer}>
            <figcaption className={style.figcaption}>
              <Grid item xs={12} marginBottom="20px">
                <a href={props.codelink} target="_blank" rel="noreferrer">
                  <span
                    className={
                      props.check ? style.disabledbutton : style.button
                    }
                    disabled={props.check}
                  >
                    Code
                  </span>
                </a>
              </Grid>
              <Grid item xs={12}>
                <h3 className={style.h3}>Description</h3>

                <p className={style.p}>{props.info}</p>
                <p className={style.p}>{props.info2}</p>
                <p className={style.p}>{props.info3}</p>
                <p className={style.p}>{props.info4}</p>
              </Grid>
              <Grid item xs={12}>
                <a href={props.link} target="_blank" rel="noreferrer">
                  <span
                    className={
                      props.check ? style.disabledbutton : style.button
                    }
                    disabled={props.check}
                  >
                    Link
                  </span>
                </a>
              </Grid>
            </figcaption>
          </div>
        </Grid>
      </figure>
    </>
  );
};

export default ProjectCard;
