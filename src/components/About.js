import React from 'react';

import ayo from './images/ayomi.jpeg';
import './About.css';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='container'>
        <img src={ayo} alt='my name ' />
        <div className='col-2'>
          <h2>About</h2>
          <span className='line'></span>
          <p>
            Intense is an International Financial Planning company with offices
            i n multiple jurisdictions over the world. Working with Intense
            gives me the ability to advise internat ional expatriates living in
            the middle east from where I live in USA.
          </p>
          <p>
            I am a Front-end developer/ engineer with proven skills on HTML,
            CSS, JavaScript, React.js Angular, API in web development.
            Well-versed in requirements for HTML5 and CSS3 development, with an
            in-depth knowledge of Bootstrap and JQuery. can create high
            presentation UI with exceptional handling to enhance the user
            experience and other impressive technological solutions.
          </p>
          <button className='button'>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
