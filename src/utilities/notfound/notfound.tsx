import React from 'react';
import './notfound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-div">
      <h1>404: Space, the Final Frontier</h1>
      <p >Looks like you've drifted a bit too far into the unknown.</p>
      <img className="not-found-img" src="404.jpg" alt="Lost in space..." />
      <p >Grab your space tether and <a className="not-found-a" href="/">Return to the mothership</a>.</p>
    </div>
  );
};

export default NotFound;