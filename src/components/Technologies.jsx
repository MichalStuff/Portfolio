import React, { forwardRef, useRef, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5, faJsSquare, faReact, faCss3Alt, faSass} from '@fortawesome/free-brands-svg-icons';
import {FaNode} from 'react-icons/fa';
import { SiCplusplus, SiPython, SiGit } from 'react-icons/si';

function Technologies(props,ref) {

  const technologiesRef = useRef();

  useEffect(()=>{
    ref.current.push(technologiesRef.current);
  },[]);

  return (
    <div className='Technologies' id='Technologies' ref={technologiesRef}>
      <h3 className='Technologies__header'>Technologies</h3>
      <div className='Technologies__list'>
        <FontAwesomeIcon icon={faHtml5} className='Technologies__list__icon --html'/>
        <FontAwesomeIcon icon={faJsSquare} className='Technologies__list__icon --js' />
        <FontAwesomeIcon icon={faReact} className='Technologies__list__icon --react' />
        <FontAwesomeIcon icon={faCss3Alt} className='Technologies__list__icon --css' />
        <FontAwesomeIcon icon={faSass} className='Technologies__list__icon --sass' />
        <SiCplusplus className='Technologies__list__icon --cplusplus'/>
        <SiPython className='Technologies__list__icon --python'/>
        <FaNode className='Technologies__list__icon --node'/>
        <SiGit className='Technologies__list__icon --git'/>
      </div>
    </div>
  )
}

export default forwardRef(Technologies);