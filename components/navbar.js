import React from "react";
import Link from "next/link";

const h3 = {
  color: "#fff",
  fontSize: "25px",
  fontWeight: "lighter",
};

const Navbar = () => {
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
        <div className="bodytext">
          <div className="patterns">
            <svg width="100%" height="100%">
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#polka-dots)"
              >
                {" "}
              </rect>

              <text x="50%" y="60%" textAnchor="middle" className="title">
                Hi, I am Yehya Barakat
              </text>
            </svg>
          </div>
          <h3 className="header3">
            A CS Graduate and a Front-End Web Developer <br></br>
            <br></br>Click the menu button on top to view more about me
          </h3>
        </div>
      </main>
    </>
  );
};

export default Navbar;
