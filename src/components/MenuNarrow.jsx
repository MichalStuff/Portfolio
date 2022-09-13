import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faCircleQuestion, faCode, faEnvelope, faRobot, faHome} from '@fortawesome/free-solid-svg-icons';


function MenuNarrow() {

  const [menuState, setMenuState] = useState(false);
  
  const handleMenu = ()=>{  
    setMenuState(!menuState);
  }

  return (
    <nav className='MenuNarrow' style={menuState? {backgroundColor : "#222222dd"}:{width : '0'}}>
      <div className='MenuNarrow__icon --show' onClick={handleMenu} >
          {menuState? 
            <FontAwesomeIcon icon={faBars} className="MenuNarrow__icon --active"/> :
            <FontAwesomeIcon icon={faBars} className="MenuNarrow__icon "/> }
        </div>
        {menuState? 
        <ul className="MenuNarrow__list">
          <li id='home' className="MenuNarrow__list__item">
              <a href="#" className='MenuNarrow__list__link'>
                <FontAwesomeIcon icon={faHome} className="MenuNarrow__list__icon"/> 
                Home
              </a>
            </li>
          <li id='about' className="MenuNarrow__list__item">
              <a href="#About" className='MenuNarrow__list__link'>
                <FontAwesomeIcon icon={faCircleQuestion} className="MenuNarrow__list__icon"/> 
                About
              </a>
            </li>
          <li id='technologies' className="MenuNarrow__list__item">
            <a href="#Technologies" className='MenuNarrow__list__link'>
                <FontAwesomeIcon icon={faRobot} className="MenuNarrow__list__icon"/> 
                Technologies
            </a>
          </li>
          <li  id='projects' className="MenuNarrow__list__item">
            <a href="#Projects" className='MenuNarrow__list__link'>
                <FontAwesomeIcon icon={faCode} className="MenuNarrow__list__icon"/> 
                Projects
            </a>
          </li>
          <li id='contact' className="MenuNarrow__list__item">
            <a href="#Contact" className='MenuNarrow__list__link'>
                <FontAwesomeIcon icon={faEnvelope} className="MenuNarrow__list__icon"/> 
                Contact
            </a>
          </li>
        </ul> : 
        <ul className="MenuNarrow__list --show">
          <li  className="MenuNarrow__list__item">About</li>
          <li  className="MenuNarrow__list__item">Technologies</li>
          <li  className="MenuNarrow__list__item">Projects</li>
          <li  className="MenuNarrow__list__item">Contact</li>
          <li className='MenuNarrow__list__item'>Home</li>
        </ul> 
        }
        
    </nav>
  )
}

export default MenuNarrow