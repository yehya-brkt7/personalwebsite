import React from "react";
import style from "../styles/card.module.scss";

const Card = (props) => {
  return (
    <>
      <div className={style.game}>
        <div className={style.rank}>{props.language}</div>
        <div className={style.front}>
          <img
            className={style.img}
            src={props.image}
            height="120px"
            alt="game"
          ></img>
          <h3 id={style.p} className={style.name}>
            {props.title}
          </h3>
          <div className={style.status}>
            <p id={style.p} className={style.viewers}>
              {props.type}
            </p>
            {/* <div className={style.streamers}>
              <img
                className={style.img}
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
              ></img>
              <img
                className={style.img}
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt=""
              ></img>
              <img
                className={style.img}
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e"
                alt=""
              ></img>
            </div> */}
          </div>
        </div>
        <div className={style.back}>
          {/* <div className={style["streaming-info"]}>
            <p id={style.p} className={style["game-stat"]}>
              {props.rank}
              174.4k <span className={style.span}>Watching</span>
            </p>
            <p id={style.p} className={style["game-stat"]}>
              3,172<span>Streams</span>
            </p>
          </div> */}
          <a href={props.link} target="_blank" rel="noreferrer">
            <button className={style.btn} disabled={props.check}>
              Visit website
            </button>
          </a>
          {/* <div className={style.streamers}>
            <div className={style.streamer}>
              <div className={style.icon}>
                <img
                  className={style.img}
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                ></img>
              </div>
              <p id={style.p} className={style.name}>
                gamer 1
              </p>
              <p id={style.p} className={style.number}>
                18k
              </p>
            </div>
            <div className={style.streamer}>
              <div className={style.icon}>
                <img
                  className={style.img}
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt=""
                ></img>
              </div>
              <p id={style.p} className={style.name}>
                gamer 2
              </p>
              <p id={style.p} className={style.number}>
                9,600
              </p>
            </div>
            <div className={style.streamer}>
              <div className={style.icon}>
                <img
                  className={style.img}
                  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e"
                  alt=""
                ></img>
              </div>
              <p id={style.p} className={style.name}>
                gamer 3
              </p>
              <p id={style.p} className={style.number}>
                7,407
              </p>
            </div>
          </div> */}
        </div>
        <div className={style.backgroundWrapper}></div>
      </div>
    </>
  );
};

export default Card;
