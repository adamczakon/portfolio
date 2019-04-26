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
            <h1 className="item">Lyrics app</h1>
            <p className="secondary item">
              Web application that can be used for finding songs lyrics.
            </p>
            <p>
              <span className="primary bold">Technologies: </span> React, Redux,
              Bootstrap
            </p>
            <a
              href="https://github.com/adamczakon/Lyrics-App-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </div>
          <div className="project-image">
            <img src={Lyrics_app} alt="Loading..." />
          </div>
        </div>
        <div className="project">
          <div className="project-description">
            <h1 className="item">Exam schedule app</h1>
            <p className="secondary item">
              Web application for scheduling exams, tests, homeworks.
            </p>
            <p>
              {" "}
              <span className="primary bold">Technologies: </span>React, Redux,
              Bootstrap/Reactstrap
            </p>
            <a
              href="https://github.com/adamczakon/Exam-Schedule-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </div>
          <div className="project-image">
            <img src={Schedule_app} alt="Loading..." />
          </div>
        </div>
        <div className="project last">
          <div className="project-description">
            <h1 className="item">App for learning english</h1>
            <p className="secondary item">
              Web application with interactive excersises for learning english.
            </p>
            <p>
              <span className="primary bold">Technologies: </span>HTML/CSS,
              JavaScript
            </p>
            <p className="unavaible">UNAVAIBLE</p>
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
