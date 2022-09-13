import React, {useRef} from 'react';
import { useEffect } from 'react';
import { forwardRef } from 'react';

function About(props,ref) {

  const aboutRef = useRef();

  useEffect(()=>{
    ref.current.push(aboutRef.current);
  },[]);

  return (
    <div className='About' id='About' ref={aboutRef}>
      <div className="Aobut__me About__container">
      <h3 className='About__me__header About__header'>Me</h3>
      <p className='About__me__text About__text'>
        My name is Michał and I am 24 years old student on Czestochowa University of Technology.
      </p>
      </div>
      <div className="About__exp About__container">
      <h3 className='About__exp__header About__header'>Experience</h3>
      <p className='About__exp__text About__text'>My journey with programming started in high school. My first programming language was C++,next language that i learned was JavaScript and i loved it. 1 year ago i started online course on Udemy to learn more about JS and React and also CSS and HTML. Thanks to learning that i made couple of projects
      </p>
      </div>
      <div className="About__development About__container">
      <h3 className='About__development__header About__header'>Development</h3>
      <p className='About__development__text  About__text'>The main reason why I would like to get a job as a front end is gaining experience and the desire to develop my skills through cooperation with experienced people and become part of interesting projects. I like to learn new things specialy if it's related to the computer science. In the future i would like to become Fullstack-dev using Node.js and later also .NET. Also during my studies i got to know what IA is and I want to learn more about it.
      </p>
      </div>
      <div className="About__hobby About__container">
      <h3 className='About__hobby__header About__header'>Hobby</h3>
      <p className='About__hobby__text About__text'>In my spare time I like to learning new stuff, play with Arduino,riding a motocycle, a good movie, 
      </p>
      </div>
    </div>
  )
}

// export default About;
export default forwardRef(About);