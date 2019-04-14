import React from "react";
import Schedule_app from "../imgs/exam_schedule.png";
import English_app from "../imgs/english_app.png";
import Lyrics_app from "../imgs/lyrics_app.png";
import Contact from "./Contact";

export default function Portfolio() {
  return (
    <div id="projects">
      <div className="container">
        <div className="project">
          <div className="project-description">
            <h1 className="item">Lyric search app</h1>
            <p className="secondary item">
              Web application that can be used for finding lyrics.
            </p>
            <p>
              <span className="primary bold">Technologies: </span> React, Redux,
              Bootstrap
            </p>
            <a href="https://github.com/adamczakon/Lyrics-App-React">GITHUB</a>
          </div>
          <div className="project-image">
            <img src={Lyrics_app} alt="Loading..." />
          </div>
        </div>
        <div className="project">
          <div className="project-description">
            <h1 className="item">Lyric search app</h1>
            <p className="secondary item">
              Web application for scheduling exams, tests, homeworks.
            </p>
            <p>
              {" "}
              <span className="primary bold">Technologies: </span>React, Redux,
              Bootstrap/Reactstrap
            </p>
            <a href="https://github.com/adamczakon/Exam-Schedule-React">
              GITHUB
            </a>
          </div>
          <div className="project-image">
            <img src={Schedule_app} alt="Loading..." />
          </div>
        </div>
        <div className="project last">
          <div className="project-description">
            <h1 className="item">Lyric search app</h1>
            <p className="secondary item">
              Web application for learning english by completing interactive
              excersises.
            </p>
            <p>
              <span className="primary bold">Technologies: </span>HTML/CSS,
              JavaScript
            </p>
            <a>UNAVAIBLE</a>
          </div>
          <div className="project-image">
            <img src={English_app} alt="Loading..." />
          </div>
        </div>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
