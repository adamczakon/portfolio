import React from "react";
import itcloud from "../imgs/itcloud.png";
import spaceverse from "../imgs/spaceverse.png";
import formovie from "../imgs/formovie.png";
import Contact from "./Contact";

export default function Portfolio() {
  return (
    <div id='projects'>
      <div className='container'>
        <div className='project'>
          <div className='project-description'>
            <h1 className='item'>IT Cloud</h1>
            <p className='secondary item'>Social website for developers.</p>
            <h4 className='description-header'>Technologies</h4>
            <div className='description-grid'>
              <div>
                <h4 className='technologies-header'>Front</h4>
                <ul className='project-technologies'>
                  <li>React</li>
                  <li>Redux</li>
                  <li>SCSS</li>
                </ul>
              </div>
              <div>
                <h4 className='technologies-header'>Back</h4>
                <ul className='project-technologies'>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
            <div className='description-grid'>
              <a
                className='btn btn-github'
                href='https://github.com/adamczakon/IT-Cloud'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a
                className='btn btn-live'
                href='https://fast-shore-92170.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Live
              </a>
            </div>
          </div>
          <div className='project-image'>
            <img src={itcloud} alt='Loading...' />
          </div>
        </div>
        <div className='project'>
          <div className='project-description'>
            <h1 className='item'>Spaceverse</h1>
            <p className='secondary item'>
              Application for managing space flights.
            </p>
            <h4 className='description-header'>Technologies</h4>
            <div className='description-grid'>
              <div>
                <h4 className='technologies-header'>Front</h4>
                <ul className='project-technologies'>
                  <li>React</li>
                  <li>Redux</li>
                  <li>SCSS</li>
                </ul>
              </div>
              <div>
                <h4 className='technologies-header'>Back</h4>
                <ul className='project-technologies'>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
            <div className='description-grid'>
              <a
                className='btn btn-github'
                href='https://github.com/adamczakon/IT-Cloud'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a
                className='btn btn-live'
                href='https://fast-shore-92170.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Live
              </a>
            </div>
          </div>
          <div className='project-image'>
            <img src={spaceverse} alt='Loading...' />
          </div>
        </div>
        <div className='project last'>
          <div className='project-description'>
            <h1 className='item'>ForMovie</h1>
            <p className='secondary item'>Website for browsing movies.</p>
            <h4 className='description-header'>Technologies</h4>
            <div className='description-grid'>
              <div>
                <h4 className='technologies-header'>Front</h4>
                <ul className='project-technologies'>
                  <li>React</li>
                  <li>Redux</li>
                  <li>SCSS</li>
                </ul>
              </div>
            </div>
            <div className='description-grid'>
              <a
                className='btn btn-github'
                href='https://github.com/adamczakon/IT-Cloud'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a
                className='btn btn-live'
                href='https://fast-shore-92170.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Live
              </a>
            </div>
          </div>
          <div className='project-image'>
            <img src={formovie} alt='Loading...' />
          </div>
        </div>
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  );
}
