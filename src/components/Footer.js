import React from "react";
import githubIcon from "../imgs/githubIcon.svg";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer__author">{"\u00A9"} Adam Czakon 2019</p>
      <a href="https://github.com/adamczakon">
        <img className="footer__icon" src={githubIcon} />
      </a>
    </div>
  );
}
