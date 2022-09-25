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
      <div>
        <input type="checkbox" id="active" />
        <label for="active" className="menu-btn">
          <span></span>
        </label>
        <label for="active" className="close"></label>
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
          {/* <div className="title">Hello, My name is Yehya Barakat</div>
          <p>Welcome to my portfolio</p> */}
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

                <text x="50%" y="60%" text-anchor="middle" classname="title">
                  Hi, I'm Yehya Barakat
                </text>
              </svg>
            </div>
            <h3 className="header3">
              A CS Graduate and a Front-End Web Developer <br></br>
              <br></br>Click the menu button on top to view more about me
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
