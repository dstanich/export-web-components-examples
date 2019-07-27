import React from 'react';

import './Title.css';
import github from './GitHub-Mark-Light-32px.png';

function Title(props) {
  return (
    <div className="Title">
      <span className="text">{props.text}</span>
      <a
        className="github"
        aria-label="GitHub"
        href="https://github.com/dstanich/export-web-components-examples"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="" />
      </a>
    </div>
  );
}

export default Title;
