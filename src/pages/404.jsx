import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Navbar } from '../components/Navbar';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="not__found-container">
        <Fade duration={2000} cascade>
          <h1>404 Not found</h1>
          <a href="/">Back home</a>
        </Fade>
      </div>
    </>
  );
};

export default NotFound;
