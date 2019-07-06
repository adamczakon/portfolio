import React from "react";
import AppNavbar from "./AppNavbar";

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="home__background">
        <AppNavbar />
        <div className="home__header">
          <h1 className="item">Adam Czakon</h1>
          <h2 className="item">Front-end web developer</h2>
          <a className="button" href="#projects">
            Check my projects
          </a>
        </div>
      </div>
      <div className="home__introduction">
        <h1 className="heading">My Portfolio</h1>
        <p>
          Below you can see my projects. I'm still working on some of them.{" "}
          <br /> I've listed technologies that I used to create each project.
        </p>
      </div>
    </div>
  );
}
