import AuthorName from '@/ui/AuthorName';
import React from 'react';
import { BsFillSkipStartFill } from 'react-icons/bs';

const Hero: React.FC = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="left-text">
          <h1>
            The World&apos;s Most Invincible <span className="special">NextJS</span>
            Project
          </h1>
          <AuthorName />
          <button className="get-started">
            <BsFillSkipStartFill className="icon" />
            <p>Get started</p>
          </button>
        </div>
        <div className="right-image">
          <svg
            id="logo-35"
            viewBox="0 0 50 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
              className="ccompli1"
              fill="#007AFF"
            ></path>
            <path
              d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
              className="ccustom"
              fill="#312ECB"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
