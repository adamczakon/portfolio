import React from "react";
import githubIcon from "../imgs/githubIcon.svg";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='info__wrapper'>
        <p className='footer__info footer__margin'>
          {"\u00A9"} Adam Czakon 2019
        </p>
        <p className='footer__info'>adam.czakon63@gmail.com</p>
        <div className='footer__github'>
          <a href='https://github.com/adamczakon'>
            <img className='footer__icon' alt='github' src={githubIcon} />{" "}
          </a>
          <a
            href='https://github.com/adamczakon'
            className='footer_link footer_info'
          >
            {" "}
            github.com/adamczakon
          </a>
        </div>
      </div>
    </div>
  );
}
