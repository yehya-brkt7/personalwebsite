import React from "react";
import style from "../styles/techcard.module.css";
import Grid from "@mui/material/Grid";

const TechCard = (props) => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        className={style.container}
        alignItems="center"
      >
        <Grid item xs={12}>
          <h6 className={style.title}>{props.title}</h6>
        </Grid>
        <Grid item xs={2}>
          <img className={style.image} src={props.source}></img>
          <p>{props.title1}</p>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <img className={style.image} src={props.source2}></img>
          <p>{props.title2}</p>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <img className={style.image} src={props.source3}></img>
          <p>{props.title3}</p>
        </Grid>
      </Grid>
    </>
  );
};

export default TechCard;
