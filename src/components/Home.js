import React from "react";
import AppNavbar from "./AppNavbar";

export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <div className="home" id="home">
        <div className="overlay">
          <AppNavbar />
          <div className="banner">
            <h1 className="item">Adam Czakon</h1>
            <h2 className="item">Front-end web developer</h2>
            <a href="#projects">Check my projects</a>
          </div>
        </div>
        <div className="home-introduction">
          <h1>My Portfolio</h1>
          <p>
            Below you can see my projects. I am still working on some of them.{" "}
            <br /> I've listed technologies that I used to create each project.
          </p>
        </div>
      </div>
    </div>
  );
}
